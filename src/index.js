import "./styles.css";
import { Project } from "./project.js";
import { displayProject } from "./displayProject.js";

//localStorage.clear();
const initProject = new Project("Project");
displayProject(initProject);
