import React from 'react'
import { Account } from '../account/Account.jsx'
import accounts from '../../data/accounts.json'

export class ProfileContent extends React.Component {

    render() {
        return (
            <>
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account, index) => (
                <Account key={`${index}_account`} account={account}/>
            ))}
            </>
        )
    }
}