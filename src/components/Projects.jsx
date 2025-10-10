import React, { useState } from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "AI-Driven Hospital Management System",
      description: "Built an AI-driven hospital management system with microservices and a RAG-based AI agent for MHM, Houston, TX.",
      achievements: [
        "Reduced scheduling conflicts by 40%",
        "Improved patient support efficiency",
        "RAG-based multi-agent system for medical data processing",
        "Microservices architecture for scalability"
      ],
      challenges: [
        "Integrating multiple healthcare data sources",
        "Ensuring HIPAA compliance and data security",
        "Building context-aware AI agents for medical queries"
      ],
      technologies: ["Python", "OpenAI 4", "ChromaDB", "MCP", "N8N", "Betterstack", "AWS S3", "PostgreSQL", "Docker"],
      category: "AI/Machine Learning"
    },
    {
      title: "Church Census Records Archiving Project",
      description: "Engineered a high-throughput DSLR imaging system with real-time spatial analysis for Family Search, Utah.",
      achievements: [
        "Capturing 1000+ images per hour with minimal post-processing",
        "Real-time spatial analysis and line-segment validation",
        "Automated bulk upload to cloud for auditing",
        "Integrated hardware camera via Nikon SDK"
      ],
      challenges: [
        "Integrating Nikon SDK with .NET 8",
        "Real-time image quality validation",
        "Handling high-volume data transfer securely"
      ],
      technologies: ["C#", ".NET 8", "WPF", "GraphQL", "SQLite", "XAML", "Python", "Nikon SDK"],
      category: "Enterprise Software"
    },
    {
      title: "Invoice and Billing Documents Data Extraction",
      description: "Built a high-accuracy OCR system with PaddleOCR and a Llama 3.1 agent for context-aware extraction of structured table data.",
      achievements: [
        "High-accuracy OCR with PaddleOCR",
        "Context-aware extraction using Llama 3.1",
        "Automated structured data extraction from large-scale documents",
        "Multi-format invoice support"
      ],
      challenges: [
        "Handling diverse invoice formats and layouts",
        "Optimizing OCR accuracy for low-quality scans",
        "Integrating LLM for intelligent data parsing"
      ],
      technologies: ["Python", "PaddleOCR", "LlamaIndex (Llama 3.1)", "OpenAI APIs", "PyTorch"],
      category: "AI/Machine Learning"
    },
    {
      title: "Satellite Frequency Renting and Auto Billing System",
      description: "Developed a Spring Boot–based automated billing system for Bangladesh Satellite Corporation to calculate satellite frequency usage.",
      achievements: [
        "Pay-per-use billing model for TV channels",
        "Dynamic invoice generation with JasperReports",
        "Reduced manual reporting efforts by 50%",
        "Automated email notifications via SendGrid"
      ],
      challenges: [
        "Complex billing calculations based on usage patterns",
        "Generating professional PDF invoices dynamically",
        "Ensuring accurate billing and reporting"
      ],
      technologies: ["Java", "Spring Boot", "JasperSoft", "SendGrid", "PostgreSQL"],
      category: "Backend Development"
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