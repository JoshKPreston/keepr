import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class VaultsService {
  async Get() {
    try {
      const res = await api.get('api/vaults')
      AppState.vaults = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async GetOne(id) {
    try {
      const res = await api.get('api/vaults/' + id)
      AppState.activeVault = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async GetKeepsByVaultId(id) {
    try {
      const res = await api.get('api/vaults/' + id + '/keeps')
      AppState.keeps = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async Create(data) {
    try {
      const res = await api.post('api/vaults', data)
      AppState.vaults = [...AppState.vaults, res.data]
    } catch (error) {
      logger.error(error)
    }
  }

  async Edit(id, data) {
    try {
      const res = await api.post('api/vaults/' + id, data)
      // i = AppState.vaults.findIndex(e => e.id == id)
      // AppState.vaults = AppState.vaults.splice(i, 1, res.data)
      AppState.vaults.splice(() => {
        AppState.vaults.findIndex(e => e.id === id)
      }, 1, res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async Delete(id) {
    try {
      await api.delete('api/vaults/' + id)
      if (AppState.vaults.find(e => e.id === id)) {
        AppState.vaults = AppState.vaults.filter(e => e.id !== id)
      }
    } catch (error) {
      logger.error(error)
    }
  }
}

export const vaultsService = new VaultsService()
