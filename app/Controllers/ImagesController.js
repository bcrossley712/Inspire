import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawBackground() {
  let image = ProxyState.image
  document.body.style.backgroundImage = `url(${image})`
}

export class ImagesController {
  constructor() {
    ProxyState.on('image', _drawBackground)
    this.getImage()
  }

  async getImage() {
    try {
      imagesService.getImage()
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.error(error.message);
    }
  }


}
