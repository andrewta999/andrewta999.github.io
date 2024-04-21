import education from "../data/education";

import EducationSingle from "../component/EducationSingle";

export default function Education() {
  let project_data = Object.keys(education).map((project) => {
    return (
      <EducationSingle name={project} data={education[project]} key={project} />
    );
  });

  return <div className="Project">{project_data}</div>;
}
