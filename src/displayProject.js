export const displayProject = (proj) => {
  const projectSpace = document.createElement("div");
  const toDoSpace = document.createElement("div");
  const projectName = document.createElement("h2");
  projectName.textContent = proj.name;
  const newBtn = document.createElement("button");
  newBtn.id = "new";
  newBtn.textContent = "New ToDo";

  //Create project on page
  document.body.appendChild(projectSpace);
  projectSpace.appendChild(projectName);
  projectSpace.appendChild(toDoSpace);
  projectSpace.appendChild(newBtn);

  const displayToDos = () => {
    toDoSpace.innerHTML = "";
    let todos = proj.fetchToDos();
    todos.forEach((todo) => {
      //Create todo elements
      const todoCard = document.createElement("div");
      todoCard.className = "todo-card";

      const tdIsDone = document.createElement("input");
      tdIsDone.type = "checkbox";
      tdIsDone.className = "status";
      tdIsDone.addEventListener("change", function () {
        todo.isDone = this.checked;
      });
      tdIsDone.checked = todo.isDone;

      const tdTextSpace = document.createElement("div");
      tdTextSpace.className = "todo-text";

      const tdTitle = document.createElement("h4");
      tdTitle.className = "title";
      tdTitle.textContent = todo.title;

      const tdDesc = document.createElement("p");
      tdDesc.className = "description";
      tdDesc.textContent = todo.description;

      //Reset todo DOM
      toDoSpace.appendChild(todoCard);
      todoCard.appendChild(tdIsDone);
      todoCard.appendChild(tdTextSpace);
      tdTextSpace.appendChild(tdTitle);
      tdTextSpace.appendChild(tdDesc);
    });
  };

  const createToDoForm = () => {
    const form = document.createElement("form");

    const toDoTitleInput = document.createElement("input");
    toDoTitleInput.type = "text";
    toDoTitleInput.id = "title";
    toDoTitleInput.name = "title";

    const toDoDescInput = document.createElement("textarea");
    toDoDescInput.id = "description";
    toDoDescInput.name = "description";

    const addToDoBtn = document.createElement("button");
    addToDoBtn.type = "submit";
    addToDoBtn.textContent = "Add ToDo";

    projectSpace.appendChild(form);
    form.appendChild(toDoTitleInput);
    form.appendChild(toDoDescInput);
    form.appendChild(addToDoBtn);

    //Write form values as todo properties
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      //Maybe needs refactor per SOLID? YES because I'm fucked up now adding localStorage
      proj.addToDo(toDoTitleInput.value, toDoDescInput.value);
      displayToDos();
      e.target.hidden = true;
    });
  };

  //Create new todo as form
  newBtn.addEventListener("click", () => {
    createToDoForm();
  });

  return { displayToDos };
};
