export class Weather {
  constructor(data) {
    this.name = data.name
    this.main = data.main
    this.weather = data.weather
    this.displayTemp = true
    this.f = Math.ceil((data.main.temp - 273.15) * (9 / 5) + 32)
    this.c = Math.ceil(data.main.temp - 273.15)
    this.icon = data.weather[0].icon
    this.iconId = data.weather[0].id

  }
  get Template() {
    return `
    <div class="d-flex">
      <img src="https://www.weatherbit.io/static/img/icons/${this.iconPic}.png" alt="Weather icon" class="img-sm mx-2">
      <h3 class="text-center selectable" onclick = "app.weatherController.changeTemp()" >
        <div>${this.displayTemp ? `${this.f}° F` : `${this.c}° C`}
        </div>
        <div>${this.name}</div>
      </h3>
    </div>
    `;
  }

  get iconPic() {
    if (this.iconId >= 800 && this.iconId <= 804) {
      return `c${this.icon}`
    }
    if (this.iconId >= 700 && this.iconId <= 760) {
      return `a${this.icon}`
    }
    if (this.iconId >= 600 && this.iconId <= 660) {
      return `s${this.icon}`
    }
    if (this.iconId >= 500 && this.iconId <= 550 && this.iconId != 511) {
      return `r${this.icon}`
    }
    if (this.iconId >= 300 && this.iconId <= 305) {
      return `d${this.icon}`
    }
    if (this.iconId >= 200 && this.iconId <= 250) {
      return `t${this.icon}`
    }
    if (this.iconId == 511) {
      return `f${this.icon}`
    }
  }

}
