import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTodos() {
  let template = ''
  ProxyState.todos.forEach(t => template += t.Template)
  document.getElementById('todos').innerHTML = template
  let num = ProxyState.todos.filter(t => t.completed == true)
  document.getElementById('count').innerText = `${num.length}/${ProxyState.todos.length}`
}
async function _getTodos() {
  try {
    todosService.getTodos()
  } catch (error) {
    Pop.toast(error.message, 'error')
    console.error(error.message);
  }
}
export class TodosController {
  constructor() {
    ProxyState.on('todos', _drawTodos)
    _getTodos()
  }

  async addTodo(event) {
    window.event.preventDefault()
    try {
      let form = event.target
      let newTodo = {
        description: form.description.value,
      }
      await todosService.addTodo(newTodo)
      form.reset()
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.error(error.message);
    }
  }

  async deleteTodo(id) {
    try {
      if (await Pop.confirm()) {
        await todosService.deleteTodo(id)
      }
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.error(error.message);
    }
  }

  async checkBox(id) {
    try {
      await todosService.checkBox(id)
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.error(error.message);
    }
  }
}

