import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, MapPin } from 'lucide-react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const ROLES = ['Web Developer', 'AI Enthusiast', 'Learner', 'Problem Solver'];

export default function Hero() {
    const [idx, setIdx] = useState(0);
    const [chars, setChars] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const word = ROLES[idx];
        let t;
        if (typing) {
            if (chars.length < word.length) {
                t = setTimeout(() => setChars(word.slice(0, chars.length + 1)), 75);
            } else {
                t = setTimeout(() => setTyping(false), 1800);
            }
        } else {
            if (chars.length > 0) {
                t = setTimeout(() => setChars(chars.slice(0, -1)), 45);
            } else {
                setIdx((i) => (i + 1) % ROLES.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(t);
    }, [chars, typing, idx]);

    return (
        <section id="home" className="hero">
            {/* Floating orbs like reference */}
            <div className="orb orb-lg" style={{ top: '8%', right: '5%', animationDelay: '0s' }}></div>
            <div className="orb orb-lg" style={{ bottom: '10%', left: '3%', animationDelay: '2s' }}></div>
            <div className="orb orb-md" style={{ top: '50%', right: '20%', animationDelay: '1s' }}></div>
            <div className="orb orb-md" style={{ top: '30%', left: '10%', animationDelay: '3s' }}></div>
            <div className="orb orb-sm" style={{ bottom: '25%', right: '8%', animationDelay: '1.5s' }}></div>
            <div className="orb orb-sm" style={{ top: '70%', left: '25%', animationDelay: '4s' }}></div>

            <div className="container hero-grid">
                {/* Left: Text */}
                <div className="hero-text">
                    <p className="hero-hi reveal">👋 Hi,</p>
                    <h1 className="hero-name reveal d1">
                        I'm <span className="text-gradient">Purva Lad</span>
                    </h1>
                    <p className="hero-role reveal d2">
                        <span className="typed-word">{chars}</span>
                        <span className="caret">|</span>
                    </p>
                    <p className="hero-quote text-muted reveal d3">
                        "Innovating Digital Experiences with Code & Creativity"
                    </p>
                    <p className="hero-location text-muted reveal d3">
                        <MapPin size={15} /> Pune, Maharashtra, India
                    </p>

                    <div className="hero-btns reveal d4">
                        <a href="#contact" className="btn btn-primary">Let's Connect <ArrowDown size={17} /></a>
                        <a href="#projects" className="btn btn-outline">View Projects</a>
                    </div>

                    <div className="hero-socials reveal d4">
                        <a href="https://www.linkedin.com/in/purva-lad-b01822383" target="_blank" rel="noopener noreferrer" className="soc-btn" title="LinkedIn">
                            <Linkedin size={19} />
                        </a>
                        <a href="mailto:purvalad42@gmail.com" className="soc-btn" title="Email">
                            <Mail size={19} />
                        </a>
                        <a href="#" className="soc-btn" title="GitHub">
                            <Github size={19} />
                        </a>
                    </div>
                </div>

                {/* Right: Photo */}
                <div className="hero-photo-wrap reveal d2">
                    {/* Floating skill chips */}
                    <div className="float-chip chip-html">HTML/CSS</div>
                    <div className="float-chip chip-react">React ⚛️</div>
                    <div className="float-chip chip-ai">AI Tools 🤖</div>

                    <div className="photo-circle">
                        <div className="photo-ring">
                            <img src={profileImg} alt="Purva Lad" className="photo-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
