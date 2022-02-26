
export class Clock {
  constructor(data) {
    this.currentTime = data.currentTime
    this.twelveHour = data.twelveHour
    this.military = data.military
    this.dayTime = data.dayTime
  }


  get Template() {
    return `
    ${this.currentTime ? this.twelveHour : this.military}
    `;
  }

}
