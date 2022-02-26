import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";

function _drawWeather() {
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}

export class WeatherController {
  constructor() {
    ProxyState.on('weather', _drawWeather)
    this.getWeather()
    setInterval(this.getWeather, 600000)
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error.message);
      Pop.toast(error.message, 'error')
    }
  }
  changeTemp() {
    weatherService.changeTemp()
  }
}
