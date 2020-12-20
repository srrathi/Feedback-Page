import React from 'react'
import UserHeader from './UserHeader'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <div>
        <nav className="head">
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/feedback">
                <li>User Feedback</li>
                </Link>
                <Link to="/dashboard">
                <li>Admin Dashboard</li>
                </Link>
            </ul>
        </nav>
        <h3>Hey user, land to your desired location from our Navigation Panel</h3>
        </div>
    )
}

export default Nav
