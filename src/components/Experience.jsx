import './Experience.css';

const EXPERIENCES = [
    {
        role: 'Web Development Intern',
        company: 'Code Alfa',
        period: 'Feb 2025 – May 2025',
        description: 'Working on full stack web development projects, building responsive UIs and backend APIs. Learning modern frameworks and deployment strategies.',
        tech: ['React', 'Node.js', 'CSS', 'Git'],
        current: true,
    },
    {
        role: 'Web Development Intern',
        company: 'Infobyte',
        period: 'Feb 2025 – Mar 2025',
        description: 'Contributed to building responsive web applications, collaborated with senior developers, and implemented UI components using React and Vite.',
        tech: ['React', 'Vite', 'CSS', 'Git'],
        current: false,
    },
];

export default function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="orb orb-lg" style={{ top: '5%', left: '-5%', animationDelay: '0s' }}></div>
            <div className="container">
                <div className="section-head-center reveal">
                    <div className="section-tag">Professional Journey</div>
                    <h2 className="section-title">Work <span>Experience</span></h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto' }}>
                        Hands-on roles that sharpened my development skills.
                    </p>
                </div>

                <div className="experience-list">
                    {EXPERIENCES.map((exp, i) => (
                        <div key={i} className={`exp-card card reveal d${i + 1}`}>
                            <div className="exp-header">
                                <div>
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <span className="exp-company">@ {exp.company}</span>
                                </div>
                                {exp.current && <span className="exp-current-tag">Current</span>}
                            </div>
                            <p className="exp-period text-muted">{exp.period}</p>
                            <p className="exp-desc text-muted">{exp.description}</p>
                            <div className="exp-tech">
                                {exp.tech.map((t, j) => <span key={j} className="exp-tag">{t}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
