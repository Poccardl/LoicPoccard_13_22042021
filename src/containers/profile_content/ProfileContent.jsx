import React from 'react'
import { Account } from '../../components/account/Account.jsx'
import accounts from '../../data/accounts.json'
import EditUserInfos from '../edit_user_name/EditUserInfos.jsx'
import { connect } from 'react-redux'
import { init, is_edit } from '../../actions/userActions.js'
import { userSelector } from '../../selectors/userSelector.js'
import { store } from '../../app/store'
import axios from 'axios'


class ProfileContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isEdit: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.apiRequest()
    }

    handleChange() {
        this.props.is_edit(true, store.getState().session.email, store.getState().session.firstName, store.getState().session.lastName, store.getState().session.token)
    }

    apiRequest() {
        const url = `http://localhost:3001/api/v1/user/profile`
        axios.post(url, {}, {headers: {Authorization: `Bearer ${store.getState().session.token}`}})
        .then(res => {
            const data = res.data;
            console.log("[profile] data AXIOS ->", data)
            console.info(data.message)
            this.props.init(data.body.email, data.body.firstName, data.body.lastName, store.getState().session.token)
        })
    }

    render() {
        return (
            <>
            <div className="header">
                <h1>Welcome back<br/>{store.getState().session.firstName} {store.getState().session.lastName}!</h1>
                {store.getState().session.isEdit ? <EditUserInfos /> : <button className="edit-button" onClick={this.handleChange}>Edit Name</button>}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account, index) => (
                <Account key={`${index}_account`} account={account}/>
            ))}
            </>
        )
    }
}

export default connect(userSelector, {init, is_edit})(ProfileContent)