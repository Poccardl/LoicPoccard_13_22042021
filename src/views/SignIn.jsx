import React from 'react'
import SignInContent from '../containers/signin_content/SignInContent.jsx'

export class SignIn extends React.Component {

    render() {
        return (
            <>
            <main className="main bg-dark">
                <SignInContent/>
            </main>
            </>
        )
    }
}