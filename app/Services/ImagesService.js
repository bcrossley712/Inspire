import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js"

class ImagesService {
  async getImage() {
    const res = await api.get('images')
    // console.log(res.data);
    ProxyState.image = res.data.url
  }

}


export const imagesService = new ImagesService()
