<template>
  <div class="new-keep-form-component">
    <div class="row justify-content-center align-items-center py-5">
      <div class="col-4">
        <form @submit.prevent="createKeep">
          <div class="form-group">
            <label for="title">Title</label>
            <input
              v-model="state.newKeep.name"
              type="text"
              class="form-control"
              name="title"
              placeholder="Title..."
            >
          </div>
          <div class="form-group">
            <label for="description">Image Url</label>
            <input
              v-model="state.newKeep.img"
              type="text"
              class="form-control"
              name="ImgUrl"
              placeholder="URL..."
            >
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                name="description"
                cols="30"
                rows="10"
                placeholder="Keep Description..."
              ></textarea>
            </div>
            <!-- <div class="form-group">
              <input
                v-model="state.newKeep.tags"
                type="text"
                class="form-control"
                name="description"
                placeholder="Description..."
              >
            </div> -->
          </div>
          <button @click="createKeep" class="btn btn-secondary">
            New Keep
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { keepsService } from '../services/KeepsService'
export default {
  name: 'NewKeepFormComponent',
  setup() {
    const state = reactive({
      newKeep: {
        name: '',
        description: '',
        img: ''
      }
    })
    return {
      state,
      createKeep() {
        keepsService.Create(state.newKeep)
        state.newKeep = {}
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
