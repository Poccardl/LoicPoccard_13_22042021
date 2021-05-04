import React from 'react'
import { Account } from '../../components/account/Account.jsx'
import accounts from '../../data/accounts.json'
import EditUserName from '../edit_user_name/EditUserName.jsx'
import { connect } from 'react-redux'
import { updated } from '../../actions/updatedUserAction.js'
import { updatedUserSelector } from '../../selectors/updatedUserSelector.js'
import { store } from '../../app/store'


class ProfileContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editUser: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.updated(true)
    }

    render() {
        return (
            <>
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                {store.getState().updated.editUser ? <EditUserName /> : <button className="edit-button" onClick={this.handleChange}>Edit Name</button>}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account, index) => (
                <Account key={`${index}_account`} account={account}/>
            ))}
            </>
        )
    }
}

export default connect(updatedUserSelector, {updated})(ProfileContent)