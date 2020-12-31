export default function Table(props) {
    let { data } = props

    let table_data = Object.keys(data).map((name) => {
        return <tr key={name}>
            <td>{name}</td>
            <td>{data[name]}</td>
        </tr>
    })

    return <table className="table table-bordered Light">
        <thead className="thead">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
            </tr>
        </thead>
        <tbody>
            {table_data}
        </tbody>
    </table>

}