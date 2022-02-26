
export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.description = data.description

  }

  get Template() {
    return `
      <div class="d-flex justify-content-between align-items-center p-2">
        <div class="form-check form-check-inline">
          <input type="checkbox" class="form-check-input" name="completed" id="completed" value="checkedValue" ${this.completed ? 'checked' : ''} onclick="app.todosController.checkBox('${this.id}')">
          <label class="form-check-label ${this.completed ? 'strike' : ''}" for="${this.id}" name="description">
            ${this.description}
          </label>
        </div>
        <i class="mdi mdi-delete-forever text-danger selectable ${this.completed ? '' : 'hidden'}" title="Delete task" onclick="app.todosController.deleteTodo('${this.id}')"></i>
      </div>
    `;
  }


}
