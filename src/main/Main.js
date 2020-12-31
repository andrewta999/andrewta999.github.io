import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../component/Header'
import Contact from './Contact'
import Project from './Project'

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
            </Route>
            <Route path="/work">
                <Header data={header_data["work"]} />
            </Route>
            <Route path="/education">
                <Header data={header_data["education"]} />
            </Route>
            <Route path="/leadership">
                <Header data={header_data["leadership"]} />
            </Route>
            <Route path="/achievements">
                <Header data={header_data["achievements"]} />
            </Route>
            <Route path="/contacts">
                <Header data={header_data["contacts"]} />
                <Contact />
            </Route>
        </Switch>
    </div>
}