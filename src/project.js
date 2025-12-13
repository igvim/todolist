import ToDo from "./todo.js";

export class Project {
  constructor(name) {
    this.name = name;
  }

  todos = [];

  addToDo = (title, description, dueDate, priority) => {
    const todo = new ToDo(title, description, dueDate, priority);
    this.todos.push(todo);
  };
}
