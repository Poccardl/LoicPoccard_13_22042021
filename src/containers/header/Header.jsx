import React from 'react'
import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { store } from '../../app/store'
import { connect } from 'react-redux'
import { logout } from '../../actions/userActions.js'
import { userSelector } from '../../selectors/userSelector.js'

class Header extends React.Component {

    render() {
        return (
            <>
            <header>
                <nav>
                    <Link to="/">
                        <img src={logo} alt="" className="logo"/>
                    </Link>
                    {store.getState().session.isLogin ?
                        <>
                        <div>
                            <Link to="/profile" className="nav_link">
                                <FontAwesomeIcon icon={faUserCircle}/>
                                {store.getState().session.lastName}
                            </Link>
                            <Link to="/" className="nav_link" onClick={() => {this.props.logout()}}>
                                <FontAwesomeIcon icon={faSignOutAlt}/>
                                Sign Out
                            </Link>
                        </div>
                        </>
                        :
                        <>
                        <Link to="/login" className="nav_link">
                            <FontAwesomeIcon icon={faUserCircle}/>
                            Sign In
                        </Link>
                        </>
                    }
                </nav>
            </header>
            </>
        )
    }
}

export default connect(userSelector, {logout})(Header)