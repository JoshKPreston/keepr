import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfilesService {
  async getProfile() {
    try {
      const res = await api.get('api/profiles')
      AppState.profile = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async GetProfileById(id) {
    try {
      const res = await api.get('api/profiles/' + id)
      logger.log(res.data)
      AppState.creator = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async GetVaultsByProfileId(id) {
    try {
      const res = await api.get('api/profiles/' + id + '/vaults')
      AppState.vaults = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async GetKeepsByProfileId(userId) {
    try {
      const res = await api.get('api/profiles/' + userId + '/keeps')
      AppState.keeps = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const profilesService = new ProfilesService()
