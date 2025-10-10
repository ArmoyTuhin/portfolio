import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, BookOpen, Code, GraduationCap, Award, Users, Calendar, ExternalLink, Github, Send, Filter, Download, Linkedin } from 'lucide-react';
import tuhinPortrait from '../assets/tuhin_portrait.jpg';
import Scene3D from '../components/3D/Scene3D';
import TerminalTyping from '../components/TerminalTyping';

const SinglePagePortfolio = () => {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="hero" className="section-padding relative overflow-hidden min-h-screen flex items-center">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-20">
          <Scene3D variant="hero" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: Terminal */}
            <div className="lg:col-span-4">
              <TerminalTyping />
              </div>

            {/* MIDDLE: Name and Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 font-mono text-cyan-400 sci-fi-glow">
                TUHIN CHOWDHURY
              </h1>
              <p className="text-xl text-purple-400 mb-6 font-mono">
                BACKEND SOFTWARE ENGINEER | AI/ML RESEARCHER
              </p>
              <p className="text-lg text-gray-400 mb-6 font-mono">
                3.5+ Years Experience
              </p>
              
              <div className="space-y-3 mb-8 text-base">
                <p className="flex items-center gap-2">
                  <GraduationCap size={20} />
                  <span>B.Sc. in Computer Science & Engineering</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={20} />
                  <a href="mailto:tuhin.sec@gmail.com" className="hover:underline">
                    tuhin.sec@gmail.com
                  </a>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://linkedin.com/in/tuhin-chowdhury-4b002b172"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-cyan-500/50 rounded-lg text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all font-mono text-sm"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ArmoyTuhin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-cyan-500/50 rounded-lg text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all font-mono text-sm"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="https://scholar.google.com/citations?hl=en&user=nXVEk7wAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-cyan-500/50 rounded-lg text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all font-mono text-sm"
                >
                  <BookOpen size={18} />
                  Google Scholar
                </a>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a Software Engineer at <strong>Golden Harvest Infotech Limited</strong>. Throughout my career, I have experience in working with <strong>Flutter</strong>, 
                <strong>Native Android</strong>, <strong>Java Backend</strong>, and <strong>Desktop applications</strong>, with a focus on <strong>Java Backend Engineering</strong>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently my work focused on <strong>AI/ML applications</strong>, especially <strong>agentic AI and agent orchestration</strong>, <strong>medical healthcare system and data security</strong>, 
                and <strong>scalable backend systems</strong>. My research interests include <strong>Healthcare AI</strong>, <strong>healthcare data security</strong>, 
                <strong>software engineering</strong>, and <strong>software security</strong>. I am currently exploring <strong>federated learning</strong>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Beyond technology, I am a passionate <strong>street photographer</strong> who has participated in national and international exhibitions and won multiple awards. 
                View my work on <a href="https://www.flickr.com/photos/194583830@N07/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Flickr</a>.
              </p>
            </motion.div>

            {/* RIGHT: Vertical Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 flex flex-col gap-3"
            >
              {[
                { id: 'education', label: '[EDUCATION]', action: 'scroll' },
                { id: 'research', label: '[RESEARCH]', action: 'scroll' },
                { id: 'projects', label: '[PROJECTS]', action: 'scroll' },
                { id: 'skills', label: '[SKILLS]', action: 'scroll' },
                { id: 'activities', label: '[Curricular ACTIVITIES]', action: 'scroll' },
                { id: 'cv', label: '[Download CV]', action: 'download' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.action === 'download') {
                      const link = document.createElement('a');
                      link.href = '/Tuhin_Chowdhury_CV.pdf';
                      link.download = 'Tuhin_Chowdhury_CV.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className="w-full px-4 py-3 border-2 border-cyan-500/50 rounded-lg text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all font-mono text-sm text-center neon-button"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding" style={{background: 'linear-gradient(to bottom, #000000, #0f0f23)'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-mono text-center text-cyan-400 sci-fi-glow">
            EDUCATION
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="holo-card p-8 rounded-lg border-l-4 border-cyan-500">
              <div className="flex flex-wrap justify-between items-start mb-6">
                <div className="flex-1 min-w-0 mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold mb-2 font-mono">
                    Bachelor of Science in Computer Science & Engineering
                  </h3>
                  <p className="text-lg text-foreground mb-1">
                    School of Applied Science and Technology, Shahjalal University of Science & Technology
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sylhet Engineering College, Sylhet, Bangladesh
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    09/2017 – 04/2022
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2 font-mono">Undergraduate Thesis</h4>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "An Automatic System for Identifying and Categorizing Tribal Clothing Based on Convolutional Neural Networks"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2 font-mono">Core Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Machine Learning",
                        "Digital Image Processing",
                        "Artificial Intelligence",
                        "Data Structures & Algorithms",
                        "Database Management Systems",
                        "Software Engineering",
                        "Computer Networks",
                        "Operating Systems"
                      ].map((course, i) => (
                        <span
                          key={i}
                          className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-mono"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-mono text-center text-cyan-400 sci-fi-glow">
            RESEARCH & PUBLICATIONS
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="holo-card p-8 rounded-lg border-l-4 border-cyan-500">
            {/* Publication 1 - Tribal Clothing */}
              <div className="mb-10 pb-10 border-b border-cyan-500/30">
              <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                <div className="flex gap-3">
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    IEEE Conference Paper
                  </span>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    Published
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">2022</span>
              </div>
              
                <h3 className="text-xl font-bold mb-4 font-mono text-cyan-400">
                An Automatic System for Identifying and Categorizing Tribal Clothing Based on Convolutional Neural Networks
              </h3>
              
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => window.open('/Tribal_Clothing_Research_Paper.pdf', '_blank')}
                    className="flex items-center gap-2 bg-cyan-500 text-black px-5 py-2 rounded-lg font-medium font-mono hover:bg-cyan-400 transition-all text-sm"
                    style={{boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'}}
                  >
                    <ExternalLink size={16} />
                    View Paper
                  </button>
                  <button
                    onClick={() => window.open('https://ieeexplore.ieee.org/document/10060409', '_blank')}
                    className="flex items-center gap-2 border-2 border-cyan-500 text-cyan-400 px-5 py-2 rounded-lg font-medium font-mono neon-button text-sm"
                  >
                    <ExternalLink size={16} />
                    Publication Link
                  </button>
              </div>
            </div>

            {/* Publication 2 - Energy Forecasting */}
              <div>
              <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                <div className="flex gap-3">
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    Springer Book Chapter
                  </span>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    Published
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">2025</span>
              </div>
              
                <h3 className="text-xl font-bold mb-4 font-mono text-cyan-400">
                BLDAR: A Blending Ensemble Learning Approach for Primary Energy Consumption Analysis
              </h3>
              
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => window.open('https://doi.org/10.1007/978-3-031-94862-6_8', '_blank')}
                    className="flex items-center gap-2 border-2 border-cyan-500 text-cyan-400 px-5 py-2 rounded-lg font-medium font-mono neon-button text-sm"
                  >
                    <ExternalLink size={16} />
                    Publication Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding" style={{background: 'linear-gradient(to bottom, #0f0f23, #000000)'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-mono text-center text-cyan-400 sci-fi-glow">
            PROFESSIONAL PROJECTS
          </h2>
          
          <div className="space-y-12">
            {[
              {
                title: "AI-Driven Hospital Management System",
                client: "MHM, Houston, TX",
                description: "RAG-based multi-agent system for medical data processing, reducing scheduling conflicts by 40%.",
                tech: ["Python", "OpenAI 4", "ChromaDB", "N8N", "AWS S3", "PostgreSQL", "Docker"]
              },
              {
                title: "Church Census Records Archiving Project",
                client: "Family Search, Utah",
                description: "High-throughput DSLR imaging system capturing 1000+ images/hour with real-time validation.",
                tech: ["C#", ".NET 8", "WPF", "GraphQL", "SQLite", "Python", "Nikon SDK"]
              },
              {
                title: "Invoice Data Extraction System",
                client: "Internal Project",
                description: "High-accuracy OCR system with Llama 3.1 for context-aware data extraction.",
                tech: ["Python", "PaddleOCR", "LlamaIndex", "OpenAI APIs", "PyTorch"]
              },
              {
                title: "Satellite Billing System",
                client: "Bangladesh Satellite Corporation",
                description: "Automated billing system reducing manual reporting efforts by 50%.",
                tech: ["Java", "Spring Boot", "JasperSoft", "SendGrid", "PostgreSQL"]
              }
            ].map((project, index) => (
              <div
                key={index}
                className="holo-card p-8 rounded-lg hover-lift"
              >
                <h3 className="text-2xl font-bold mb-2 font-mono text-cyan-400">{project.title}</h3>
                <p className="text-sm text-purple-400 mb-4 italic font-mono">Client: {project.client}</p>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-black/50 text-cyan-400 px-3 py-1 rounded text-xs border border-cyan-500/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-mono text-center text-cyan-400 sci-fi-glow">
            TECHNICAL SKILLS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Programming Languages",
                skills: ["Python", "Java", "C#", "Dart", "C++", "C"]
              },
              {
                category: "AI/ML & Data Science",
                skills: ["PyTorch", "TensorFlow", "OpenAI APIs", "Spring AI", "YOLOv5/v6/v7", "PaddleOCR", "Scikit-Learn"]
              },
              {
                category: "Backend Development",
                skills: ["Spring Boot", ".NET", "WebFlux", "Flutter", "RESTful APIs", "GraphQL", "JasperReport", "SMTP"]
              },
              {
                category: "Databases",
                skills: ["PostgreSQL", "MongoDB", "SQLite", "ChromaDB", "MySQL"]
              },
              {
                category: "Automation & Workflow",
                skills: ["N8N", "AI Agent", "AI Chatbot", "Workflow Automation", "Process Automation", "API Integration"]
              },
              {
                category: "Cloud & DevOps",
                skills: ["AWS S3", "Docker", "Git"]
              }
            ].map((skillSet, index) => (
              <div key={index} className="holo-card p-6 rounded-lg hover-lift">
                <h3 className="text-lg font-bold mb-3 font-mono text-cyan-400">{skillSet.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.skills.map((skill, i) => (
                    <span key={i} className="bg-black/50 text-cyan-400 px-2 py-1 rounded text-xs border border-cyan-500/30 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities Section */}
      <section id="activities" className="section-padding" style={{background: 'linear-gradient(to bottom, #0f0f23, #000000)'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-mono text-center text-cyan-400 sci-fi-glow">
            CO-CURRICULAR ACTIVITIES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "General Secretary",
                organization: "Computer Society of Bangladesh, SUST",
                period: "2021 – 2022",
                description: "Led and organized programming contests, technical workshops, and hackathons for 500+ students"
              },
              {
                title: "Campus Director",
                organization: "Bohubrihi EdTech",
                period: "2021 – 2022",
                description: "Coordinated programming workshops and bootcamps, mentored students in web development"
              },
              {
                title: "Vice President & Instructor",
                organization: "SECPA Photography Club, SUST",
                period: "2020 – 2022",
                description: "Taught photography fundamentals, image aesthetics, and composition to 100+ students"
              },
              {
                title: "Street Photography",
                organization: "International & National Exhibitions",
                period: "2019 – Present",
                description: "Participated in multiple exhibitions, won awards, featured in photography communities"
              }
            ].map((activity, index) => (
              <div key={index} className="holo-card p-6 rounded-lg hover-lift">
                <h3 className="text-lg font-bold mb-1 font-mono text-cyan-400">{activity.title}</h3>
                <p className="text-sm text-purple-400 mb-2">{activity.organization}</p>
                <p className="text-xs text-gray-500 mb-3 font-mono">{activity.period}</p>
                <p className="text-sm text-gray-400">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-mono text-center text-cyan-400 sci-fi-glow">
            TEACHING & LEADERSHIP
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                role: "Java & Data Structures Instructor",
                org: "Private Mentorship",
                period: "2022 – Present",
                desc: "Mentored 10+ students in programming"
              },
              {
                role: "General Secretary",
                org: "Computer Society, SUST",
                period: "2021 – 2022",
                desc: "Organized programming contests and technical events"
              },
              {
                role: "Campus Director",
                org: "Bohubrihi EdTech",
                period: "2021 – 2022",
                desc: "Organized programming workshops"
              },
              {
                role: "VP & Instructor",
                org: "SECPA Photography Club",
                period: "2020 – 2022",
                desc: "Taught image aesthetics and composition"
              }
            ].map((item, index) => (
              <div key={index} className="holo-card p-6 rounded-lg hover-lift">
                <h3 className="text-lg font-bold mb-1 font-mono text-cyan-400">{item.role}</h3>
                <p className="text-sm text-purple-400 mb-2">{item.org}</p>
                <p className="text-xs text-gray-500 mb-3 font-mono">{item.period}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding" style={{background: 'linear-gradient(to bottom, #000000, #0f0f23)'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-mono text-center text-cyan-400 sci-fi-glow">
            CONTACT INTERFACE
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-mono text-cyan-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 holo-card rounded-lg">
                  <Mail className="w-6 h-6 mt-1 text-cyan-400" />
                  <div>
                    <h4 className="font-semibold mb-1 text-cyan-400 font-mono">Email</h4>
                    <a href="mailto:tuhin.sec@gmail.com" className="text-gray-400 hover:text-cyan-300 transition-colors">
                      tuhin.sec@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 holo-card rounded-lg">
                  <MapPin className="w-6 h-6 mt-1 text-cyan-400" />
                  <div>
                    <h4 className="font-semibold mb-1 text-cyan-400 font-mono">Location</h4>
                    <p className="text-gray-400">Chittagong, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 font-mono text-cyan-400">Research Collaboration</h3>
              <p className="text-gray-400 mb-6">
                I am actively seeking opportunities for research collaboration in:
              </p>
              <ul className="space-y-2">
                {[
                  "Medical Healthcare Data Security",
                  "Machine Learning & Deep Learning",
                  "Computer Vision Applications",
                  "Healthcare AI Systems",
                  "Software Engineering",
                  "Software Security"
                ].map((area, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-400">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePagePortfolio;
