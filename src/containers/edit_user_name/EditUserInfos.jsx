import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../app/store'
import { userSelector } from '../../selectors/userSelector.js'
import { is_edit, edit } from '../../actions/userActions.js'
import { Redirect } from 'react-router'
import axios from 'axios'
import { url_api } from '../../constants/urlConstant.js'

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

    /**
     * retrieves the value of an 'onChange' event, more precisely the values of the fields of the user's information modification form,
     * attribute the new value of the fields in the local state
     * @date 2021-05-16
     * @param {object} e - 'onChange' event type
     */
    handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]: value})
    }

    /**
     * calls the this.apiRequest() method and assigns the following value to the local state -> {this.state.isRedirect: true}
     * @date 2021-05-16
     */
    handleSubmit() {
        this.apiRequest()
        this.setState({isRedirect: true})
    }

    /**
     * assigns the following value to the local state {this.state.isRedirect: true},
     * call the is_edit action (redux)
     * @date 2021-05-16
     */
    handleCancel() {
        this.setState({isRedirect: true})
        this.props.is_edit(false, store.getState().session.email, store.getState().session.firstName, store.getState().session.lastName, store.getState().session.token)
    }

    /**
     * makes an axios request of type 'put' to the user API with the new information firstName and lastName,
     * redefines the following data to the local state -> {firstName: firstName, lastName: lastName},
     * call the edit action (redux)
     * @date 2021-05-16
     */
    apiRequest() {
        const url = `${url_api}profile`
        const json = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName
        }
        if (this.state.firstName === "") {
            this.setState({firstName: store.getState().session.firstName})
            json["firstName"] = store.getState().session.firstName
        }
        if (this.state.lastName === "") {
            this.setState({lastName: store.getState().session.lastName})
            json["lastName"] = store.getState().session.lastName
        }
        axios.put(url, json, {headers: {Authorization: `Bearer ${store.getState().session.token}`}})
        .then(res => {
            const data = res.data;
            if (data.status === 200) {
                this.props.edit(false, store.getState().session.email, this.state.firstName, this.state.lastName, store.getState().session.token)
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

export default connect(userSelector, {is_edit, edit})(EditUserName)