<template>
  <div
    class="vault-component"
  >
    <!-- <img v-for="k in vaultKeeps" :key="k" :src="k.img" /> -->
    <span
      v-if="profile.id == vault.creatorId"
      @click="Delete"
      class="btn-delete text-danger"
    >
      &times;
    </span>
    <h4
      class="vault-name text-dark"
      @click="pushPage('VaultPage', vault.id)"
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
    bottom: 1vh;
    left: 2vw;
    font-size: 2em;
  }
</style>
