import { Project } from "./project.js";

export const ProjectManager = (() => {
  const projects = [];
  const createProject = (name, id) => {
    const proj = new Project(name, id);
    projects.push(proj);
  };

  const fetchProject = (id) => {
    return projects[id];
  };

  return { createProject, fetchProject };
})();
