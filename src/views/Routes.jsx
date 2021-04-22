import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export class Routes extends React.Component {

    render() {
        return (
            <>
            <Router>
                <Switch>
                    {/* <Route path="/" exact component={Home}></Route>
                    <Route path="/" component={Error404}></Route> */}
                </Switch>
            </Router>
            </>
        )
    }
}