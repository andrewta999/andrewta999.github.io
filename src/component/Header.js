import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            title: props.data.title,
            body: props.data.body
        }
    }

    toggle_switch = () => {
        let checked = this.state.checked
        let app = document.getElementById("App")
        app.classList.toggle("App-Dark")
        this.setState({
            checked: !checked
        })
    }

    render() {
        let { title, body, checked} = this.state 
        return <div className="Header">
            <div className="Header-title">
                {title}
                <span>
                    <label className="switch" style={{ "float": "right" }}>
                        <input type="checkbox" checked={checked}
                            onChange={this.toggle_switch}></input>
                        <span className="slider round"></span>
                    </label>
                </span>
            </div>
            <div className="Header-body">
                {body}
            </div>
        </div>
    }
}
