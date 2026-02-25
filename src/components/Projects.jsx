import { Github, ExternalLink, Folder } from 'lucide-react';
import './Projects.css';

const PROJECTS = [
    {
        title: 'Weather App',
        desc: 'A dynamic weather application displaying real-time forecasts, temperature, and conditions. Features a clean, intuitive interface fetching live weather data.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        live: 'https://wheatherapp88.netlify.app', github: '#',
    },
    {
        title: 'Task App',
        desc: 'A robust task management tool to organize daily activities, set priorities, and track progress. Ensures a productive workflow with a modern UI.',
        tech: ['React', 'CSS', 'Vite'],
        live: 'https://taskapp88.netlify.app', github: '#',
    },
    {
        title: 'Digital Clock App',
        desc: 'An aesthetically pleasing digital clock featuring real-time updates and a neat layout. Perfect for tracking time instantly.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        live: 'https://taskapp88.netlify.app', github: '#',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="orb orb-lg" style={{ top: '10%', left: '-5%', animationDelay: '0.5s' }}></div>

            <div className="container">
                <div className="section-head-center reveal">
                    <div className="section-tag">My Work</div>
                    <h2 className="section-title">Featured <span>Projects</span></h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto' }}>
                        Real-world applications I've built with passion and purpose.
                    </p>
                </div>

                <div className="projects-grid">
                    {PROJECTS.map((p, i) => (
                        <div key={i} className={`project-card card reveal d${i + 1}`}>
                            <div className="pc-header">
                                <Folder className="pc-folder" size={36} />
                                <div className="pc-links">
                                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="pc-link" aria-label="GitHub"><Github size={19} /></a>
                                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="pc-link" aria-label="Live Demo"><ExternalLink size={19} /></a>
                                </div>
                            </div>
                            <h3 className="pc-title">{p.title}</h3>
                            <p className="pc-desc text-muted">{p.desc}</p>
                            <div className="pc-tech">
                                {p.tech.map((t, j) => <span key={j} className="pc-tag">{t}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
