import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { api } from "./AxiosService.js";


class TodosService {
  async getTodos() {
    const res = await api.get('brian/todos')
    console.log(res.data);
    ProxyState.todos = res.data.map(rd => new Todo(rd))
  }
  async addTodo(rawData) {
    let newTodo = new Todo(rawData)
    const res = await api.post('brian/todos', newTodo)
    console.log(res.data);
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }
  async deleteTodo(id) {
    const res = await api.delete('brian/todos/' + id)
    console.log(res.data);
    ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
  }
  async checkBox(id) {
    let changedTodo = ProxyState.todos.find(t => id == t.id)
    changedTodo.completed = !changedTodo.completed
    const res = await api.put('brian/todos/' + id, changedTodo)
    console.log(res.data);
    ProxyState.todos = ProxyState.todos
  }
}

export const todosService = new TodosService()
