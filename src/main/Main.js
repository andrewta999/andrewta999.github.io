import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../component/Header'
import Contact from './Contact'
import Project from './Project'
import Education from './Education'
import Leadership from './Leadership'
import Achievement from './Achievement'
import Work from './Work'
import About from './About'

import header_data from '../data/header'

export default function Main() {
    return <div className="Main">
        <Switch>
            <Route exact path={["/", "/projects"]}>
                <Header data={header_data["projects"]} />
                <Project />
            </Route>
            <Route path="/about">
                <Header data={header_data["about"]} />
                <About />
            </Route>
            <Route path="/work">
                <Header data={header_data["work"]} />
                <Work />
            </Route>
            <Route path="/education">
                <Header data={header_data["education"]} />
                <Education />
            </Route>
            <Route path="/leadership">
                <Header data={header_data["leadership"]} />
                <Leadership />
            </Route>
            <Route path="/achievements">
                <Header data={header_data["achievements"]} />
                <Achievement />
            </Route>
            <Route path="/contacts">
                <Header data={header_data["contacts"]} />
                <Contact />
            </Route>
        </Switch>
    </div>
}