import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faList } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='title'>
                <div className='imageContainer'>
                    <img src={logo} alt='Wealth health logo' className='logo'/>
                </div>
                <h1>HRnet</h1>
            </div>
            <nav className='navigation'>
                <div>
                    <Link to="/" className='links'>
                        <FontAwesomeIcon icon={faCirclePlus} className='icon'></FontAwesomeIcon>
                        Create a new employee
                    </Link>
                </div>
                <div>
                    <Link to="/list" className='links'>
                        <FontAwesomeIcon icon={faList} className='icon'></FontAwesomeIcon>
                        View current employee(s)
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;