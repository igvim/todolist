import ToDo from "./todo.js";

export class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  get stringId() {
    return `${this.id}`;
  }

  todos = [];

  fetchToDos = () => {
    const storeCheck = JSON.parse(localStorage.getItem(this.stringId));
    if (storeCheck) {
      this.todos = storeCheck;
    }
    return this.todos;
  };

  addToDo = (title, description, dueDate, priority) => {
    const todo = new ToDo(title, description, dueDate, priority);
    this.todos.push(todo);
    localStorage.setItem(this.stringId, JSON.stringify(this.todos));
  };
}
