import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../app/store'
import { userSelector } from '../../selectors/userSelector.js'
import { updated } from '../../actions/userActions.js'
import { Redirect } from 'react-router'

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
        // TODO: API request here
        // updated user informations {firstName, lastName}
        this.setState({isRedirect: true})
        this.props.updated(false, store.getState().session.token)
    }

    handleCancel() {
        this.setState({isRedirect: true})
        this.props.updated(false, store.getState().session.token)

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

export default connect(userSelector, {updated})(EditUserName)