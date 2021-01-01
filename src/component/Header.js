import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
        }
    }

    toggle_switch = () => {
        let checked = this.state.checked
        let lights = document.getElementsByClassName("Light")
        for (let ele of lights){
            ele.classList.toggle("Dark")
        }
        this.setState({
            checked: !checked
        })
    }

    render() {
        let {checked} = this.state 
        let {title, body} = this.props.data 
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
