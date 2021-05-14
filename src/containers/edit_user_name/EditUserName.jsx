import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../app/store'
import { userSelector } from '../../selectors/userSelector.js'
import { is_edit } from '../../actions/userActions.js'
import { Redirect } from 'react-router'
import axios from 'axios'

class EditUserName extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            isRedirect: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]: value})
    }

    handleSubmit() {
        this.apiRequest()
        this.setState({isRedirect: true})
    }

    handleCancel() {
        this.setState({isRedirect: true})
        this.props.is_edit(false, store.getState().session.email, store.getState().session.firstName, store.getState().session.lastName, store.getState().session.token)
    }

    apiRequest() {
        const url = `http://localhost:3001/api/v1/user/profile`
        const json = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName
        }
        axios.put(url, json, {headers: {Authorization: `Bearer ${store.getState().session.token}`}})
        .then(res => {
            const data = res.data;
            console.log("[profile] data AXIOS ->", data)
            console.info(data.message)
            if (data.status === 200) {
                this.props.is_edit(false, store.getState().session.email, this.state.firstName, this.state.lastName, store.getState().session.token)
            }
        })
    }

    render() {
        return (
            <>
            {this.state.isRedirect ?
            <>
            <Redirect push to="/profile"/>
            </>
            :
            <>
            <form className="edit_username_form">
                <div className="inputs">
                    <div>
                        <label htmlFor="firstName"/>
                        <input type="text" id="firstName" name="firstName" placeholder={store.getState().session.firstName} value={this.state.firstName} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="lastName"/>
                        <input type="text" id="lastName" name="lastName" placeholder={store.getState().session.lastName} value={this.state.lastName} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="buttons">
                    <span className="edit-button" onClick={this.handleSubmit}>Save</span>
                    <span className="edit-button" onClick={this.handleCancel}>Cancel</span>
                </div>
            </form>
            </>
            }
            </>
        )
    }
}

export default connect(userSelector, {is_edit})(EditUserName)