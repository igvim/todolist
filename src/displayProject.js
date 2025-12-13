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
    proj.todos.forEach((todo) => {
      const todoCard = document.createElement("div");
      todoCard.className = "todo-card";

      const tdTitle = document.createElement("h4");
      tdTitle.className = "title";
      tdTitle.textContent = todo.title;

      const tdDesc = document.createElement("p");
      tdDesc.className = "description";
      tdDesc.textContent = todo.description;

      toDoSpace.appendChild(todoCard);
      toDoSpace.appendChild(tdTitle);
      toDoSpace.appendChild(tdDesc);
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
      //Maybe needs refactor per SOLID?
      proj.addToDo(toDoTitleInput.value, toDoDescInput.value);
      console.log(proj.todos[0]);
      displayToDos();
      e.target.hidden = true;
    });
  };

  //Create new todo as form
  newBtn.addEventListener("click", () => {
    createToDoForm();
  });
};
