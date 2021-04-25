import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from '../components/header/Header.jsx'
import { Footer } from '../components/footer/Footer.jsx'
import { Home } from './Home.jsx'
import { SignIn } from './SignIn.jsx'
import { Profile } from './Profile.jsx'
import { Error404 } from './Error404.jsx'

export class Routes extends React.Component {

    render() {
        return (
            <>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/login" exact component={SignIn}></Route>
                    <Route path="/profile" exact component={Profile}></Route>
                    <Route path="/" component={Error404}></Route>
                </Switch>
                <Footer/>
            </Router>
            </>
        )
    }
}