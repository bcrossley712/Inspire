import { ProxyState } from "../AppState.js"

class ClockService {
  getTime() {
    const d = new Date()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    ProxyState.clock = `${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' + minutes : minutes} ${hours > 12 ? 'PM' : 'AM'}`
  }
}


export const clockService = new ClockService()