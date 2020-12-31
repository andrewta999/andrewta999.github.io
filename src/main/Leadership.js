import leadership from '../data/leadership'

import LeadershipSingle from '../component/LeadershipSingle'

export default function Leadership(){
    let project_data = Object.keys(leadership).map((project) => {
        return <LeadershipSingle name={project} data={leadership[project]} key={project}/>
    })

    return <div className="Project">
        {project_data}
    </div>
}