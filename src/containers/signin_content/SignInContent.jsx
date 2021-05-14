import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { login } from '../../actions/userActions.js'
import { userSelector } from '../../selectors/userSelector.js'
import { Redirect } from 'react-router'
import { store } from '../../app/store'
import axios from 'axios'
import { ValidationInfo } from '../../components/validation_info/ValidationInfo.jsx'
import { ValidationSignIn } from '../../components/validation_signin/ValidationSignIn.jsx'

class SignInContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emailIsValid: true,
            validation_class: "",
            fromIsValid: true,
            isLogin: undefined,
            email: "",
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            token: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        let isValid = false
        let validation_class = 'not_valid'
        if (name === 'email') {
            const regex_mail = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            const regex_is = regex_mail.test(value)
            if (regex_is) {
                isValid = true
                validation_class = 'valid'
            } else {
                if (this.state.emailIsValid === true || this.state.emailIsValid === undefined) {
                    isValid = false
                    validation_class = 'not_valid'
                }
            }
            this.setState({emailIsValid: isValid, validation_class: validation_class})
        }
        this.setState({[name]: value})
    }

    handleSubmit() {
        this.apiRequest()
    }

    // "email": "tony@stark.com",
    // "password": "password123"
    apiRequest() {
        const url = `http://localhost:3001/api/v1/user/login`
        const json = {
            "email": this.state.email,
            "password": this.state.password
            }
        axios.post(url, json)
        .then(res => {
            const data = res.data;
            if (data.status === 200) {
                this.setState({fromIsValid: true, token: data.body.token})
                this.connection()
            }
        })
        .catch(this.setState({fromIsValid: false}))
    }

    connection() {
        this.props.login(this.state.token)
    }

    render() {
        return (
            <>
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle}/>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input className={this.state.validation_class} type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        {this.state.emailIsValid ? "" : <ValidationInfo />}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember" name="remember" checked={this.state.remember} onChange={this.handleChange}/>
                        <label htmlFor="remember" >Remember me</label>
                    </div>
                    {store.getState().session.isLogin ? <Redirect push to="/profile"/> : <span className="sign-in-button" onClick={this.handleSubmit}>Sign In</span>}
                    {this.state.fromIsValid ? "" : <ValidationSignIn />}
                </form>
            </section>
            </>
        )
    }
}

export default connect(userSelector, {login})(SignInContent)