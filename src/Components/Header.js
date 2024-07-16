import React from 'react';
import './header.css'

function Header() {
    return (
        <header className='navbar'>
            <div className='nav-rangz'>
                RangzMatch
            </div>
            <nav className='menu'>
                <a href="/">Home</a>
                <a href="/profile">Profile</a>
                <a href="/create-account">Create Account</a>
                <a href="/login">Login</a>
            </nav>
        </header>
    )
}

export default Header;