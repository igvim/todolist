import { Project } from "./project.js";

//Initialize project
const initProject = new Project("Project");

//Create project in DOM
const doc = document.querySelector("body");
const project = document.createElement("div");
const projectName = document.createElement("h2");
projectName.textContent = initProject.name;
const newBtn = document.createElement("button");
newBtn.id = "new";
newBtn.textContent = "New ToDo";

doc.appendChild(project);
project.appendChild(projectName);
project.appendChild(newBtn);

//Create new todo as form
newBtn.addEventListener("click", () => {
  const enterToDo = document.createElement("form");
  const enterToDoTitle = document.createElement("input");
  enterToDoTitle.type = "text";
  enterToDoTitle.id = "title";
  enterToDoTitle.name = "title";
  project.appendChild(enterToDo);
  enterToDo.appendChild(enterToDoTitle);

  //Write form values as todo properties
  enterToDo.addEventListener("submit", (e) => {
    e.preventDefault();
    initProject.newToDo(enterToDoTitle.value);
    console.log(initProject.project);
    e.target.hidden = true;
  });
});
