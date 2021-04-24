import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export class SignInContent extends React.Component {

    render() {
        return (
            <>
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle}/>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <a href="" className="sign-in-button">Sign In</a>
                </form>
            </section>
            </>
        )
    }
}