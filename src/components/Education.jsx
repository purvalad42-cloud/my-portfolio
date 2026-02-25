import { GraduationCap, Award, BookOpen } from 'lucide-react';
import './Education.css';

const EDU = [
    {
        icon: <GraduationCap size={24} />,
        period: '2025 – 2029',
        degree: 'B.Tech – Computer Science Engineering',
        school: 'ADYPU, ALTA School of Technology (Sunstone), Pune',
        active: true,
        tag: 'Current',
        side: 'right',
    },
    {
        icon: <Award size={24} />,
        period: '2023 – 2025',
        degree: 'HSC (Class 12th)',
        school: 'Yodha Defence Institute, Pune',
        active: false,
        side: 'left',
    },
    {
        icon: <BookOpen size={24} />,
        period: '2022 – 2023',
        degree: 'SSC (Class 10th)',
        school: 'Army Public School',
        active: false,
        side: 'right',
    },
];

export default function Education() {
    return (
        <section id="education" className="education">
            <div className="orb orb-lg" style={{ bottom: '5%', right: '-5%', animationDelay: '1s' }}></div>
            <div className="orb orb-sm" style={{ top: '10%', left: '5%', animationDelay: '3s' }}></div>

            <div className="container">
                <div className="section-head-center reveal">
                    <div className="section-tag">My Background</div>
                    <h2 className="section-title">Academic <span>Journey</span></h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto' }}>
                        Educational path that shaped my technical foundation.
                    </p>
                </div>

                <div className="edu-zigzag">
                    {/* Center spine */}
                    <div className="edu-spine"></div>

                    {EDU.map((item, i) => (
                        <div key={i} className={`edu-row ${item.side === 'left' ? 'row-left' : 'row-right'} reveal d${i + 1}`}>
                            {/* Card */}
                            <div className={`edu-card card ${item.active ? 'edu-active' : ''}`}>
                                {item.tag && <span className="edu-tag">{item.tag}</span>}
                                <p className="edu-period text-muted">{item.period}</p>
                                <h3 className="edu-degree">{item.degree}</h3>
                                <p className="edu-school text-muted">{item.school}</p>
                            </div>

                            {/* Center dot */}
                            <div className={`edu-dot-wrap`}>
                                <div className={`edu-dot ${item.active ? 'dot-active' : ''}`}>
                                    {item.icon}
                                </div>
                            </div>

                            {/* Empty side */}
                            <div className="edu-empty"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
