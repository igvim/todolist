import ToDo from "./todo.js";

export class Project {
  constructor(name) {
    this.name = name;
  }

  todos = [];

  fetchToDos = () => {
    const storeCheck = JSON.parse(localStorage.getItem(this.name));
    if (storeCheck) {
      this.todos = storeCheck;
    }
    return this.todos;
  };

  addToDo = (title, description, dueDate, priority) => {
    const todo = new ToDo(title, description, dueDate, priority);
    this.todos.push(todo);
    localStorage.setItem(this.name, JSON.stringify(this.todos));
  };
}
