<template>
  <div class="keep-modal">
    <div
      :id="'modal_keep_' + keep.id"
      class="modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="keepModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content container p-0 bg-light">
          <div class="row p-2">
            <div class="col-5 align-self-center">
              <img class="img-fluid rounded d-block m-auto" :src="keep.img" :alt="keep.name">
            </div>
            <div class="col-7 p-3 d-flex flex-column justify-content-between">
              <div class="row justify-content-center align-items-center">
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-eye text-primary pr-2" aria-hidden="true"></i>
                  <span>{{ keep.views }}</span>
                </div>
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <img class="pr-2" height="18" src="../assets/img/icon.png" alt="">
                  <span>{{ keep.keeps }}</span>
                </div>
                <div class="col-2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-share-alt text-primary pr-2"></i>
                  <span>{{ keep.shares }}</span>
                </div>
                <button
                  data-dismiss="modal"
                  :data-target="'modal_keep_' + keep.id"
                  class="btn btn-sm btn-outline-danger btn-close-modal"
                >
                  &times;
                </button>
              </div>
              <div class="row justify-content-center">
                <h1>
                  {{ keep.name }}
                </h1>
              </div>
              <div class="row justify-content-center p-2">
                <!-- <p>{{ keep.description }}</p> -->
                <div class="keep-desc p-2">
                  <p>
                    <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam ab, quia voluptatum labore alias itaque unde velit ad cupiditate consectetur voluptatem harum quis maiores numquam id fugiat facilis repellat. -->
                  </p>
                </div>
              </div>
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-5 m-auto">
                  <div
                    v-if="user.isAuthenticated"
                    class="dropdown open"
                  >
                    <button
                      @click="GetVaultsByProfileId(profile.id)"
                      class="btn btn-sm btn-primary dropdown-toggle text-uppercase"
                      type="button"
                      id="modal_addToVault"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Add to Vault
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="modal_addToVault"
                    >
                      <a
                        v-for="v in vaults"
                        :key="v"
                        class="dropdown-item"
                        @click="addToVault(keep.id, v.id)"
                      >{{ v.name }}</a>
                    </div>
                  </div>
                </div>
                <div class="col-4 d-flex m-auto">
                  <div
                    v-if="keep.creatorId == profile.id"
                    @click="Delete"
                    class="col-1 d-flex justify-content-center align-items-center btn-delete m-auto"
                  >
                    <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                  </div>
                  <img
                    :src="keep.creator.picture"
                    height="40"
                    @click="pushPage('ProfilePage', keep.creatorId)"
                    class="btn-creator text-light rounded m-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { keepsService } from '../services/KeepsService'
import { vaultKeepsService } from '../services/VaultKeepsService'
import router from '../router'
import { useRoute } from 'vue-router'
// import { profilesService } from '../services/ProfilesService'
import { closeModal } from '../utils/ModalMod'
import { profilesService } from '../services/ProfilesService'
export default {
  name: 'KeepModal',
  props: {
    keepProp: {
      type: Object,
      default: () => {
        alert('Keep property does not exist (keep-modal)')
      }
    }
  },
  setup(props) {
    onMounted(async() => {
      // await profilesService.GetVaultsByProfileId(this.profile.id)
    })
    const route = useRoute()
    const state = reactive({
      newVaultKeep: {
        keepId: null,
        vaultId: null
      }
    })
    return {
      route,
      state,
      keep: computed(() => props.keepProp),
      user: computed(() => AppState.user),
      profile: computed(() => AppState.profile),
      vaults: computed(() => AppState.vaults),
      async Delete() {
        AppState.keeps = AppState.keeps.filter(e => e.id !== this.keep.id)
        await keepsService.Delete(this.keep.id)
        try { closeModal() } catch {}
      },
      pushPage(pageName, id) {
        router.push({ name: pageName, params: { id: id } })
        try { closeModal() } catch {}
      },
      async addToVault(keepId, vaultId) {
        state.newVaultKeep.keepId = keepId
        state.newVaultKeep.vaultId = vaultId
        vaultKeepsService.Create(state.newVaultKeep)
        try { closeModal() } catch {}
        this.pushPage('VaultPage', state.newVaultKeep.vaultId)
      },
      GetVaultsByProfileId(id) {
        if (AppState.vaults.length < 1) {
          profilesService.GetVaultsByProfileId(id)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .keep-desc {
    line-height: 3vh;
  }
  .fa-trash-o {
    color: var(--secondary);
  }
  .fa-trash-o:hover {
    color: var(--danger);
  }
  .btn-close-modal {
    position: absolute;
    right: 1.5vw;
    top: 0;
  }
</style>
