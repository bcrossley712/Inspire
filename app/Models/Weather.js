export class Weather {
  constructor(data) {
    this.name = data.name
    this.main = data.main
    this.weather = data.weather
    this.displayTemp = true
    this.f = Math.ceil((data.main.temp - 273.15) * (9 / 5) + 32)
    this.c = Math.ceil(data.main.temp - 273.15)

  }
  get Template() {
    return `
      <h3 class="text-center selectable" onclick = "app.weatherController.changeTemp()" >
        <div>${this.displayTemp ? `${this.f}° F` : `${this.c}° C`}
        </div>
        <div>${this.name}</div>
      </h3>
    `;
  }


}
