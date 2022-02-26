import { ProxyState } from "../AppState.js"
import { Clock } from "../Models/Clock.js"
import { saveClockPreference } from "../Utils/LocalStorage.js"

class ClockService {
  // If no existing local clock format, sets new Clock format
  getTime() {
    const time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let dayTime = ''
    if (hours < 12) {
      dayTime = 'Morning'
    } if (hours > 12 && hours < 5) {
      dayTime = 'Afternoon'
    } else {
      dayTime = 'Evening'
    }
    ProxyState.clock = new Clock({
      currentTime: true,
      twelveHour: `${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' + minutes : minutes} ${hours >= 12 ? 'PM' : 'AM'}`,
      military: `${hours < 12 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`,
      dayTime: `${dayTime}`
    })
  }
  // Runs every second to actively update time and day time.
  updateTime() {
    const time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let dayTime = ''
    if (hours < 12) {
      dayTime = 'Morning'
    } if (hours > 12 && hours < 17) {
      dayTime = 'Afternoon'
    } else {
      dayTime = 'Evening'
    }
    ProxyState.clock = new Clock({
      currentTime: ProxyState.clock.currentTime,
      twelveHour: `${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' + minutes : minutes} ${hours >= 12 ? 'PM' : 'AM'}`,
      military: `${hours < 12 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`,
      dayTime: `${dayTime}`
    })
  }
  // Flips bool value to military or 12hr format and saves local preference.
  changeTime() {
    let time = ProxyState.clock
    time.currentTime = !time.currentTime
    ProxyState.clock = ProxyState.clock
    saveClockPreference()
  }
}


export const clockService = new ClockService()