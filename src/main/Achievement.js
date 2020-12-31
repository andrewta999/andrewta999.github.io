import achievements from '../data/achievement.js'

import LeadershipSingle from '../component/LeadershipSingle'

export default function Achievement(){
    let project_data = Object.keys(achievements).map((project) => {
        return <LeadershipSingle name={project} data={achievements[project]} key={project}/>
    })

    return <div className="Project">
        {project_data}
    </div>
}