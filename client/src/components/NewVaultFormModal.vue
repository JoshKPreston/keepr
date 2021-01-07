<template>
  <div class="new-vault-form-modal">
    <div
      id="modal_NewVaultForm"
      class="modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="vaultFormModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content container p-0 bg-light">
          <div class="row justify-content-center align-items-center py-5">
            <div class="col-4">
              <form @submit.prevent="createVault">
                <div class="form-group">
                  <input
                    v-model="state.newVault.name"
                    type="text"
                    class="form-control"
                    name="Name"
                    id=""
                    aria-describedby="helpId"
                    placeholder="Name"
                  >
                  <!-- <small id="helpId" class="form-text text-muted">Enter a name</small> -->
                </div>
                <div class="form-group">
                  <input
                    v-model="state.newVault.description"
                    type="text"
                    class="form-control"
                    name="Description"
                    id=""
                    aria-describedby="helpId"
                    placeholder="Description"
                  >
                  <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input type="checkbox" id="checkbox" v-model="state.newVault.isPrivate">
                    Private Vault?
                  </div>
                  <button type="submit" class="btn btn-secondary">
                    New Vault
                  </button>
                </div>
              </form>
            </div>
            <div class="col-4">
            </div>
            <form @submit.prevent="createVault">
              <div class="form-group">
                <input
                  v-model="state.newKeep.name"
                  type="text"
                  class="form-control"
                  name="Name"
                  id=""
                  aria-describedby="helpId"
                  placeholder="Name"
                >
                <!-- <small id="helpId" class="form-text text-muted">Enter a name</small> -->
              </div>
              <div class="form-group">
                <input
                  v-model="state.newKeep.description"
                  type="text"
                  class="form-control"
                  name="Description"
                  id=""
                  aria-describedby="helpId"
                  placeholder="Description"
                >
                <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
              </div>
              <div class="form-group">
                <input
                  v-model="state.newKeep.img"
                  type="text"
                  class="form-control"
                  name="Img"
                  id=""
                  aria-describedby="helpId"
                  placeholder="ImgUrl"
                >
                <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
              </div>
              <button @click="createKeep" class="btn btn-secondary">
                New Keep
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { vaultsService } from '../services/VaultsService'
export default {
  name: 'NewVaultFormModal',
  setup() {
    const state = reactive({
      newVault: {
        name: '',
        description: '',
        isPrivate: null
      }
    })
    return {
      state,
      createVault() {
        vaultsService.Create(state.newVault)
        state.newVault = {}
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
