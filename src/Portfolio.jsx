import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowDown } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "ML-Based Network Intrusion Detection System (NIDS)",
      description: "Developed a machine learning model to detect malicious network traffic in real-time with 95% accuracy.",
      tech: ["Python", "TensorFlow", "Flask", "Scikit-learn", "Wireshark"],
      impact: "95% detection rate | Real-time threat detection",
      github: "https://github.com/DaniSam-STU",
      date: "Apr 2026 — May 2026"
    },
    {
      title: "Secure Flask Web Application",
      description: "Built a production-ready web application with enterprise-level security implementations including RBAC, CSRF protection, and secure authentication.",
      tech: ["Flask", "Python", "RBAC", "Authentication", "Security"],
      impact: "Production-ready | Enterprise security standards",
      github: "https://github.com/DaniSam-STU",
      date: "Apr 2026 — May 2026"
    },
    {
      title: "Android Mobile Device Forensic Investigation",
      description: "Conducted comprehensive forensic analysis of Android devices to recover and analyze digital artifacts for investigation purposes.",
      tech: ["Android Forensics", "Artifact Analysis", "OSINT"],
      impact: "Data recovery | Evidence documentation",
      github: "https://github.com/DaniSam-STU",
      date: "Mar 2026 — Apr 2026"
    },
    {
      title: "Fake Social Media Account Investigation (OSINT)",
      description: "Performed Open Source Intelligence investigation to identify and document fake social media profiles using advanced techniques.",
      tech: ["OSINT", "Social Intelligence", "Investigation", "Analysis"],
      impact: "Account identification | Pattern analysis",
      github: "https://github.com/DaniSam-STU",
      date: "Jan 2026 — Feb 2026"
    }
  ];

  const experience = [
    {
      role: "Cyber Security Intern",
      company: "Codec Technologies Pvt. Ltd.",
      period: "Apr 2026 — May 2026",
      achievements: [
        "Developed ML-Based Network Intrusion Detection System using Python",
        "Achieved 95% accuracy in malicious traffic detection",
        "Built Flask web application for real-time monitoring"
      ]
    },
    {
      role: "Cyber Security Intern",
      company: "CodeAlpha",
      period: "Mar 2026 — Apr 2026",
      achievements: [
        "Built network packet sniffer using Python and Scapy",
        "Researched advanced phishing attack techniques",
        "Documented security findings in comprehensive reports"
      ]
    },
    {
      role: "Internship Trainee",
      company: "Oasis Infobyte",
      period: "Jan 2026 — Feb 2026",
      achievements: [
        "Performed network scanning using Nmap on corporate networks",
        "Configured Linux firewalls (UFW) for security hardening",
        "⭐ Awarded: Oasis Star Performer"
      ]
    }
  ];

  const skills = {
    "Network & Security": ["Nmap", "Wireshark", "Network Security", "Vulnerability Assessment", "SQL Injection Testing", "Penetration Testing", "Threat Analysis"],
    "Digital Forensics & OSINT": ["Android Forensics", "Digital Forensics", "OSINT", "Artifact Analysis"],
    "Programming": ["Python", "Flask", "Scikit-learn", "TensorFlow", "Secure Development", "RBAC", "CSRF Protection"],
    "Tools & Platforms": ["Kali Linux", "Ubuntu", "Linux Firewalls (UFW)", "Git", "Scapy", "B-crypt", "Cryptography"]
  };

  const certifications = [
    "Hands-on SOC Analyst Course for Beginners",
    "CodeAlpha Cybersecurity Internship Certificate",
    "Codec Technologies Internship Certificate",
    "Oasis Infobyte Star Performer Award"
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white">
            DEEPANSHU
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-slate-800">
            <div className="px-6 py-4 space-y-4">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl text-center space-y-6 animate-fadeIn">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white">
              DEEPANSHU SEMWAL
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wide">
              Cybersecurity Analyst | Digital Forensics Specialist
            </p>
          </div>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Building secure systems through penetration testing, threat analysis, and ML-based intrusion detection. 
            Passionate about finding vulnerabilities before attackers do.
          </p>

          <div className="flex gap-4 justify-center pt-8">
            <a href="https://github.com/DaniSam-STU" target="_blank" rel="noopener noreferrer" 
               className="px-8 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
              View My Work
            </a>
            <button onClick={() => scrollToSection('contact')}
               className="px-8 py-3 border border-slate-400 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
              Get In Touch
            </button>
          </div>

          <div className="pt-12 animate-bounce">
            <ArrowDown size={24} className="mx-auto text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <div className="w-12 h-1 bg-blue-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm a cybersecurity student with hands-on experience in network security, digital forensics, OSINT, and secure web application development.
              </p>
              <p>
                Proficient in penetration testing, threat analysis, vulnerability assessment, and ML-based intrusion detection. I'm driven to understand how systems fail and how to prevent those failures.
              </p>
              <p>
                Currently pursuing B.Tech in Computer Science (Cybersecurity) at SRM University Sonepat, with practical experience from three cybersecurity internships.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>✓ 3 Cybersecurity Internships</li>
                  <li>✓ 4+ Security Projects</li>
                  <li>✓ Multiple Certifications</li>
                  <li>✓ ML & Network Security Expertise</li>
                  <li>✓ Oasis Star Performer Award</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Projects</h2>
            <div className="w-12 h-1 bg-blue-500"></div>
          </div>

          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-900 rounded-lg p-8 border border-slate-800 hover:border-blue-500 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-2">{project.date}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-slate-800 text-blue-300 px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-400 font-semibold pt-2">📊 {project.impact}</p>

                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold pt-2">
                    View on GitHub <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Experience</h2>
            <div className="w-12 h-1 bg-blue-500"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-blue-500 pl-8 space-y-3">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400 font-semibold">{exp.company}</p>
                  <p className="text-slate-400 text-sm">{exp.period}</p>
                </div>
                <ul className="space-y-2 text-slate-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-400 font-bold">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
            <div className="w-12 h-1 bg-blue-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <div key={idx} className="bg-slate-900 rounded-lg p-6 border border-slate-800">
                <h3 className="text-lg font-bold text-blue-400 mb-4">🔐 {category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span key={i} className="text-sm bg-slate-800 text-slate-200 px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Certifications & Awards</h2>
            <div className="w-12 h-1 bg-blue-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-slate-800 rounded-lg p-6 border-l-2 border-blue-500 flex items-center gap-4">
                <span className="text-3xl">✓</span>
                <span className="text-slate-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Education</h2>
            <div className="w-12 h-1 bg-blue-500"></div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 border border-slate-700">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">B.Tech — Computer Science (Cybersecurity)</h3>
              <p className="text-blue-400 font-semibold">SRM University, Sonepat</p>
              <p className="text-slate-400">2024 — 2028</p>
              <p className="text-slate-300">Focused on Network Security, Digital Forensics, and Ethical Hacking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Let's Connect</h2>
            <div className="w-12 h-1 bg-blue-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                Interested in discussing cybersecurity, projects, or opportunities? I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:deepanshusemwal99@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                  <span>deepanshusemwal99@gmail.com</span>
                </a>
                <a href="tel:+919971298384" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                  <span>📱</span>
                  <span>+91 99712 98384</span>
                </a>
                <p className="flex items-center gap-3 text-slate-300">
                  <span>📍</span>
                  <span>Delhi 110084, India</span>
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 flex-wrap">
                <a href="https://github.com/DaniSam-STU" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 bg-slate-800 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors font-semibold">
                  <Github size={20} />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/deepanshu-s-437566373" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 bg-slate-800 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors font-semibold">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>

              <p className="text-sm text-slate-400">
                Let's build something secure together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2026 Deepanshu Semwal. All rights reserved. | Built with React & Tailwind CSS</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        scrollbar-width: thin;
        scrollbar-color: rgb(55, 65, 81) rgb(15, 23, 42);
      `}</style>
    </div>
  );
}
