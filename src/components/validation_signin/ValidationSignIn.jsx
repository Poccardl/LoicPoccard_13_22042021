import React from 'react'

export class ValidationSignIn extends React.Component {

    render() {
        return (
            <>
            <div className="login_failed_message">
                <span>The email address or password is incorrect, please try again !</span>
            </div>
            </>
        )
    }
}