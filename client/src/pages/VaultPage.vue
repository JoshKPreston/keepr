<template>
  <div class="creator-page container-fluid bg-light">
    <div class="row">
      <div class="col-4">
        {{ creator.picture }}
      </div>
      <div class="col-8">
        <h1>{{ creator.name }}</h1>
        <h5>Vaults: {{ vaults.length }}</h5>
        <h5>Keeps: {{ keeps.length }}</h5>
      </div>
    </div>
    <div class="row justify-content-start align-items-center">
      <h2>Vaults</h2>
      <span data-toggle="modal" data-target="'modal_vaultForm" class="text-primary">
        <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
      </span>
    </div>
    <div class="row justify-content-around">
      <vault-component class="col-3 img-thumbnail" v-for="v in vaults" :key="v" :vault-prop="v" />
    </div>
    <div class="row justify-content-start align-items-center">
      <h2>Keeps</h2>
      <span data-toggle="modal" data-target="'modal_keepForm" class="text-primary">
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
import { vaultsService } from '../services/VaultsService'
import { keepsService } from '../services/KeepsService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'

export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      await profilesService.getCreator(route.params.id)
      await vaultsService.Get()
      await keepsService.Get()
    })
    return {
      creator: computed(() => AppState.creator),
      // keeps: computed(() => AppState.keeps.filter(e => e.creatorId === this.creator.id)),
      // vaults: computed(() => AppState.vaults.filter(e => e.creatorId === this.creator.id))
      keeps: computed(() => AppState.keeps),
      vaults: computed(() => AppState.vaults)
    }
  },
  components: {}
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
