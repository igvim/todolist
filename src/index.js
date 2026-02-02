import "./styles.css";
import { ProjectManager } from "./projectManager.js";
import { displayProject } from "./displayProject.js";

//localStorage.clear();
ProjectManager.createProject("Project", 0);
displayProject(0);
