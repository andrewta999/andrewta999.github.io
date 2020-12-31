export default function EducationSingle(props) {
    let { data, name } = props
    let { location, degree, course, logo} = data

    let course_list = course.map((name) => {
        return <span className="badge text-light EducationSingle-badge" key={name}>{name}</span>
    })

    return <div className="container">
        <div className="EducationSingle row">

            <div className="col-12 col-md-6 col-ls-6 col-xl-6">
                <div className="EducationSingle-name">
                    {name}
                    <span className="EducationSingle-subname">
                        {` ${location}`}
                    </span>
                </div>
                <div className="EducationSingle-text">
                    {degree}
                </div>
                <div className="EducationSingle-tech">
                    {course_list}
                </div>
            </div>
            <div className="col-md-6 col-ls-6 col-xl-6 Education-img-container">
                <img src={logo} alt="" className="EducationSingle-img"></img>
            </div>

        </div>
    </div>

}