import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuote() {
  document.getElementById('quote').innerHTML = `
  ${ProxyState.quote.content} <span class="hide">-${ProxyState.quote.author}</span>`
}

export class QuotesController {
  constructor() {
    ProxyState.on('quote', _drawQuote)
    this.getQuote()
  }

  async getQuote() {
    try {
      quotesService.getQuote()
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.error(error.message);
    }
  }

}
