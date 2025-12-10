class ToDo {
  constructor(title, description, dueDate, priority) {
    // Read this directly from a form and pass into constructor
    this.title = title;
    this.description = description;
    // Read from date input
    // Add a getter for desired formatting via date-fns
    this.dueDate = dueDate;
    // Hex number for priority colors
    // should have a predetermined set by project
    this.priority = priority;
  }
}
