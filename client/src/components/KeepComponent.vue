<template>
  <div class="keep-component">
    <span
      v-if="profile.id == keep.creatorId && (route.name != 'HomePage' && route.name != 'VaultPage')"
      @click="Delete"
      class="btn-delete btn btn-outline-danger btn-sm"
    >
      &times;
    </span>
    <span
      v-if="profile.id == keep.creatorId && route.name == 'VaultPage'"
      @click="removeFromVault(keep.vaultKeepId, keep.id)"
      class="btn-delete btn btn-outline-warning btn-sm"
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
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'
import $ from 'jquery'
import { vaultKeepsService } from '../services/VaultKeepsService'
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
      vaultKeeps: computed(() => AppState.vaultKeeps.filter(e => e.vaultId === route.params.id)),
      async Delete() {
        await Swal.fire({
          text: 'Are you sure you want to delete this Keep?',
          icon: 'warning',
          confirmButtonText: 'Delete',
          showCancelButton: true,
          cancelButtonText: 'Cancel'
        }).then(isConfirm => {
          if (isConfirm.value) {
            AppState.keeps = AppState.keeps.filter(e => e.id !== this.keep.id)
            keepsService.Delete(this.keep.id)
            $('#modal_keep_' + this.keep.id).modal('hide')
          }
        })
      },
      async removeFromVault(vkId, keepId) {
        await Swal.fire({
          text: 'Are you sure you want to remove this Keep from the Vault?',
          icon: 'warning',
          confirmButtonText: 'Remove',
          showCancelButton: true,
          cancelButtonText: 'Cancel'
        }).then(isConfirm => {
          if (isConfirm.value) {
            this.keep.keeps--
            AppState.keeps = AppState.keeps.filter(e => e.id !== keepId)
            vaultKeepsService.Delete(vkId)
          }
        })
      },
      pushPage(pageName, id) {
        router.push({ name: pageName, params: { id: id } })
        $('#modal_keep_' + this.keep.id).modal('hide')
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
    border-radius: 1.5vh;
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
    top: .75vh;
    right: .5vw;
    z-index: 1;
  }
</style>
