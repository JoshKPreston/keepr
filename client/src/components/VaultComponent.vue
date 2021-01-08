<template>
  <div
    class="vault-component float-left rounded shadow"
  >
    <span
      v-if="profile.id == vault.creatorId"
      @click="Delete"
      class="btn-delete btn btn-outline-danger btn-sm"
    >
      &times;
    </span>
    <img
      @click="pushPage('VaultPage', vault.id)"
      class="vault-image rounded"
      height="200"
      width="200"
      :src="vaultImages[Math.floor(Math.random() * vaultImages.length)]"
    />
    <div v-if="vault.isPrivate" class="private-vault rounded">
      <i class="fa fa-lock" aria-hidden="true"></i>
    </div>
    <h4
      @click="pushPage('VaultPage', vault.id)"
      class="vault-name text-light"
    >
      {{ vault.name }}
    </h4>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import router from '../router'
import { vaultsService } from '../services/VaultsService'
import Swal from 'sweetalert2'
export default {
  name: 'VaultComponent',
  props: {
    vaultProp: {
      type: Object,
      default: () => {
        alert('Vault property does not exist (vault-component)')
      }
    }
  },
  setup(props) {
    return {
      vault: computed(() => props.vaultProp),
      vaultImages: computed(() => AppState.vaultImages),
      keeps: computed(() => AppState.vaultKeeps),
      profile: computed(() => AppState.profile),
      pushPage(pageName, id) {
        router.push({ name: pageName, params: { id: id } })
      },
      async Delete() {
        await Swal.fire({
          text: 'Are you sure you want to delete this Vault?',
          icon: 'warning',
          confirmButtonText: 'Delete',
          showCancelButton: true,
          cancelButtonText: 'Cancel'
        }).then(isConfirm => {
          if (isConfirm.value) {
            AppState.vaults = AppState.vaults.filter(e => e.id !== this.vault.id)
            vaultsService.Delete(this.vault.id)
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .vault-component {
    cursor: pointer;
    position:relative;
    margin: 1vh;
  }
  .vault-image {
    position: relative;
  }
  .vault-image:hover {
    z-index: 1;
  }
  .vault-name {
    position: absolute;
    bottom: 0vh;
    left: 2.5vw;
    z-index: 1;
  }
  .btn-delete {
    position: absolute;
    top: .75vh;
    right: .5vw;
    z-index: 2;
  }
  .private-vault {
    background: rgba(0,0,0,0.5);
    height: 200px;
    width: 200px;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .private-vault:hover {
    z-index: -1;
  }
  .fa-lock {
    color: #fff;
    position: relative;
    padding: 1vh;
  }
</style>
