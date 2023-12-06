import api from "../plugins/api"

class CamisetasService {
  async getAllCamisetas() {
    const response = await api.get('/camisetas/')
    return response.data
  }
}

export default new CamisetasService()