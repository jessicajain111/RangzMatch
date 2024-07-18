import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className='navbar'>
            <div className='nav-rangz'>
                RangzMatch
            </div>
            <nav className='menu'>
                <Link to ="/">Home</Link>
                <Link to ="/createaccount">Create Account</Link>
                <Link to ="/login">Login</Link>
                <Link to ="/">Profile</Link>  
            </nav>
        </header>
    )
}

export default Header;