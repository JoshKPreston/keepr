<template>
  <div class="home-page container-fluid bg-light">
    <div class="grid">
      <keep-component v-for="k in keeps" :key="k" :keep-prop="k" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { keepsService } from '../services/KeepsService'
import $ from 'jquery'
export default {
  name: 'HomePage',
  setup() {
    onMounted(async() => {
      try {
        $('.modal').modal('hide')
        document.querySelector('.modal-backdrop').remove()
        document.querySelector('.modal-open').classList.remove('show')
      } catch {}
      await keepsService.Get()
    })
    return {
      keeps: computed(() => AppState.keeps)
    }
  }
}
</script>

<style lang="scss" scoped>
  .grid {
    margin-top: 2vh;
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
