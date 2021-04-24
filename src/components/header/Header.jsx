import React from 'react'
import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export class Header extends React.Component {

    render() {
        return (
            <>
            <header>
                <nav>
                    <Link to="/">
                        <img src={logo} alt="" className="logo"/>
                    </Link>
                    <Link to="/sign-in" className="nav_link">
                        <FontAwesomeIcon icon={faUserCircle}/>
                        Sign In
                    </Link>
                    {/* <Link to="/logout">
                        <FontAwesomeIcon icon={faSignOutAlt}/>
                        Sign Out
                    </Link> */}
                </nav>
            </header>
            </>
        )
    }
}