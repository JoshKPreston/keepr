<template>
  <div
    class="vault-component float-left p-3 my-4"
  >
    <img
      @click="pushPage('VaultPage', vault.id)"
      class="rounded"
      height="150"
      width="150"
      :src="vaultImages[Math.floor(Math.random() * vaultImages.length)]"
    />
    <span
      v-if="profile.id == vault.creatorId"
      @click="Delete"
      class="btn-delete btn btn-outline-danger btn-sm"
    >
      &times;
    </span>
    <div v-if="vault.isPrivate" class="private-vault">
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
        AppState.vaults = AppState.vaults.filter(e => e.id !== this.vault.id)
        vaultsService.Delete(this.vault.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .vault-component {
    height: 15vh;
    cursor: pointer;
    margin-top: 2vh;
    position:relative;
  }
  .vault-name {
    position: absolute;
    bottom: 0vh;
    left: 2.5vw;
    z-index: 1;
  }
  .btn-delete {
    position: absolute;
    top: 2.5vh;
    right: 2vw;
  }
  .private-vault {
    background: rgba(0,0,0,0.5);
    height: 150px;
    width: 150px;
    position: absolute;
    top: 16px;
    left: 16px;
  }
  .fa-lock {
    color: #fff;
    position: relative;
    padding: 1vh;
  }
</style>
