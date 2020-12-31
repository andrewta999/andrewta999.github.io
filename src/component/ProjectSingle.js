export default function ProjectSingle(props) {
    let { data, name } = props
    let { date, text, image, tech, company, github} = data

    let tech_list = tech.map((name) => {
        return <span className="badge text-light ProjectSingle-badge" key={name}>{name}</span>
    })

    return <div className="container">
        <div className="ProjectSingle row">

            <div className="col-12 col-md-7 col-ls-7 col-xl-7">
                <div className="ProjectSingle-name">
                    <a href={github} target="_blank" rel="noreferrer">{name}</a>
                    <span className="ProjectSingle-subname">
                        {` ${company} - ${date}`}
                    </span>
                </div>
                <div className="ProjectSingle-text">
                    {text}
                </div>
                <div className="ProjectSingle-tech">
                    {tech_list}
                </div>
            </div>
            <div className="col-12 col-md-5 col-ls-5 col-xl-5 Project-img-container">
                <img src={image} alt="" className="ProjectSingle-img"></img>
            </div>

        </div>
    </div>

}