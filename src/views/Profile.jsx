import React from 'react'
import { ProfileContent } from '../components/profile_content/ProfileContent.jsx'

export class Profile extends React.Component {

    render() {
        return (
            <>
            <main className="main bg-dark">
                <ProfileContent/>
            </main>
            </>
        )
    }
}