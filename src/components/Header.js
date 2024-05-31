import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
            </ul>
        </nav>
    );
}

export default Header;
