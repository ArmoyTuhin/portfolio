import React, { useState } from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Automated DSLR Image Capture",
      description: "Advanced image capture system using .NET 8 and Nikon SDK with real-time processing capabilities.",
      achievements: [
        "1000+ images/hr processing capacity",
        "Real-time resolution checks",
        "WPF GUI for user interaction",
        "Automated workflow optimization"
      ],
      challenges: [
        "Integrating Nikon SDK with .NET 8",
        "Ensuring real-time performance",
        "User-friendly GUI design"
      ],
      technologies: [".NET 8", "Nikon SDK", "WPF", "Real-time Processing"],
      category: "Enterprise Software"
    },
    {
      title: "Invoice Data Extraction using PaddleOCR + Llama 3.1",
      description: "AI-powered invoice processing system with high accuracy OCR and intelligent data extraction.",
      achievements: [
        "98% accuracy rate",
        "Context-aware parsing via LLM agent",
        "Automated data validation",
        "Multi-format support"
      ],
      challenges: [
        "Handling diverse invoice formats",
        "Optimizing OCR accuracy",
        "Integrating LLM with OCR pipeline"
      ],
      technologies: ["PaddleOCR", "Llama 3.1", "Python", "AI/ML"],
      category: "AI/Machine Learning"
    },
    {
      title: "Supply Chain Microservices",
      description: "Scalable microservices architecture for supply chain management with comprehensive service integration.",
      achievements: [
        "Auth, gateway, registry services",
        "Spring Boot microservices",
        "Redis caching implementation",
        "JPQL database optimization"
      ],
      challenges: [
        "Designing for scalability and flexibility",
        "Ensuring data consistency across services",
        "Optimizing performance with caching"
      ],
      technologies: ["Spring Boot", "Redis", "JPQL", "Microservices"],
      category: "Backend Development"
    },
    {
      title: "E-commerce Platform Revamp",
      description: "Complete overhaul of an e-commerce platform's frontend and backend for improved performance and user experience.",
      achievements: [
        "Reduced page load time by 50%",
        "Enhanced mobile responsiveness",
        "Integrated third-party payment gateways",
        "Implemented real-time order tracking"
      ],
      challenges: [
        "Migrating legacy code to modern stack",
        "Ensuring zero downtime during transition",
        "Thorough testing of payment and order systems"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full Stack Development"
    },
    {
      title: "Real-time Chat Application",
      description: "A feature-rich chat application supporting text, voice, and video communication built with a microservices architecture.",
      achievements: [
        "Supports 1000+ concurrent users",
        "End-to-end encrypted messages",
        "Real-time message delivery and notifications",
        "User presence and status indicators"
      ],
      challenges: [
        "Implementing WebRTC for video/voice",
        "Ensuring low-latency message delivery",
        "Scaling the application to handle peak loads"
      ],
      technologies: ["Node.js", "Socket.IO", "MongoDB", "Redis"],
      category: "Real-time Applications"
    }
  ];

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions built with cutting-edge technologies, 
            showcasing expertise in software development and system architecture.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all duration-300 font-medium
                ${selectedCategory === cat ? "bg-foreground text-background scale-105 shadow" : "bg-muted text-muted-foreground hover:bg-foreground/10"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects
            .filter(p => selectedCategory === "All" || p.category === selectedCategory)
            .map((project, index) => (
              <div
                key={index}
                className="relative bg-white shadow-lg p-8 rounded-xl border border-border group transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 mr-3" />
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-foreground mb-4">{project.title}</h3>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Project Challenges Section */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Project Challenges:</h4>
                  <ul className="space-y-2">
                    {project.challenges && project.challenges.map((challenge, chIndex) => (
                      <li key={chIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-border">
                  <button
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    tabIndex={-1}
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </button>
                  <button
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    tabIndex={-1}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;