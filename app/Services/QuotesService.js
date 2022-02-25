import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js"

class QuotesService {

  async getQuote() {
    const res = await api.get('quotes')
    console.log(res.data);
    ProxyState.quote = res.data
  }

}


export const quotesService = new QuotesService()
