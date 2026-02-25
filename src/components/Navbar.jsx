import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Palette } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './Navbar.css';

const COLORS = [
    { name: 'violet', hex: '#8b5cf6' },
    { name: 'pink', hex: '#ec4899' },
    { name: 'yellow', hex: '#eab308' },
    { name: 'red', hex: '#ef4444' },
    { name: 'blue', hex: '#3b82f6' },
    { name: 'white', hex: '#94a3b8' },
];

export default function Navbar({ theme, toggleTheme, accentColor, setAccentColor }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [paletteOpen, setPaletteOpen] = useState(false);

    const links = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-inner">
                <a href="#home" className="nav-logo">
                    <img src={profileImg} alt="Purva Lad" className="logo-img" />
                    <span className="logo-text">Purva <span className="text-gradient">Lad</span></span>
                </a>

                <ul className="nav-links-desktop">
                    {links.map(l => (
                        <li key={l}>
                            <a href={`#${l}`} className="nav-link">{l.charAt(0).toUpperCase() + l.slice(1)}</a>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    {/* Color Picker */}
                    <div className="color-picker-wrap">
                        <button
                            onClick={() => setPaletteOpen(!paletteOpen)}
                            className="theme-btn"
                            aria-label="Change accent color"
                            title="Change Color"
                        >
                            <Palette size={18} />
                        </button>

                        {paletteOpen && (
                            <div className="color-dropdown">
                                {COLORS.map(c => (
                                    <button
                                        key={c.name}
                                        className={`color-dot ${accentColor === c.name ? 'active' : ''}`}
                                        style={{ background: c.hex }}
                                        onClick={() => { setAccentColor(c.name); setPaletteOpen(false); }}
                                        title={c.name}
                                        aria-label={`Set ${c.name} theme`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Dark / Light Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="theme-btn"
                        aria-label="Toggle theme"
                        title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
                <ul className="mobile-links">
                    {links.map(l => (
                        <li key={l}>
                            <a href={`#${l}`} className="mobile-link" onClick={() => setMenuOpen(false)}>
                                {l.charAt(0).toUpperCase() + l.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
