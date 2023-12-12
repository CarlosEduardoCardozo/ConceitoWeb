import api from "../plugins/api"

class CamisetasService {
  async getAllCamisetas() {
    const response = await api.get('/camisetas/')
    return response.data
  }
  async saveCamisa(camiseta) {
    console.log(camiseta)
    const response = await api.post('/camisetas/', camiseta)
    return response.data
}
}

export default new CamisetasService()