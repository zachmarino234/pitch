import React, { useState } from 'react';
import '../styles/header.css';
import Logo from '../assets/logo.svg';
import { useNavigate, useLocation } from 'react-router';

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='header'>
            <button 
                className='menu-toggle' 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <button
                    className={location.pathname === '/' ? 'active' : ''}
                    onClick={() => { 
                        navigate('/'); 
                        setIsMenuOpen(false); 
                    }}
                >
                    Home
                </button>
                <button
                    className={location.pathname === '/cards' ? 'active' : ''}
                    onClick={() => { 
                        navigate('/cards'); 
                        setIsMenuOpen(false); 
                    }}
                >
                    Cards
                </button>
                <button
                    className={location.pathname === '/case-studies' ? 'active' : ''}
                    onClick={() => { 
                        navigate('/case-studies'); 
                        setIsMenuOpen(false); 
                    }}
                >
                    Case Studies
                </button>
                <button
                    className={location.pathname === '/about' ? 'active' : ''}
                    onClick={() => { 
                        navigate('/about'); 
                        setIsMenuOpen(false); 
                    }}
                >
                    About
                </button>
            </nav>
            <img 
                src={Logo} 
                alt='Pitch Logo' 
                className='logo' 
                onClick={() => navigate('/')} 
            />
        </header>
    );
};
