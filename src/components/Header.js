import React from 'react';
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div className='nav'>
            <div className="logo nav__logo">
                <p className="logo__upper-text">Modus</p>
                versus
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;