export default function LeadershipSingle(props) {
    let { data, name } = props
    let { location, date, text, logo} = data

    return <div className="container">
        <div className="EducationSingle row">

            <div className="col-12 col-md-7 col-ls-7 col-xl-7">
                <div className="EducationSingle-name">
                    {name}
                    <span className="EducationSingle-subname">
                        {` @${location} | ${date}`}
                    </span>
                </div>
                <div className="EducationSingle-text">
                    {text}
                </div>
            </div>
            <div className="col-md-5 col-ls-5 col-xl-5 Education-img-container">
                <img src={logo} alt="" className="EducationSingle-img"></img>
            </div>

        </div>
    </div>

}