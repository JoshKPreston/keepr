<template>
  <div class="vault-component col-3">
    <div @click="pushPage('ProfilePage', vault.creatorId)" class="card">
      {{ vault.name }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { vaultsService } from '../services/VaultsService'
export default {
  name: 'VaultComponent',
  props: {
    vaultProp: {
      type: Object,
      default: () => {
        alert('Vault property does not exist')
      }
    }
  },
  setup(props) {
    return {
      vault: computed(() => props.vaultProp),
      Delete() {
        vaultsService.Delete(this.vault.id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
