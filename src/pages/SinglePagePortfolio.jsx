import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, BookOpen, Code, GraduationCap, Award, Users, Calendar, ExternalLink, Github, Send, Filter, Download, Linkedin, ChevronUp, ChevronLeft, ChevronRight, X } from 'lucide-react';
import tuhinPortrait from '../assets/tuhin_portrait.jpg';
import Scene3D from '../components/3D/Scene3D';
import TerminalTyping from '../components/TerminalTyping';

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const bulletPoints = project.description.split('. ').filter(point => point.trim().length > 0);
  const shortDescription = bulletPoints.slice(0, 2);
  const remainingPoints = bulletPoints.slice(2);
  
  return (
    <div className="holo-card p-8 rounded-lg hover-lift">
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        {project.image && (
          <div className="md:w-1/3 flex-shrink-0">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg border border-gray-700"
            />
          </div>
        )}
        <div className={project.image ? "md:w-2/3" : "w-full"}>
          <h3 className="text-2xl font-bold mb-2 font-mono text-gray-200">{project.title}</h3>
          <p className="text-sm text-gray-400 mb-4 italic font-mono">Client: {project.client}</p>
          <ul className="space-y-2 mb-4">
            {shortDescription.map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="text-gray-500 mr-2 mt-1">•</span>
                <span className="text-gray-400">{point.trim()}{point.trim().endsWith('.') ? '' : '.'}</span>
              </li>
            ))}
            {isExpanded && remainingPoints.map((point, i) => (
              <li key={i + shortDescription.length} className="flex items-start">
                <span className="text-gray-500 mr-2 mt-1">•</span>
                <span className="text-gray-400">{point.trim()}{point.trim().endsWith('.') ? '' : '.'}</span>
              </li>
            ))}
          </ul>
          {remainingPoints.length > 0 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-gray-300 text-sm font-mono mb-4 underline"
            >
              {isExpanded ? 'Show Less' : 'Show More Details'}
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span key={i} className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded text-xs border border-gray-700 font-mono">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};


const SinglePagePortfolio = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showMoreEducation, setShowMoreEducation] = useState(false);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);
  const reviewImages = ['/review1.png', '/review2.png', '/review3.png'];
  
  // Smooth scroll function - prevent unwanted scrolling
  const scrollToSection = (id, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed headers if any
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to top function
  const scrollToTop = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Review modal functions
  const openReview = (index) => {
    setSelectedReviewIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeReview = () => {
    setSelectedReviewIndex(null);
    document.body.style.overflow = 'unset';
  };

  const goToPreviousReview = () => {
    setSelectedReviewIndex((prev) => (prev === 0 ? reviewImages.length - 1 : prev - 1));
  };

  const goToNextReview = () => {
    setSelectedReviewIndex((prev) => (prev === reviewImages.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for review modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedReviewIndex !== null) {
        if (e.key === 'Escape') {
          closeReview();
        } else if (e.key === 'ArrowLeft') {
          goToPreviousReview();
        } else if (e.key === 'ArrowRight') {
          goToNextReview();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedReviewIndex]);


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="hero" className="section-padding relative overflow-hidden min-h-screen flex items-center py-12 md:py-20">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-20 hidden md:block">
          <Scene3D variant="hero" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 font-mono text-white sci-fi-glow leading-tight">
                TUHIN CHOWDHURY
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 md:mb-6 font-mono leading-relaxed">
                BACKEND SOFTWARE ENGINEER | AI/ML RESEARCHER
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-4 md:mb-6 font-mono">
                3.5+ Years Experience
              </p>
              
              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-sm md:text-base">
                <p className="flex items-center gap-2">
                  <GraduationCap size={18} className="flex-shrink-0" />
                  <span className="break-words">B.Sc. in Computer Science & Engineering</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={18} className="flex-shrink-0" />
                  <a href="mailto:tuhin.sec@gmail.com" className="hover:underline break-all">
                    tuhin.sec@gmail.com
                  </a>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8">
                <a
                  href="https://linkedin.com/in/tuhin-chowdhury-4b002b172"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 hover:border-white/40 transition-all font-mono text-xs md:text-sm"
                >
                  <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
                  <span className="whitespace-nowrap">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/ArmoyTuhin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 hover:border-white/40 transition-all font-mono text-xs md:text-sm"
                >
                  <Github size={16} className="md:w-[18px] md:h-[18px]" />
                  <span className="whitespace-nowrap">GitHub</span>
                </a>
                <a
                  href="https://scholar.google.com/citations?hl=en&user=nXVEk7wAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 hover:border-white/40 transition-all font-mono text-xs md:text-sm"
                >
                  <BookOpen size={16} className="md:w-[18px] md:h-[18px]" />
                  <span className="whitespace-nowrap">Scholar</span>
                </a>
              </div>

              <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                I am a Software Engineer at <strong className="text-gray-300">Golden Harvest Infotech Limited</strong>. I am working as a <strong className="text-gray-300">Backend Software Engineer</strong> specially on <strong className="text-gray-300">Java Spring Boot framework</strong>, worked on <strong className="text-gray-300">microservices</strong> and <strong className="text-gray-300">clean coding</strong>. I have experienced in working on <strong className="text-gray-300">Backend System</strong>, <strong className="text-gray-300">Mobile application</strong> (Specially in <strong className="text-gray-300">Flutter, Kotlin</strong>) and <strong className="text-gray-300">Desktop Application</strong> (Using <strong className="text-gray-300">WPF</strong> and Its executables).
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Currently i am working on <strong className="text-gray-300">medical healthcare system</strong> and <strong className="text-gray-300">RAG based medical ai agent system</strong>.
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Beyond technology, I am a passionate <strong className="text-gray-300">street photographer</strong> who has participated in national and international exhibitions and won multiple awards. 
                View my work on <a href="https://www.flickr.com/photos/194583830@N07/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-200 underline">Flickr</a>.
              </p>

              <button
                onClick={() => setShowMoreDetails(!showMoreDetails)}
                className="text-gray-300 hover:text-gray-200 text-sm font-mono mb-4 underline flex items-center gap-2"
              >
                {showMoreDetails ? 'Show Less' : 'More Details'}
                <span className="text-gray-400">{showMoreDetails ? '−' : '+'}</span>
              </button>

              {showMoreDetails && (
                <div className="space-y-4 mb-4 md:mb-6">
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    I've always enjoyed problem solving, especially when things get tough. I try to approach challenges with a calm head, focus on the root cause, and work toward a solution instead of complaining. That mindset is one of the main reasons I chose software engineering.
                  </p>

                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    From a young age, I loved creating things. I spent time painting, writing, experimenting with circuits, building small tools, even making a multipurpose boat and a mouse-trap mechanism. In college, I learned to code because I wanted to build a game, and that slowly pulled me into computer science. My goal was simple: build something meaningful that could also support my career. I'm still learning every day, and I genuinely enjoy the process of debugging, figuring things out, and solving problems collaboratively.
                  </p>

                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    I try to bring my creativity from painting, photography, and songwriting into my technical work. Mixing ideas from different domains helps me build solutions that feel both practical and unique.
                  </p>

                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    One project shaped me more than anything else. I was assigned to a camera integration project with almost no online resources to rely on. I read through 1,500+ pages of camera documentation, explored the SDK in depth, and spent around 10 hours a day for 10 days until I finally cracked the problem. That experience taught me how to handle big, unfamiliar challenges with patience and focus. It also strengthened my passion for engineering and gave me one of the most satisfying moments of my career.
                  </p>

                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    Whether I stay in the same path or shift to something new in the future, I know I'll keep adapting, learning, and building. I love trying new things, and I enjoy the feeling of turning ideas into something real.
                  </p>
                </div>
              )}
            </motion.div>

            {/* RIGHT: Vertical Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 flex flex-row lg:flex-col gap-2 md:gap-3 flex-wrap lg:flex-nowrap"
            >
              {[
                { id: 'education', label: '[EDUCATION]', action: 'scroll' },
                { id: 'skills', label: '[SKILLS]', action: 'scroll' },
                { id: 'research', label: '[RESEARCH]', action: 'scroll' },
                { id: 'projects', label: '[PROJECTS]', action: 'scroll' },
                { id: 'activities', label: '[ACTIVITIES]', action: 'scroll' },
                { id: 'reviews', label: '[REVIEWS]', action: 'scroll' },
                { id: 'download-cv', label: '[DOWNLOAD CV]', action: 'download' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (item.action === 'download') {
                      const link = document.createElement('a');
                      link.href = `${import.meta.env.BASE_URL}Tuhin_Chowdhury_CV.pdf`;
                      link.download = 'Tuhin_Chowdhury_CV.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    } else {
                      scrollToSection(item.id, e);
                    }
                  }}
                  className="flex-1 lg:w-full px-2 sm:px-3 md:px-4 py-2 md:py-3 border-2 border-white/20 rounded-lg text-white hover:bg-white/10 hover:border-white/40 transition-all font-mono text-xs md:text-sm text-center neon-button whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding px-4 sm:px-6 lg:px-8 relative" style={{background: 'linear-gradient(to bottom, #000000, #0f0f23)'}}>
        <button
          onClick={scrollToTop}
          className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all z-10"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-white" />
        </button>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 font-mono text-center text-white sci-fi-glow">
            EDUCATION
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Bachelor's Degree */}
            <div className="holo-card p-4 sm:p-6 md:p-8 rounded-lg border-l-4 border-white/30">
              <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between items-start mb-4 md:mb-6">
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

            {/* See More Button */}
            <div className="text-center">
              <button
                onClick={() => setShowMoreEducation(!showMoreEducation)}
                className="text-gray-300 hover:text-white text-sm font-mono underline flex items-center gap-2 mx-auto"
              >
                {showMoreEducation ? 'Show Less' : 'See More'}
                <span className="text-gray-400">{showMoreEducation ? '−' : '+'}</span>
              </button>
            </div>

            {/* Additional Education (HSC, SSC, Primary) */}
            {showMoreEducation && (
              <div className="space-y-6">
                {/* HSC */}
                <div className="holo-card p-4 sm:p-6 md:p-8 rounded-lg border-l-4 border-white/30">
                  <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between items-start mb-4">
                    <div className="flex-1 min-w-0 mb-4 lg:mb-0">
                      <h3 className="text-xl font-bold mb-2 font-mono">
                        Higher Secondary Certificate (HSC)
                      </h3>
                      <p className="text-lg text-foreground mb-1">
                        Bangladesh Noubahini School and College
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Chittagong, Bangladesh
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Science Group
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        2014 – 2016
                      </span>
                      <div className="mt-2">
                        <span className="text-sm font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/30">
                          GPA: 5.00/5.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary School Certificate */}
                <div className="holo-card p-4 sm:p-6 md:p-8 rounded-lg border-l-4 border-white/30">
                  <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between items-start mb-4">
                    <div className="flex-1 min-w-0 mb-4 lg:mb-0">
                      <h3 className="text-xl font-bold mb-2 font-mono">
                        Secondary School Certificate (SSC)
                      </h3>
                      <p className="text-lg text-foreground mb-1">
                        Chittagong Government High School
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Chittagong, Bangladesh
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Science Group
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        2009 – 2014
                      </span>
                      <div className="mt-2">
                        <span className="text-sm font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/30">
                          GPA: 5.00/5.00 (Golden A+)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary School */}
                <div className="holo-card p-4 sm:p-6 md:p-8 rounded-lg border-l-4 border-white/30">
                  <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between items-start mb-4">
                    <div className="flex-1 min-w-0 mb-4 lg:mb-0">
                      <h3 className="text-xl font-bold mb-2 font-mono">
                        Primary Education
                      </h3>
                      <p className="text-lg text-foreground mb-1">
                        Saint Mary's School
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Chittagong, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding relative">
        <button
          onClick={scrollToTop}
          className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all z-10"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-white" />
        </button>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-mono text-center text-gray-300 sci-fi-glow">
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
                <h3 className="text-lg font-bold mb-3 font-mono text-white">{skillSet.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.skills.map((skill, i) => (
                    <span key={i} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs border border-gray-700 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="section-padding relative">
        <button
          onClick={scrollToTop}
          className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all z-10"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-white" />
        </button>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-mono text-center text-gray-300 sci-fi-glow">
            RESEARCH & PUBLICATIONS
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="holo-card p-8 rounded-lg border-l-4 border-gray-600">
            {/* Publication 1 - Tribal Clothing */}
              <div className="mb-10 pb-10 border-b border-white/10">
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
              
                <h3 className="text-xl font-bold mb-4 font-mono text-white">
                An Automatic System for Identifying and Categorizing Tribal Clothing Based on Convolutional Neural Networks
              </h3>
              
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => window.open(`${import.meta.env.BASE_URL}Tribal_Clothing_Research_Paper.pdf`, '_blank')}
                    className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-medium font-mono hover:bg-gray-200 transition-all text-sm"
                    style={{boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'}}
                  >
                    <ExternalLink size={16} />
                    View Paper
                  </button>
                  <button
                    onClick={() => window.open('https://ieeexplore.ieee.org/document/10060409', '_blank')}
                    className="flex items-center gap-2 border-2 border-white/30 text-white px-5 py-2 rounded-lg font-medium font-mono neon-button text-sm"
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
              
                <h3 className="text-xl font-bold mb-4 font-mono text-white">
                BLDAR: A Blending Ensemble Learning Approach for Primary Energy Consumption Analysis
              </h3>
              
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => window.open('https://doi.org/10.1007/978-3-031-94862-6_8', '_blank')}
                    className="flex items-center gap-2 border-2 border-white/30 text-white px-5 py-2 rounded-lg font-medium font-mono neon-button text-sm"
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
      <section id="projects" className="section-padding bg-secondary relative">
        <button
          onClick={scrollToTop}
          className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all z-10"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-white" />
        </button>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-mono text-center text-gray-300 sci-fi-glow">
            PROFESSIONAL PROJECTS
          </h2>
          
          <div className="space-y-12">
            {[
              {
                title: "Hospital Management System",
                client: "Houston, USA",
                description: "Built Spring Boot microservices to manage patient information, bed management, admissions, and cross-department workflows across OPD, IPD, IAM, and EHR. Implemented secure communication using JWT, timestamp validation, IPC-based internal service calls, and Betterstack for centralized logging. Optimized performance with PostgreSQL through custom SQL, indexing, and optimized joins, along with asynchronous processing, scheduled jobs, and reliable transactional operations. Developed N8N automation workflows, OCR-based patient registration, real-time bed allocation, nurse shift tracking, and duplicate detection, significantly improving system accuracy and operational efficiency.",
                tech: ["Spring Boot 3", "PostgreSQL", "WebClient", "Spring Security", "ChromaDB", "N8N", "AWS S3", "Docker", "JUnit"],
                image: "/hospital.png"
              },
              {
                title: "Supply Chain Management Software",
                client: "Garment Industry, Dhaka",
                description: "Designed and implemented the backend for a Garment Supply Chain Management software for 1500+ users, developing 10+ microservices to manage the entire lifecycle from order import via Excel to vendor, warehouse, production updates, and shipment, including interactive templates for every phase of garment production. The system reduced manual work by over 50% and included an automated alert system. Maintained APIs, service registry, and gateway, handled multiple databases, integrated Feign clients for inter-service communication, and used Zipkin for distributed tracing, ensuring robust, scalable, and observable operations.",
                tech: ["Spring Boot 3", "PostgreSQL", "JasperSoft", "Sendgrid", "Docker", "Zipkin"]
              },
              {
                title: "Satellite Frequency Renting and Auto Billing System",
                client: "Bangladesh Satellite Corporation, Dhaka",
                description: "Built a Spring Boot billing management system for multiple clients to automate 100% of invoice, chalan, and payment notifications via SMTP email, handling 15+ JasperReports with multi-report and graph-based analytics, deployed using Docker. Calculated satellite frequency usage on a pay-per-use model, integrating dynamic reporting and analytics, which eliminated manual reporting and reduced operational effort by 50% while ensuring reliable, scalable billing workflows.",
                tech: ["Java", "Spring Boot", "JasperReport", "Sendgrid", "PostgreSQL"],
                image: "/bscl.png"
              },
              {
                title: "Church Census Records Archiving Project",
                client: "US-based Company (Family Ancestry Research)",
                description: "Engineered the full hardware ecosystem for a high-throughput DSLR imaging system using C#, .NET 8, and Nikon SDK, capturing 1,000+ images per hour with real-time spatial analysis and line-segment validation. Built a portable, offline-ready imaging solution worth 0.5 million BDT for R&D, serving a US-based company focused on family ancestry research. Led the backend team of the desktop application, integrating real-time image processing workflows while preserving visual aesthetics for millions of pages of historical books and documents. Developed a bulk image sharing pipeline maintaining image quality and producing data-entry-ready outputs, enabling faster digitization and collaboration. Solved challenges in real-time customized image capturing and storage management, ensuring efficient image handling and minimal post-processing.",
                tech: ["C#", ".NET 8", "Nikon SDK", "WPF", "Image Processing"],
                image: "/cameraproject.png"
              }
            ].map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities Section */}
      <section id="activities" className="section-padding bg-secondary relative">
        <button
          onClick={scrollToTop}
          className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all z-10"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-white" />
        </button>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-mono text-center text-gray-300 sci-fi-glow">
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
                <h3 className="text-lg font-bold mb-1 font-mono text-white">{activity.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{activity.organization}</p>
                <p className="text-xs text-gray-500 mb-3 font-mono">{activity.period}</p>
                <p className="text-sm text-gray-400">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section-padding bg-secondary relative">
        <button
          onClick={scrollToTop}
          className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all z-10"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-white" />
        </button>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 font-mono text-center text-gray-300 sci-fi-glow">
            REVIEWS & RECOMMENDATIONS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {reviewImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="holo-card rounded-lg overflow-hidden hover-lift cursor-pointer"
                onClick={() => openReview(index)}
              >
                <div className="p-4 bg-gray-900/50">
                  <img 
                    src={image} 
                    alt={`Review ${index + 1}`}
                    className="w-full h-auto rounded-lg border border-gray-700 object-contain max-h-[500px] mx-auto"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-400 text-sm font-mono">Click to view full size</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://linkedin.com/in/tuhin-chowdhury-4b002b172"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-mono underline"
            >
              <Linkedin size={18} />
              <span>To see more reviews, visit my LinkedIn profile</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Review Modal */}
        {selectedReviewIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={closeReview}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeReview}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 hover:bg-black border-2 border-gray-600 transition-all"
                aria-label="Close"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Previous Button */}
              <button
                onClick={goToPreviousReview}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/80 hover:bg-black border-2 border-gray-600 transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft size={28} className="text-white" />
              </button>

              {/* Next Button */}
              <button
                onClick={goToNextReview}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/80 hover:bg-black border-2 border-gray-600 transition-all"
                aria-label="Next review"
              >
                <ChevronRight size={28} className="text-white" />
              </button>

              {/* Review Image */}
              <motion.img
                key={selectedReviewIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={reviewImages[selectedReviewIndex]}
                alt={`Review ${selectedReviewIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg border border-gray-700"
              />

              {/* Review Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 px-4 py-2 rounded-full border border-gray-600">
                <p className="text-white font-mono text-sm">
                  {selectedReviewIndex + 1} / {reviewImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>


      {/* Download CV Section */}
      <section id="download-cv" className="section-padding relative">
        <button
          onClick={scrollToTop}
          className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all z-10"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-white" />
        </button>
        <div className="max-w-6xl mx-auto flex justify-center">
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = `${import.meta.env.BASE_URL}Tuhin_Chowdhury_CV.pdf`;
              link.download = 'Tuhin_Chowdhury_CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-medium font-mono hover:bg-gray-200 transition-all text-lg"
          >
            <Download size={20} />
            Download CV
          </button>
        </div>
      </section>
    </div>
  );
};

export default SinglePagePortfolio;
