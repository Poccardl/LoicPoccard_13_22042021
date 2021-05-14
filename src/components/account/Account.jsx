import React from 'react'

export class Account extends React.Component {

    render() {
        return (
            <>
            <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{this.props.account.name}</h3>
                <p className="account-amount">${this.props.account.amount}</p>
                <p className="account-amount-description">{this.props.account.amount_description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
            </section>
            </>
        )
    }
}

// TODO: Proptypes