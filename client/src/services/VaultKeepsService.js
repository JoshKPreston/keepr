import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class VaultKeepsService {
  async Get() {
    try {
      const res = await api.get('api/vaultkeeps')
      AppState.vaultKeeps = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async Create(newVaultKeep) {
    try {
      const res = await api.post('api/vaultkeeps', newVaultKeep)
      AppState.vaultKeeps = [...AppState.vaultKeeps, res.data]
    } catch (error) {
      logger.error(error)
    }
  }

  // async Edit(id, data) {
  //   try {
  //     const res = await api.post('api/vaultkeeps/' + id, data)
  //     AppState.vaultKeeps.splice(() => {
  //       AppState.vaultKeeps.findIndex(e => e.id === id)
  //     }, 1, res.data)
  //   } catch (error) {
  //     logger.error(error)
  //   }
  // }

  async Delete(id) {
    try {
      await api.delete('api/vaultkeeps/' + id)
      if (AppState.vaultKeeps.find(e => e.id === id)) {
        AppState.vaultKeeps = AppState.vaultKeeps.filter(e => e.id !== id)
      }
    } catch (error) {
      logger.error(error)
    }
  }
}

export const vaultKeepsService = new VaultKeepsService()
