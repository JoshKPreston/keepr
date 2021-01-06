<template>
  <div class="keep-modal">
    <div
      :id="'modal_keep_' + keep.id"
      class="modal bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content container p-0 bg-light">
          <div class="row p-2">
            <div class="col-6 align-self-center">
              <img class="img-fluid rounded d-block m-auto" :src="keep.img" :alt="keep.name">
            </div>
            <div class="col-6 pt-3 d-flex flex-column justify-content-between">
              <div class="row justify-content-center align-items-center">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-eye text-primary pr-2" aria-hidden="true"></i>
                  <span>{{ keep.views }}</span>
                </div>
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-eye text-primary pr-2" aria-hidden="true"></i>
                  <span>{{ keep.keeps }}</span>
                </div>
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-share text-primary pr-2" aria-hidden="true"></i>
                  <span>124</span>
                </div>
                <button
                  data-dismiss="modal"
                  :data-target="'modal_keep_' + keep.id"
                  class="btn btn-sm btn-outline-danger btn-close-modal"
                >
                  &times;
                </button>
              </div>
              <div class="row justify-content-center">
                <h1>
                  {{ keep.name }}
                </h1>
              </div>
              <div class="row justify-content-center p-2">
                <!-- <p>{{ keep.description }}</p> -->
                <div class="keep-desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam ab, quia voluptatum labore alias itaque unde velit ad cupiditate consectetur voluptatem harum quis maiores numquam id fugiat facilis repellat.
                  </p>
                </div>
              </div>
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-4">
                  <div class="dropdown open">
                    <button class="btn btn-sm btn-primary dropdown-toggle text-uppercase"
                            type="button"
                            id="triggerId"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                    >
                      Add to Vault
                    </button>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item disabled" href="#">Disabled action</a>
                    </div>
                  </div>
                </div>
                <div class="col-2 justify-content-center" @click="Delete" id="btn-delete">
                  <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                </div>
                <div class="col-2 justify-content-center">
                  <img
                    :src="creator.picture"
                    alt="user photo"
                    height="40"
                    class="rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { keepsService } from '../services/KeepsService'
export default {
  name: 'KeepModal',
  props: {
    keepProp: {
      type: Object,
      default: () => {
        alert('Keep property does not exist (keep-modal)')
      }
    }
  },
  setup(props) {
    return {
      keep: computed(() => props.keepProp),
      creator: computed(() => AppState.creator),
      async Delete() {
        await keepsService.Delete(this.keep.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .keep-desc {
    line-height: 3vh;
  }
  .fa-trash-o {
    color: var(--secondary);
  }
  .fa-trash-o:hover {
    color: var(--danger);
  }
  .btn-close-modal {
    position: absolute;
    right: 1.5vw;
    top: 0;
  }
  .modal-content {
    width: 80vw;
  }
</style>
