import "./styles.css";
import { Project } from "./project.js";
import { displayProject } from "./displayProject.js";

const initProject = new Project("Project");
displayProject(initProject);

/*

We'll also need a new project button that, when clicked:
- creates a project form (enter a name)
- creates the new project
- displays the new project

*/
