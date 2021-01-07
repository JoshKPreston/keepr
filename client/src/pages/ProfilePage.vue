<template>
  <div class="profile-page container-fluid bg-light">
    <div class="row flex-nowrap p-3">
      <div class="col-2">
        <img class="img-fluid rounded" :src="creator.picture">
      </div>
      <div class="col-6">
        <h1>{{ creator.name }}</h1>
        <h5>Vaults: {{ vaults.length }}</h5>
        <h5>Keeps: {{ keeps.length }}</h5>
      </div>
    </div>
    <div class="row p-3 my-5 align-items-center">
      <h2 class="p-3">
        Vaults
      </h2>
      <span
        data-toggle="modal"
        data-target="#modal_NewVaultForm"
        class="text-primary"
      >
        <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
      </span>
      <!-- <NewVaultFormModal /> -->
    </div>
    <div class="grid">
      <vault-component v-for="v in vaults" :key="v" :vault-prop="v" :vault-keeps-prop="vaultKeeps" />
    </div>
    <div class="row p-3 my-5 align-items-center">
      <h2 class="p-3">
        Keeps
      </h2>
      <span
        data-toggle="modal"
        data-target="#modal_NewKeepForm"
        class="text-primary"
      >
        <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
      </span>
    </div>
    <div class="grid">
      <keep-component v-for="k in keeps" :key="k" :keep-prop="k" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { profilesService } from '../services/ProfilesService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { closeModal } from '../utils/ModalMod'

export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        closeModal()
      } catch {}
      await profilesService.GetCreatorProfileById(route.params.id)
      await profilesService.GetVaultsByProfileId(route.params.id)
      await profilesService.GetKeepsByProfileId(route.params.id)
    })
    return {
      creator: computed(() => AppState.creator),
      vaults: computed(() => AppState.vaults),
      publicVaults: computed(() => AppState.vaults.filter(e => e.isPrivate === false)),
      privateVaults: computed(() => AppState.vaults.filter(e => e.isPrivate === true)),
      keeps: computed(() => AppState.keeps)
    }
  }
}
</script>

<style lang="scss" scoped>
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
