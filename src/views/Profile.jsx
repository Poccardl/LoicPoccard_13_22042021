import React from 'react'
import { connect } from 'react-redux'
import ProfileContent from '../containers/profile_content/ProfileContent.jsx'
import { userSelector } from '../selectors/userSelector.js'
import { Redirect } from 'react-router-dom'
import { store } from '../app/store'

class Profile extends React.Component {

    render() {
        return (
            <>
            {store.getState().session.isLogin ?
                <>
                <main className="main bg-dark">
                    <ProfileContent/>
                </main>
                </>
                :
                <>
                <Redirect push to="/login"/>
                </>
            }
            </>
        )
    }
}

export default connect(userSelector, null)(Profile)