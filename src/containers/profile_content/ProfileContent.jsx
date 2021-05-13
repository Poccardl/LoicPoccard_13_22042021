import React from 'react'
import { Account } from '../../components/account/Account.jsx'
import accounts from '../../data/accounts.json'
import EditUserName from '../edit_user_name/EditUserName.jsx'
import { connect } from 'react-redux'
import { init, updated } from '../../actions/userActions.js'
import { userSelector } from '../../selectors/userSelector.js'
import { store } from '../../app/store'
import axios from 'axios'


class ProfileContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editUser: false,
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.apiRequest()
    }

    handleChange(e) {
        this.props.updated(true, store.getState().session.token)
    }

    apiRequest() {
        const url = `http://localhost:3001/api/v1/user/profile`
        axios.post(url, {}, {headers: {Authorization: `Bearer ${store.getState().session.token}`}})
        .then(res => {
            const data = res.data;
            console.log("[profile] data AXIOS ->", data)
            console.info(data.message)
            // TODO: this.props.init() ?
            this.setState({firstName: data.body.firstName , lastName: data.body.lastName})
        })
    }

    render() {
        return (
            <>
            <div className="header">
                <h1>Welcome back<br />{this.state.firstName} {this.state.lastName}!</h1>
                {store.getState().session.editUser ? <EditUserName /> : <button className="edit-button" onClick={this.handleChange}>Edit Name</button>}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account, index) => (
                <Account key={`${index}_account`} account={account}/>
            ))}
            </>
        )
    }
}

export default connect(userSelector, {init, updated})(ProfileContent)