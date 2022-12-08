import React from 'react';
import {Link} from "react-router-dom";
import SearchImage from '../img/Search.png'
import Logo from './General/Logo'
import '../css/Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="container">
                <div className="header__inner">
                    <Logo />
                    <ul className='nav'>
                        <li className='nav__link'><Link to='/'>Home</Link></li>
                        <li className='nav__link'><Link to='/about'>About</Link></li>
                        <li className='nav__link'><Link to='/services'>Services</Link></li>
                        <li className='nav__link'><Link to='/portfolio'>Portfolio</Link></li>
                        <li className='nav__link'><Link to='/blog'>Blog</Link></li>
                        <li className='nav__link'><Link to='/feature'>Feature</Link></li>
                        <li className='nav__link'><Link to='/contacts'>Contacts</Link></li>
                        <li className='nav__link nav__icon-link'>
                            <img className='nav__img' src={SearchImage} alt="" width='16px' height='16px' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;