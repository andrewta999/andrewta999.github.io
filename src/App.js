import React from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import NavBar from './main/NavBar'
import Main from './main/Main'

function App() {
    return (
        <Router>
            <div className="App Light" id="App">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                            <NavBar />
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                            <Main />
                        </div>

                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App
