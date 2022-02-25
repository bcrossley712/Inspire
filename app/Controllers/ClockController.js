import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";


function _drawClock() {
  document.getElementById('clock').innerText = ProxyState.clock
}
export class ClockController {
  constructor() {
    ProxyState.on('clock', _drawClock)
    this.getTime()
    setInterval(this.getTime, 1000)
  }
  getTime() {
    clockService.getTime()
  }


}

