import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  FileText, 
  BookOpen, 
  Mail,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  Download,
  Brain,
  Database,
  LineChart,
  Terminal,
  BarChart,
  PieChart,
  Table
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add delay to glow effect for smooth following
      setTimeout(() => {
        setGlowPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    technical: ['Data Analytics', 'Python', 'SQL', 'Web Scraping', 'Cognos', 'Excel', 'Power BI', 'Tableau'],
    tools: ['Pandas', 'NumPy', 'Matplotlib', 'Scrapy'],
    soft: ['Leadership', 'Communication', 'Problem-Solving', 'Content Creation']
  };

  const projects = [
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for business metrics analysis using Cognos Analytics and Power BI.',
      tech: ['Cognos', 'Power BI', 'SQL'],
      icon: <BarChart className="w-8 h-8 text-violet-400" />
    },
    {
      title: 'Market Data Analysis',
      description: 'Python-based analysis pipeline for market trends and consumer behavior patterns.',
      tech: ['Python', 'Pandas', 'Matplotlib'],
      icon: <PieChart className="w-8 h-8 text-violet-400" />
    },
    {
      title: 'Web Scraping Pipeline',
      description: 'Automated data collection system using Python Scrapy for market research.',
      tech: ['Python', 'Scrapy', 'SQL'],
      icon: <Table className="w-8 h-8 text-violet-400" />
    }
  ];

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1IH1cosD9lU8Q6x0H7_QbIUSPbzZHN6vc/view?usp=drivesdk', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Interactive background effect */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(600px at ${glowPosition.x}px ${glowPosition.y}px, rgba(124, 58, 237, 0.15), transparent 80%),
            radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.07), transparent 80%)
          `,
          transition: 'background 0.3s ease'
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-semibold text-violet-400 flex items-center gap-2">
              Shrushti Raut
            </span>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#blog" className="nav-link">Blog</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Video Background */}
  <div className="absolute inset-0 z-0">
    <iframe
      className="w-full h-full object-cover"
      src="https://www.youtube.com/embed/sQ22pm-xvrE?autoplay=1&mute=1&controls=0&loop=1&playlist=sQ22pm-xvrE&modestbranding=1&showinfo=0"
      title="About Me Video"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm z-10" />
  </div>

  {/* Hero Content */}
  <div className="relative z-20 text-center max-w-3xl px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-violet-400 mb-6 animate-fade-in glow-text">
      AI-driven.<br />
      Data-powered.<br />
      Future-ready.
    </h1>
    <p className="text-lg text-slate-300 mb-8 animate-fade-in">
      Hey, I'm Shrushti! A sophomore specializing in AI & ML with a passion for 
      data science, data-driven decision-making, and big data engineering.
    </p>
    <a href="#contact" className="btn-primary group inline-flex items-center justify-center">
      Let's Connect 
      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
</section>

<section id="about" className="section-container">
  <h2 className="text-3xl font-bold mb-6 glow-text">About Me</h2>
  <div className="grid md:grid-cols-2 gap-8 items-start">
    {/* Text Section */}
    <div className="glass-card p-8 rounded-xl space-y-6 flex-1">
      <p className="text-slate-300">
        Currently pursuing BTech in Electronics & Communication (AI & ML) at MIT-WPU, Pune. 
        I'm passionate about data science, big data, and transforming raw data into meaningful insights 
        that drive business decisions.
      </p>
      <p className="text-slate-300">
        Beyond tech, I'm an enthusiastic singer and writer. I'm deeply interested in entrepreneurship 
        and management studies, with a future goal of pursuing a Master's in data & business integration 
        and launching my own venture.
      </p>

      {/* Elegant Quote + Signature */}
      <div className="text-center mt-6">
        <p className="text-violet-300 italic font-semibold text-lg md:text-xl leading-relaxed font-serif glow-text">
          “Turning data into decisions,<br />
          dreams into ventures.”
        </p>
        <p className="text-slate-400 mt-2 text-sm md:text-base tracking-wide">– Shrushti</p>
      </div>
    </div>

    {/* Image Section (refined) */}
    <div className="flex justify-center items-center mt-6 md:mt-0">
      <img
        src="/sushi.jpg"
        alt="Shrushti"
        className="rounded-2xl shadow-lg w-[300px] object-cover object-top transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</section>



      {/* Skills Section */}
      <section id="skills" className="section-container">
        <h2 className="text-3xl font-bold mb-12 glow-text">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-violet-400 flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.technical.map((skill) => (
                <span key={skill} className="skill-tag bg-violet-900/30 text-violet-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-violet-400 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Tools & Libraries
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-tag bg-violet-900/30 text-violet-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-violet-400 flex items-center gap-2">
              <User className="w-5 h-5" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill) => (
                <span key={skill} className="skill-tag bg-violet-900/30 text-violet-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <h2 className="text-3xl font-bold mb-12 glow-text">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="card group">
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-violet-400">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-violet-900/30 text-violet-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="section-container text-center">
        <h2 className="text-3xl font-bold mb-6 glow-text">Resume</h2>
        <p className="text-slate-300 mb-8">Download my resume to learn more about my experience and qualifications.</p>
        <button 
          onClick={handleDownload}
          className="btn-primary group"
        >
          Download Resume 
          <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-container">
        <h2 className="text-3xl font-bold mb-6 glow-text">Blog</h2>
        <div className="card text-center p-12">
          <BookOpen className="w-12 h-12 text-violet-400 mx-auto mb-4" />
          <p className="text-slate-300">
            Coming soon! I'll be sharing my thoughts and insights about data science, AI, and technology.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <h2 className="text-3xl font-bold mb-12 glow-text">Get in Touch</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://github.com/shrushti425" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors p-3 hover:bg-violet-400/10 rounded-full">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/shrushti-raut4" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors p-3 hover:bg-violet-400/10 rounded-full">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://x.com/codewithsushi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-colors p-3 hover:bg-violet-400/10 rounded-full">
            <Twitter className="w-8 h-8" />
          </a>
          <a href="mailto:smraut3434@gmail.com" className="text-slate-400 hover:text-violet-400 transition-colors p-3 hover:bg-violet-400/10 rounded-full">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 border-t border-slate-800">
        <p>© 2024 Shrushti Raut. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;