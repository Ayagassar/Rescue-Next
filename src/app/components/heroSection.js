"use client"
import React, { useState } from 'react';; 
import Image from 'next/image';
import Logo from '../assets/logo.png';
import HeroImage from '../assets/heroImage.jpg';

const HeroSection= () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="background-gray">
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <a href="#" className="logo-link">
                                <Image className="logo-image" src={Logo} alt="" />
                            </a>
                        </div>

                        <div className="mobile-menu-button">
                            <button type="button" className="menu-button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                                {expanded ? (
                                    <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div className="desktop-menu">
                            <a href="#r" className="menu-link">Become a Volunteer</a>
                            <a href="#" className="menu-link">About Us</a>
                            <a href="#" className="menu-link">Contact</a>
                            
                        </div>

                        <div className="desktop-cta">
                            <a href="#" className="cta-button">Donate Now</a>
                        </div>
                    </div>

                    <nav className={`mobile-nav ${expanded ? 'expanded' : ''}`}>
                        <div className="mobile-nav-content">
                            <a href="#" className="mobile-nav-link">Become a Volunteer</a>
                            <a href="#" className="mobile-nav-link">About Us</a>
                            <a href="#" className="mobile-nav-link">Contact</a>
                            <a href="#" className="mobile-cta-button">Donate Now</a>
                        </div>
                    </nav>
                </div>
            </header>

            <section className="hero-section">
                <div className="hero-background">
                    <img className="hero-background-image" src="" alt="" />
                </div>

                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">Together, We Make a Difference</h1>
                        <p className="hero-description">Whether it's disaster relief, food assistance, or rebuilding communities, we stand with those in need. Together, we provide hope, healing, and a path forward for individuals and families facing hardship. Your support makes all the difference.</p>

                        <a href="#" className="hero-cta-button">Donate Now</a>

                    </div>

                    <div className="hero-image">
                        <Image className="hero-illustration" src={HeroImage} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;