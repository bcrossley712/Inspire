export class Todo {
  constructor() {
  }

  get Template() {
    return `
      <div class="d-flex justify-content-between align-items-center p-2">
        <div class="form-check form-check-inline">
          <input type="checkbox" class="form-check-input" name="" id="${this.id}" value="checkedValue" ${this.complete ? 'checked' : ''} onclick="app.tasksController.checkBox('${this.id}')">
          <label class="form-check-label ${this.complete ? 'strike' : ''}" for="${this.id}">
            ${this.name}
          </label>
        </div>
        <i class="mdi mdi-delete-forever text-danger selectable ${this.complete ? '' : 'hidden'}" title="Delete task" onclick="app.tasksController.deleteTask('${this.id}')"></i>
      </div>
    `;
  }
}
