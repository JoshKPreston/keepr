import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class KeepsService {
  async Get() {
    try {
      const res = await api.get('api/keeps')
      AppState.keeps = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async GetOne(id) {
    try {
      const res = await api.get('api/keeps/' + id)
      AppState.activeKeep = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async Create(data) {
    try {
      const res = await api.post('api/keeps', data)
      AppState.keeps = [...AppState.keeps, res.data]
    } catch (error) {
      logger.error(error)
    }
  }

  async Edit(id, data) {
    try {
      const res = await api.post('api/keeps/' + id, data)
      // i = AppState.keeps.findIndex(e => e.id == id)
      // AppState.keeps = AppState.keeps.splice(i, 1, res.data)
      AppState.keeps.splice(() => {
        AppState.keeps.findIndex(e => e.id === id)
      }, 1, res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async Delete(id) {
    try {
      await api.delete('api/keeps/' + id)
      AppState.keeps = AppState.keeps.filter(e => e.id !== id)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const keepsService = new KeepsService()
