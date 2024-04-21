import projects from "../data/project";

import ProjectSingle from "../component/ProjectSingle";

export default function Project() {
  let project_data = Object.keys(projects).map((project) => {
    return (
      <ProjectSingle name={project} data={projects[project]} key={project} />
    );
  });

  return <div className="Project">{project_data}</div>;
}
