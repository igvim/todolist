import ToDo from "./todo.js";

export class Project {
  constructor(name) {
    this.name = name;
  }

  todos = [];

  newToDo = (title) => {
    const todo = new ToDo(title);
    this.todos.push(todo);
  };
}
