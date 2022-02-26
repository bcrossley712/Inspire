import { ProxyState } from "../AppState.js";
import { Clock } from "../Models/Clock.js";

export function saveUser() {
  console.log('[saveUser]');
  localStorage.setItem('UserName', JSON.stringify(ProxyState.user))
}
export function loadUser() {
  let name = JSON.parse(localStorage.getItem('UserName'))
  console.log('[loadUser]', name);
  if (name != null) {
    ProxyState.user = name
  }
}

export function saveClockPreference() {
  localStorage.setItem('ClockPreference', JSON.stringify(ProxyState.clock))
}

export function loadClockPreference() {
  let data = JSON.parse(localStorage.getItem('ClockPreference'))
  console.log(data);
  if (data != null) {
    ProxyState.clock = new Clock(data)
    console.log(ProxyState.clock);
  }
}