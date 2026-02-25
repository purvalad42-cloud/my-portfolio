import { Mail, Linkedin, Github, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="orb orb-lg" style={{ bottom: '5%', right: '-5%', animationDelay: '1s' }}></div>
            <div className="orb orb-md" style={{ top: '10%', left: '5%', animationDelay: '3s' }}></div>

            <div className="container">
                <div className="section-head-center reveal">
                    <div className="section-tag">Say Hello</div>
                    <h2 className="section-title">Get In <span>Touch</span></h2>
                    <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto' }}>
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Left Info */}
                    <div className="contact-info reveal d1">
                        <h3 className="contact-cta">Let's Build Something<br /><span className="text-gradient">Amazing Together</span></h3>
                        <p className="text-muted contact-info-desc">
                            I'm currently available for freelance projects and full-time opportunities.
                            Whether it's a web app, an AI integration, or a creative collaboration — reach out!
                        </p>

                        <div className="contact-links">
                            <a href="mailto:purvalad42@gmail.com" className="contact-link card">
                                <div className="contact-icon"><Mail size={20} /></div>
                                <div>
                                    <p className="cl-label">Email</p>
                                    <p className="cl-value text-muted">purvalad42@gmail.com</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/purva-lad-b01822383" target="_blank" rel="noopener noreferrer" className="contact-link card">
                                <div className="contact-icon"><Linkedin size={20} /></div>
                                <div>
                                    <p className="cl-label">LinkedIn</p>
                                    <p className="cl-value text-muted">purva-lad-b01822383</p>
                                </div>
                            </a>
                            <a href="#" className="contact-link card">
                                <div className="contact-icon"><Github size={20} /></div>
                                <div>
                                    <p className="cl-label">GitHub</p>
                                    <p className="cl-value text-muted">@purvalad</p>
                                </div>
                            </a>
                        </div>

                        <a href="mailto:purvalad42@gmail.com" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                            Send Email <Send size={16} />
                        </a>
                    </div>

                    {/* Right Form */}
                    <form className="contact-form card reveal d2" onSubmit={(e) => { e.preventDefault(); alert('Message sent! ✨'); }}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="cf-name">Name</label>
                                <input id="cf-name" type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cf-email">Email</label>
                                <input id="cf-email" type="email" placeholder="your@email.com" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cf-sub">Subject</label>
                            <input id="cf-sub" type="text" placeholder="Project Collaboration" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cf-msg">Message</label>
                            <textarea id="cf-msg" rows="5" placeholder="Tell me about your project..." required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Message <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
