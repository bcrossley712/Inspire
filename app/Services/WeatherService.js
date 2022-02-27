import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { api } from "./AxiosService.js"


class WeatherService {
  async getWeather() {
    const res = await api.get('weather')
    console.log(res.data);
    ProxyState.weather = new Weather(res.data)
  }

  changeTemp() {
    let temp = ProxyState.weather
    temp.displayTemp = !temp.displayTemp
    ProxyState.weather = ProxyState.weather
  }
}


export const weatherService = new WeatherService()
