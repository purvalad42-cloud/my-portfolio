import profileImg from '../assets/profile.jpg';
import './About.css';

const FACTS = [
    { label: 'Full Name', value: 'Purva Sandip Lad' },
    { label: 'Birthday', value: '07 Feb 2007' },
    { label: 'Age', value: '19' },
    { label: 'Degree', value: 'B.Tech in CSE' },
    { label: 'Freelance', value: 'Available', green: true },
    { label: 'Focus', value: 'AI & Full Stack Dev', accent: true },
];

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="orb orb-lg" style={{ top: '10%', right: '-5%', animationDelay: '2s' }}></div>
            <div className="orb orb-sm" style={{ bottom: '10%', left: '5%', animationDelay: '1s' }}></div>

            <div className="container about-grid">
                {/* Photo side */}
                <div className="about-photo-wrap reveal">
                    <div className="about-photo-frame">
                        <img src={profileImg} alt="Purva Lad" className="about-photo" />
                    </div>
                    <div className="about-photo-badge">
                        <span className="badge-dot"></span>
                        Available for freelance
                    </div>
                </div>

                {/* Text side */}
                <div className="about-content">
                    <div className="section-tag reveal">About Me</div>
                    <h2 className="section-title reveal d1">Passionate About <span>Technology</span></h2>

                    <p className="about-text text-muted reveal d2">
                        I'm a <strong style={{ color: 'var(--text)' }}>Computer Science Engineering</strong> student at Ajeenkya D.Y Patil University
                        (ALTA School of Technology, Sunstone), Pune — batch of 2025–2029.
                    </p>
                    <p className="about-text text-muted reveal d2">
                        Driven by curiosity and continuous learning, I build real-world projects that create impactful solutions.
                        Currently mastering <strong style={{ color: 'var(--text)' }}>Full Stack Development</strong> and AI integrations.
                    </p>

                    <div className="about-facts reveal d3">
                        {FACTS.map((f, i) => (
                            <div key={i} className="fact-row">
                                <span className="fact-label">{f.label}</span>
                                <span className={`fact-value ${f.green ? 'fv-green' : ''} ${f.accent ? 'fv-accent' : ''}`}>
                                    {f.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="about-btns reveal d4">
                        <a href="#contact" className="btn btn-primary">Get In Touch</a>
                        <a href="#projects" className="btn btn-outline">My Projects</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
