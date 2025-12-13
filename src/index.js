import { Project } from "./project.js";

const displayProject = (proj) => {
  const doc = document.querySelector("body");
  const projectSpace = document.createElement("div");
  const projectName = document.createElement("h2");
  projectName.textContent = proj.name;
  const newBtn = document.createElement("button");
  newBtn.id = "new";
  newBtn.textContent = "New ToDo";

  //Create project on page
  doc.appendChild(projectSpace);
  projectSpace.appendChild(projectName);
  projectSpace.appendChild(newBtn);

  const displayToDos = () => {
    proj.todos.forEach((todo) => {
      const todoCard = document.createElement("div");
      todoCard.className = "todo-card";
      const tdTitle = document.createElement("h4");
      tdTitle.className = "title";
      tdTitle.textContent = todo.title;
      projectName.appendChild(todoCard);
      projectName.appendChild(tdTitle);
    });
  };

  //Create new todo as form
  newBtn.addEventListener("click", () => {
    const enterToDo = document.createElement("form");
    const enterToDoTitle = document.createElement("input");
    enterToDoTitle.type = "text";
    enterToDoTitle.id = "title";
    enterToDoTitle.name = "title";
    projectSpace.appendChild(enterToDo);
    enterToDo.appendChild(enterToDoTitle);

    //Write form values as todo properties
    enterToDo.addEventListener("submit", (e) => {
      e.preventDefault();
      proj.newToDo(enterToDoTitle.value);
      displayToDos();
      e.target.hidden = true;
    });
  });
};

const initProject = new Project("Project");
displayProject(initProject);
