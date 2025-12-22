export default class ToDo {
  constructor(title, description, dueDate, priority) {
    // Read this directly from a form and pass into constructor
    this.title = title;
    this.description = description;
    // Read from date input
    // Add a getter for desired formatting via date-fns
    this.dueDate = dueDate;
    // Priorities = Urgent, Important, Both
    this.priority = priority;
  }

  get isDone() {
    return this._isDone;
  }

  set isDone(val) {
    this._isDone = val;
  }
}
