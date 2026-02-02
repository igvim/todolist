import { ProjectManager } from "./projectManager";

export const displayProject = (projId) => {
  const project = ProjectManager.fetchProject(projId);

  const writeChange = () => {
    localStorage.setItem(project.stringId, JSON.stringify(project.todos));
  };

  const displayToDos = () => {
    //Populate the todo space with todos
    const tdSpace = document.getElementById("todo-space");
    tdSpace.innerHTML = "";

    const todos = project.fetchToDos();

    todos.forEach((todo) => {
      //Create todo elements
      const todoCard = document.createElement("div");
      todoCard.className = "todo-card";
      tdSpace.appendChild(todoCard);

      const tdCheckbox = document.createElement("input");
      tdCheckbox.type = "checkbox";
      tdCheckbox.className = "status";
      tdCheckbox.addEventListener("change", (e) => {
        todo.isDone = tdCheckbox.checked;
        writeChange();
      });
      tdCheckbox.checked = todo.isDone;
      todoCard.appendChild(tdCheckbox);

      const tdTextSpace = document.createElement("div");
      tdTextSpace.className = "todo-text";
      todoCard.appendChild(tdTextSpace);

      const tdTitle = document.createElement("h4");
      tdTitle.className = "title";
      tdTitle.textContent = todo.title;
      tdTextSpace.appendChild(tdTitle);

      const tdDesc = document.createElement("p");
      tdDesc.className = "description";
      tdDesc.textContent = todo.description;
      tdTextSpace.appendChild(tdDesc);
    });
  };

  const createToDoForm = () => {
    const form = document.createElement("form");
    projectSpace.appendChild(form);

    const toDoTitleInput = document.createElement("input");
    toDoTitleInput.type = "text";
    toDoTitleInput.id = "title";
    toDoTitleInput.name = "title";
    form.appendChild(toDoTitleInput);

    const toDoDescInput = document.createElement("textarea");
    toDoDescInput.id = "description";
    toDoDescInput.name = "description";
    form.appendChild(toDoDescInput);

    const addToDoBtn = document.createElement("button");
    addToDoBtn.type = "submit";
    addToDoBtn.textContent = "Add ToDo";

    //Write form values as todo properties
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      project.addToDo(toDoTitleInput.value, toDoDescInput.value);
      displayToDos();
      e.target.hidden = true;
    });
    form.appendChild(addToDoBtn);
  };

  const projectSpace = document.createElement("div");
  document.body.appendChild(projectSpace);

  const projectName = document.createElement("h2");
  projectName.textContent = project.name;
  projectSpace.appendChild(projectName);

  const toDoSpace = document.createElement("div");
  toDoSpace.id = "todo-space";
  projectSpace.appendChild(toDoSpace);
  displayToDos();

  const newBtn = document.createElement("button");
  newBtn.id = "new";
  newBtn.textContent = "New ToDo";
  newBtn.addEventListener("click", (e) => {
    createToDoForm();
  });
  projectSpace.appendChild(newBtn);
};
