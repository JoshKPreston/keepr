<template>
  <div class="keep-component">
    <span
      v-if="profile.id == keep.creatorId"
      @click="Delete"
      class="btn-delete text-danger"
    >
      &times;
    </span>
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
import { closeModal } from '../utils/ModalMod'
import { useRoute } from 'vue-router'
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
    const route = useRoute()
    return {
      route,
      keep: computed(() => props.keepProp),
      user: computed(() => AppState.user),
      profile: computed(() => AppState.profile),
      async Delete() {
        AppState.keeps = AppState.keeps.filter(e => e.id !== this.keep.id)
        keepsService.Delete(this.keep.id)
        try { closeModal() } catch {}
      },
      pushPage(pageName, id) {
        router.push({ name: pageName, params: { id: id } })
        try { closeModal() } catch {}
      },
      async addKeepView() {
        await keepsService.GetOne(props.keepProp.id)
        this.keep.views = AppState.activeKeep.views
      }
    }
  }
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
  .btn-delete {
    position: absolute;
    top: 0;
    right: 1vw;
    font-size: 2em;
  }
</style>
