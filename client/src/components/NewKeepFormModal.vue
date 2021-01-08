<template>
  <div class="new-keep-form-modal">
    <div
      id="modal_NewKeepForm"
      class="modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="keepFormModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg border border-primary rounded">
        <div class="modal-content container p-0 bg-light">
          <div class="row">
            <div class="col-12 d-flex justify-content-between">
              <h1 class="p-3">
                New Keep
              </h1>
              <button
                data-dismiss="modal"
                data-target="modal_NewVaultForm"
                class="btn btn-sm btn-outline-danger btn-close-modal m-3"
              >
                &times;
              </button>
            </div>
          </div>
          <div class="row justify-content-center align-items-center py-5">
            <div class="col-12">
              <form class="p-3" @submit.prevent="createKeep">
                <div class="form-group">
                  <label for="name">Title</label>
                  <input
                    v-model="state.newKeep.name"
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="Title..."
                  >
                </div>
                <div class="form-group">
                  <label for="name">Image Url</label>
                  <input
                    v-model="state.newKeep.img"
                    type="text"
                    class="form-control"
                    name="image"
                    placeholder="URL..."
                  >
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <textarea
                    v-model="state.newKeep.description"
                    class="w-100"
                    name="description"
                    cols="30"
                    rows="10"
                    placeholder="Keep Description..."
                  ></textarea>
                </div>
                <!-- <div class="form-group">
                <label for="name">Tags</label>
                <input
                  v-model="state.newKeep.tags"
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="URL..."
                >
                <small id="helpId" class="form-text text-muted">Help text</small>
              </div> -->
                <button type="submit" class="float-right btn btn-primary">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { keepsService } from '../services/KeepsService'
import { profilesService } from '../services/ProfilesService'
import { useRoute } from 'vue-router'
import $ from 'jquery'
export default {
  name: 'NewKeepFormModal',
  setup() {
    const route = useRoute()
    const state = reactive({
      newKeep: {
        name: '',
        description: '',
        img: ''
      }
    })
    return {
      state,
      async createKeep() {
        await keepsService.Create(state.newKeep)
        state.newKeep = {}
        $('#modal_NewKeepForm').modal('hide')
        await profilesService.GetKeepsByProfileId(route.params.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .new-keep-form-modal {
    position: relative;
  }
  .btn-close-modal {
    position: absolute;
    right: 1.5vw;
    top: 0;
  }
</style>
