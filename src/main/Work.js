import work from '../data/work'

import ProjectSingle from '../component/ProjectSingle'

export default function Work(){
    let project_data = Object.keys(work).map((project) => {
        return <ProjectSingle name={project} data={work[project]} key={project}/>
    })

    return <div className="Project">
        {project_data}
    </div>
}