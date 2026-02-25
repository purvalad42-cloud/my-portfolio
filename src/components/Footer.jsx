import { Heart, Linkedin, Mail, Github, ArrowUp } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <img src={profileImg} alt="Purva" className="logo-img-sm" />
                    <span className="footer-name">Purva <span className="text-gradient">Lad</span></span>
                </div>

                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/purva-lad-b01822383" target="_blank" rel="noopener noreferrer" className="footer-soc"><Linkedin size={17} /></a>
                    <a href="mailto:purvalad42@gmail.com" className="footer-soc"><Mail size={17} /></a>
                    <a href="#" className="footer-soc"><Github size={17} /></a>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="text-muted footer-copy">
                        Crafted with <Heart size={13} className="heart" /> by Purva Lad &copy; {new Date().getFullYear()}
                    </p>
                    <a href="#home" className="back-top" aria-label="Back to top">
                        <ArrowUp size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
