<template>
  <div class="keep-component">
    <img
      @click="addKeepView"
      data-toggle="modal"
      :data-target="'#modal_keep_' + keep.id"
      class="keep-img"
      :src="keep.img"
    >
    <h4
      class="keep-name text-info"
      data-toggle="modal"
      :data-target="'#modal_keep_' + keep.id"
    >
      {{ keep.name }}
    </h4>
    <div @click="pushPage('ProfilePage', keep.creatorId)" class="profile-icon fa-2x text-primary bg-info">
      <i class="fa fa-user-circle-o" aria-hidden="true"></i>
    </div>
    <keep-modal :keep-prop="keep" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { keepsService } from '../services/KeepsService'
import router from '../router'
import { AppState } from '../AppState'
export default {
  name: 'KeepComponent',
  props: {
    keepProp: {
      type: Object,
      default: () => {
        alert('Keep property does not exist (keep-component)')
      }
    }
  },
  setup(props) {
    return {
      keep: computed(() => props.keepProp),
      async Delete() {
        document.querySelector('.modal-backdrop').remove()
        keepsService.Delete(this.keep.id)
      },
      pushPage(pageName, creatorId) {
        router.push({ name: pageName, params: { id: creatorId } })
      },
      async addKeepView() {
        await keepsService.GetOne(props.keepProp.id)
        this.keep.views = AppState.activeKeep.views
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  .keep-component {
    cursor: pointer;
    margin-top: 2vh;
    position:relative;
  }
  .keep-name {
    position: absolute;
    bottom: 1vh;
    left: 2vw;
    font-size: 2em;
  }
  .profile-icon {
    position: absolute;
    bottom: 2vh;
    right: 2vh;
    border-radius: 100%;
    font-size: 3em;
  }
  .keep-img {
    width: 100% !important;
    height: auto !important;
    border-radius: 1.5vh;
  }
</style>
