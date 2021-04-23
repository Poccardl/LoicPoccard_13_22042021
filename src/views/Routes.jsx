import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './Home.jsx'
import { Login } from './Login.jsx'
import { Profile } from './Profile.jsx'
import { Error404 } from './Error404.jsx'

export class Routes extends React.Component {

    render() {
        return (
            <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/profile" exact component={Profile}></Route>
                    <Route path="/" component={Error404}></Route>
                </Switch>
            </Router>
            </>
        )
    }
}