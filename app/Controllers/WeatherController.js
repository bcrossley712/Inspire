import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";

function _drawWeather() {
  document.getElementById('weather').innerHTML = `
            <h3 class="text-center selectable" onclick="app.weatherController.changeTemp()">
              <div>${Math.ceil((ProxyState.weather.main.temp - 273.15) * (9 / 5) + 32)}°
              </div>
              <div>${ProxyState.weather.name}</div>
            </h3>
  `
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
