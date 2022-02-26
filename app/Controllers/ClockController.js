import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";
import { loadClockPreference } from "../Utils/LocalStorage.js";


function _drawClock() {
  document.getElementById('clock').innerHTML = ProxyState.clock.Template
  document.getElementById('day-time').innerText = ProxyState.clock.dayTime
}

export class ClockController {
  constructor() {
    loadClockPreference()
    ProxyState.on('clock', _drawClock)
    if (ProxyState.clock == null) {
      this.getTime()
    }
    setInterval(this.updateTime, 1000)
  }
  getTime() {
    clockService.getTime()
  }
  updateTime() {
    clockService.updateTime()
  }

  changeTime() {
    clockService.changeTime()
  }
}

