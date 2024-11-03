import React, { useState } from 'react';
import logo from '../images/sitezy-logo-shadow.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'navbar--open' : ''}`}>
            <div className="navbar__container">
                <div className="navbar__logo">
                    <img src={logo} alt="Logo" />
                </div>
                <button className={`navbar__toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="navbar__dots">
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                    </div>
                </button>
                <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#services">Designs</a></li>
                    <li><a href="#about">Tarifs</a></li>
                    <li><a href="#contact">Avis</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <div className="navbar__cta">
                        <a href="#reserve" className="cta-button">Réserver&nbsp;votre&nbsp;site</a>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
