import ToDo from "./todo.js";

export class Project {
  constructor(name) {
    this.name = name;
  }

  project = [];

  newToDo = (title) => {
    const todo = new ToDo(title);
    this.project.push(todo);
  };
}
