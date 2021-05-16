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
import { url_api } from '../../constants/urlConstant.js'

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
            remember: false,
            firstName: "",
            lastName: "",
            token: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /**
     * retrieves the value of an 'onChange' event, more precisely the values of the connection form fields,
     * assign the following values to the local state -> {emailIsValid: false/true, validation_class: valid/not_valid} & input field values
     * @date 2021-05-16
     * @param {object} e - 'onChange' event type
     */
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

    /**
     * calls the method this.apiRequest()
     * @date 2021-05-16
     */
    handleSubmit() {
        this.apiRequest()
    }

    /**
     * makes a 'post' axios request to the user API,
     * if the connection information is correct then call the method this.connection() and assign the following values to the local state -> {this.state.fromIsValid: true, this.state.token: token},
     * else {this.state.fromIsValid: false}
     * @date 2021-05-16
     */
    apiRequest() {
        const url = `${url_api}login`
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
        .catch((error) => {
            this.setState({fromIsValid: false})
        })
    }

    /**
     * call the (redux) login action by giving it the token of the connected user
     * @date 2021-05-16
     */
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