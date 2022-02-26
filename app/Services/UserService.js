import { ProxyState } from "../AppState.js";


class UserService {
  newUser(name) {
    console.log('[newUser]', name);
    ProxyState.user = name
    document.getElementById('name').classList.add('hidden')
  }
  changeName() {
    if (document.getElementById('name').classList.contains('hidden')) {
      document.getElementById('name').classList.remove('hidden')
    } else {
      document.getElementById('name').classList.add('hidden')
    }

  }

}

export const userService = new UserService()