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
      <div class="modal-dialog modal-lg border border-primary rounded">
        <div class="modal-content container p-0 bg-light">
          <div class="row">
            <div class="col-12 d-flex justify-content-between">
              <h1 class="p-3">
                New Vault
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
          <form class="p-3" @submit.prevent="createVault">
            <div class="form-group">
              <label for="name">Title</label>
              <input
                v-model="state.newVault.name"
                type="text"
                class="form-control"
                name="name"
                placeholder="Title..."
              >
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                v-model="state.newVault.description"
                class="w-100"
                name="description"
                cols="30"
                rows="10"
                placeholder="Keep Description..."
              ></textarea>
            </div>
            <div class="form-group">
              <div class="form-check">
                <label for="chbx_isPrivate">Private?</label>
                <input
                  v-model="state.newVault.isPrivate"
                  name="chbx_isPrivate"
                  type="checkbox"
                  id="checkbox"
                  class="ml-2 align-self-center"
                >
                <small id="helpId" class="form-text text-muted">Private vaults can only be seen by you</small>
              </div>
            </div>
            <button type="submit" class="float-right btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { vaultsService } from '../services/VaultsService'
import $ from 'jquery'
export default {
  name: 'NewVaultFormModal',
  setup() {
    const state = reactive({
      newVault: {
        name: '',
        description: '',
        isPrivate: false
      }
    })
    return {
      state,
      createVault() {
        vaultsService.Create(state.newVault)
        $('#modal_NewVaultForm').modal('hide')
        state.newVault = {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .new-vault-form-modal {
    position: relative;
  }
  .btn-close-modal {
    position: absolute;
    right: 1.5vw;
    top: 0;
  }
</style>
