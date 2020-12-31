import skills from '../data/skills'
import about from '../data/about'

import LeadershipSingle from '../component/LeadershipSingle'

export default function About() {
    const skill = skills.map(({ name, skill }) => {
        let list_skill = skill.map(({ name, icon }) => {
            return (
                <div key={name} className="About-tech">
                    <span className="About-icon">{icon}</span>
                    <span className="About-name">{name}</span>
                </div>
            );
        });
        return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 About-col" key={name} >
                <div className="About-section">
                    <span class="badge badge-primary">{name}</span>
                </div>
                {list_skill}
            </div>
        )
    })
    return <div className="About">
        <div className="container">
            <div>
                <LeadershipSingle name={about["name"]} data={about} />
            </div>
            <div className="About row">
                {skill}
            </div>
        </div>
    </div>
}