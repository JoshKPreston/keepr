<template>
  <div class="profile-page container-fluid bg-light">
    <div class="row flex-nowrap p-3">
      <div class="col-2">
        <img class="img-fluid rounded" :src="creator.picture">
      </div>
      <div class="col-6">
        <h1>{{ creator.name }}</h1>
        <h5>Vaults: {{ publicVaults.length }}</h5>
        <h5>Keeps: {{ keeps.length }}</h5>
      </div>
    </div>
    <div class="row p-3 mt-5 align-items-center">
      <h2 class="p-3">
        Vaults
      </h2>
      <span
        v-if="profile.id === route.params.id"
        data-toggle="modal"
        data-target="#modal_NewVaultForm"
        class="text-primary btn-modal"
      >
        <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
      </span>
      <new-vault-form-modal />
    </div>
    <!-- <div class="row p-3 justify-content-start">
      <vault-component v-for="v in vaults" :key="v" :vault-prop="v"  />
    </div> -->
    <div class="row ml-4 py-3">
      <h5>
        Public Vaults
      </h5>
    </div>
    <div class="row ml-1 p-3 justify-content-start">
      <vault-component v-for="v in publicVaults" :key="v" :vault-prop="v" />
    </div>
    <div
      v-if="profile.id === route.params.id"
      class="row ml-4 py-3"
    >
      <h5>
        Private Vaults
      </h5>
    </div>
    <div v-if="profile.id === route.params.id" class="row ml-1 p-3 justify-content-start">
      <vault-component v-for="v in privateVaults" :key="v" :vault-prop="v" />
    </div>
    <div class="row p-3 my-5 align-items-center">
      <h2 class="p-3">
        Keeps
      </h2>
      <span
        v-if="profile.id === route.params.id"
        data-toggle="modal"
        data-target="#modal_NewKeepForm"
        class="text-primary btn-modal"
      >
        <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
      </span>
      <new-keep-form-modal />
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

export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      await profilesService.GetCreatorProfileById(route.params.id)
      await profilesService.GetVaultsByProfileId(route.params.id)
      await profilesService.GetKeepsByProfileId(route.params.id)
      // if (!AppState.user.isAuthenticated && !AppState.profile.id) {
      //   await profilesService.getProfile()
      // }
    })
    return {
      route,
      creator: computed(() => AppState.creator),
      vaults: computed(() => AppState.vaults),
      publicVaults: computed(() => AppState.vaults.filter(e => e.isPrivate === false)),
      privateVaults: computed(() => AppState.vaults.filter(e => e.isPrivate === true)),
      keeps: computed(() => AppState.keeps),
      profile: computed(() => AppState.profile)
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

  .btn-modal {
    cursor: pointer;
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
