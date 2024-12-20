import React, { useState } from 'react';
import '../styles/header.css';
import Logo from '../assets/logo.svg';
import { useNavigate, useLocation } from 'react-router';

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='flex justify-between items-center bg-gradient-to-r from-orange-1 to-orange-2 px-5 py-3'>
            <button 
                className='text-2xl p-0 text-white sm:hidden' 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>
            <nav className={`nav hidden sm:flex sm:gap-2.5 sm:justify-center sm:flex-1 sm:order-1 ${isMenuOpen ? 'open' : ''}`}>
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
