import { ProxyState } from "../AppState.js";
import { userService } from "../Services/UserService.js";
import { loadUser, saveUser } from "../Utils/LocalStorage.js";


function _drawUser() {
  if (ProxyState.user != null) {
    document.getElementById('user').innerHTML = ProxyState.user
  } else {
    document.getElementById('user').innerHTML = `
      <form onsubmit="app.userController.newUser()"><input type="text" class="form-control" name="name"
        id="name" aria-describedby="helpId" placeholder="Name..."></form>`
  }
}


export class UserController {
  constructor() {
    ProxyState.on('user', _drawUser)
    loadUser()
    _drawUser
  }

  newUser() {
    window.event.preventDefault()
    let form = window.event.target
    // @ts-ignore
    let name = form.name.value
    userService.newUser(name)
    saveUser()
    // @ts-ignore
    form.reset()
  }

  changeName() {
    userService.changeName()
  }

}
