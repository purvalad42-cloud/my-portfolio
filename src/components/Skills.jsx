import './Skills.css';

const PROGRAMMING = [
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

const WEB = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
];

const TOOLS = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
    { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    { name: 'Excel', icon: 'https://img.icons8.com/color/96/microsoft-excel-2019--v1.png' },
    { name: 'PowerPoint', icon: 'https://img.icons8.com/color/96/microsoft-powerpoint-2019--v1.png' },
];

const AI_TOOLS = [
    { name: 'ChatGPT', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    { name: 'Gemini', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
];

function SkillGroup({ title, items }) {
    return (
        <div className="skill-group reveal">
            <h3 className="skill-group-title">{title}</h3>
            <div className="skill-icon-grid">
                {items.map((item, i) => (
                    <div key={i} className="skill-icon-card card">
                        <img src={item.icon} alt="" aria-hidden="true" className="skill-img" loading="lazy" />
                        <span className="skill-name">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="orb orb-lg" style={{ top: '0%', right: '-5%', animationDelay: '0s' }}></div>
            <div className="orb orb-md" style={{ bottom: '5%', left: '-3%', animationDelay: '2s' }}></div>

            <div className="container">
                <div className="section-head-center reveal">
                    <div className="section-tag">My Expertise</div>
                    <h2 className="section-title">Technical <span>Skills</span></h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto' }}>
                        Technologies and tools I work with to bring ideas to life.
                    </p>
                </div>

                <div className="skills-groups">
                    <SkillGroup title="🖥️ Programming Languages" items={PROGRAMMING} />
                    <SkillGroup title="🌐 Web Development" items={WEB} />
                    <SkillGroup title="🛠️ Tools & Platforms" items={TOOLS} />
                    <SkillGroup title="🤖 AI Tools" items={AI_TOOLS} />
                </div>
            </div>
        </section>
    );
}
