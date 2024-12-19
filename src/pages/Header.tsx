import React from 'react';
import '../styles/header.css';
import Logo from '../assets/logo.svg';
import { useNavigate, useLocation } from 'react-router';

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <header className='header'>
            <div />
            <nav>
                <button 
                    className={location.pathname === '/' ? 'active' : ''} 
                    onClick={() => navigate('/')}
                >
                    Home
                </button>
                <button 
                    className={location.pathname === '/cards' ? 'active' : ''} 
                    onClick={() => navigate('/cards')}
                >
                    Cards
                </button>
                <button 
                    className={location.pathname === '/case-studies' ? 'active' : ''} 
                    onClick={() => navigate('/case-studies')}
                >
                    Case Studies
                </button>
                <button 
                    className={location.pathname === '/about' ? 'active' : ''} 
                    onClick={() => navigate('/about')}
                >
                    About
                </button>
            </nav>
            <img src={Logo} alt='Pitch Logo' className='logo' onClick={() => navigate('/')}/>
        </header>
    );
};