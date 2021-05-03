import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { login } from '../../actions/userActions.js'
import { userSelector } from '../../selectors/userSelector.js'

class SignInContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogin: undefined,
            email: undefined,
            firstName: undefined,
            lastName: undefined,
            token: undefined
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({[name]: value})
    }

    handleSubmit(e) {
        // TODO: API request here
        this.props.login("loic.poccard@gmail.com", "POCCARD", "Loïc", "")
    }

    render() {
        return (
            <>
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle}/>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember" name="remember" checked={this.state.remember} onChange={this.handleChange}/>
                        <label htmlFor="remember" >Remember me</label>
                    </div>
                    <a className="sign-in-button" onClick={this.handleSubmit}>Sign In</a>
                </form>
            </section>
            </>
        )
    }
}

export default connect(userSelector, {login})(SignInContent)