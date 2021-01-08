<template>
  <div class="vault-page container-fluid bg-light">
    <div class="row p-5">
      <div class="col">
        <div class="row">
          <h1>
            {{ vault.name }}
          </h1>
          <div
            v-if="profile.id == vault.creatorId"
            @click="Delete(vault.id)"
            class="col-1 d-flex justify-content-center align-items-center btn-delete"
          >
            <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
          </div>
        </div>
        <div class="row">
          <h5>Keeps: {{ keeps.length }}</h5>
        </div>
      </div>
    </div>
    <div class="grid">
      <keep-component v-for="k in keeps" :key="k" :keep-prop="k" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { vaultsService } from '../services/VaultsService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { closeModal } from '../utils/ModalMod'
import router from '../router'
// import { profilesService } from '../services/ProfilesService'

export default {
  name: 'VaultPage',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try { closeModal() } catch {}
      // if (!AppState.user.isAuthenticated && !AppState.profile.id) {
      //   await profilesService.getProfile()
      // }
      await vaultsService.GetOne(route.params.id)
      await vaultsService.GetKeepsByVaultId(route.params.id)
    })
    return {
      profile: computed(() => AppState.profile),
      vault: computed(() => AppState.activeVault),
      keeps: computed(() => AppState.vaultKeeps),
      async Delete(vaultId) {
        AppState.vaults = AppState.vaults.filter(e => e.id !== this.vault.id)
        AppState.activeVault = {}
        vaultsService.Delete(vaultId)
        router.push({ name: 'ProfilePage', params: { id: this.profile.id } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn-delete {
    cursor: pointer;
    color: var(--info);
  }
  .btn-delete:hover {
    color: var(--danger);
  }
  .grid {
    margin-top: 2vh;
    line-height: 40px;
    column-count: 1;
  }

  @media (min-width: 576px) {
    .grid {
      column-count: 2;
    }
  }

  @media (min-width: 768px) {
    .grid {
      column-count: 3;
    }
  }

  @media (min-width: 992px) {
    .grid {
      column-count: 4;
    }
  }

  @media (min-width: 1200px) {
    .grid {
      column-count: 5;
    }
  }
</style>
