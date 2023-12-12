import api from "../plugins/api"

class MarcasService {
    async getAllMarcas() {
      const response = await api.get('/marcas/')
      return response.data
    }

  }
  
  export default new MarcasService()