import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { login } from '../../actions/userActions.js'
import { userSelector } from '../../selectors/userSelector.js'
import { Redirect } from 'react-router'
import { store } from '../../app/store'
import axios from 'axios'

class SignInContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
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
            console.log("[login] data AXIOS ->", data)
            console.info(data.message)
            if (data.status === 200) {
                this.setState({token: data.body.token})
                this.connection()
            }
            else {
                // TODO: add esle exception
            }
        })
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
                        <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
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
                </form>
            </section>
            </>
        )
    }
}

export default connect(userSelector, {login})(SignInContent)