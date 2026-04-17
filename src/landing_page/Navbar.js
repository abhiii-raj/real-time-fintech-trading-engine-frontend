import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setLoggedIn(!!token);
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setLoggedIn(false);
        navigate('/signup');
    };

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .nx-navbar {
                position: fixed; top: 0; left: 0; right: 0; z-index: 999;
                background: rgba(56,126,209,0.97);
                border-bottom: 1px solid ${scrolled ? '#e5e7eb' : 'transparent'};
                transition: border-color 0.2s;
                font-family: 'Inter', sans-serif;
            }
            .nx-nav-inner {
                max-width: 1200px; margin: 0 auto;
                display: flex; align-items: center; justify-content: space-between;
                padding: 0 32px; height: 64px;
            }
            .nx-logo {
                font-weight: 600; font-size: 17px; color: #fff;
                text-decoration: none; letter-spacing: -0.3px;
                display: flex; align-items: center; gap: 8px;
            }
            .nx-logo-dot { width: 7px; height: 7px; background: #2563eb; border-radius: 50%; margin-top: 1px; }
            .nx-links { display: flex; align-items: center; gap: 4px; }
            .nx-link {
                font-size: 14px; font-weight: 400; color: #eaf2ff;
                text-decoration: none; padding: 6px 12px; border-radius: 6px;
                transition: color 0.15s, background 0.15s;
            }
            .nx-link:hover { color: #fff; background: rgba(255,255,255,0.14); }
            .nx-btn-login {
                font-size: 14px; font-weight: 500; color: #111;
                background: none; border: 1px solid #d1d5db;
                padding: 6px 16px; border-radius: 7px; cursor: pointer;
                transition: border-color 0.15s, background 0.15s;
                text-decoration: none;
            }
            .nx-btn-login:hover { border-color: #9ca3af; background: #f9fafb; color: #111; }
            .nx-btn-primary {
                font-size: 14px; font-weight: 500; color: #fff;
                background: #111; border: none;
                padding: 6px 16px; border-radius: 7px; cursor: pointer;
                transition: background 0.15s;
                text-decoration: none;
                display: inline-flex; align-items: center; gap: 7px;
            }
            .nx-btn-primary:hover { background: #333; color: #fff; }
            .nx-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
            @media (max-width: 768px) {
                .nx-links { display: ${mobileOpen ? 'flex' : 'none'}; flex-direction: column; position: absolute;
                    top: 64px; left: 0; right: 0; background: #fff; border-bottom: 1px solid #e5e7eb;
                    padding: 12px 24px; gap: 2px; }
                .nx-hamburger { display: block; }
                .nx-nav-inner { position: relative; }
            }
        `}</style>
        <nav className="nx-navbar">
            <div className="nx-nav-inner">
                <Link to="/" className="nx-logo">
                    <span className="nx-logo-dot"></span>
                    RealTime Fintech Trading Engine
                </Link>
                <button className="nx-hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M3 5h14M3 10h14M3 15h14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </button>
                <div className="nx-links">
                    <Link className="nx-link" to="/about">About</Link>
                    <Link className="nx-link" to="/product">Products</Link>
                    <Link className="nx-link" to="/pricing">Pricing</Link>
                    <Link className="nx-link" to="/support">Support</Link>
                    {loggedIn ? (
                        <>
                            <Link className="nx-link" to="/portfolio-dashboard">Dashboard</Link>
                            <button className="nx-btn-login" style={{marginLeft: 8}} onClick={handleLogout}>Log out</button>
                        </>
                    ) : (
                        <>
                            <Link className="nx-btn-login" to="/signup" style={{marginLeft: 8}}><i className="fa fa-sign-in" aria-hidden="true"></i> Log in</Link>
                            <Link className="nx-btn-primary" to="/signup" style={{marginLeft: 8}}><i className="fa fa-arrow-right" aria-hidden="true"></i>Get started</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
        <div style={{height: 64}} />
        </>
    );
}

export default Navbar;
