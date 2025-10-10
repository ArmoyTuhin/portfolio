import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Github, Filter } from 'lucide-react';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "AI-Driven Hospital Management System",
      client: "MHM, Houston, TX",
      description: "Built an AI-driven hospital management system with microservices and a RAG-based AI agent for processing and retrieving insights from medical data.",
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
      category: "AI/Machine Learning",
      image: "/projects/hospital-management.png"
    },
    {
      title: "Church Census Records Archiving Project",
      client: "Family Search, Utah",
      description: "Engineered a high-throughput DSLR imaging system with real-time spatial analysis and line-segment validation for digitizing church records.",
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
      category: "Enterprise Software",
      image: "/projects/church-records.png"
    },
    {
      title: "Invoice and Billing Documents Data Extraction",
      client: "Internal Project",
      description: "Built a high-accuracy OCR system with PaddleOCR and a Llama 3.1 agent for context-aware extraction of structured table data from large-scale documents.",
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
      category: "AI/Machine Learning",
      image: "/projects/invoice-extraction.png"
    },
    {
      title: "Satellite Frequency Renting and Auto Billing System",
      client: "Bangladesh Satellite Corporation, Dhaka",
      description: "Developed a Spring Boot–based automated billing system to calculate satellite frequency usage by TV channels on a pay-per-use model.",
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
      category: "Backend Development",
      image: "/projects/satellite-billing.png"
    }
  ];

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4 font-mono">Professional Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Innovative solutions built with cutting-edge technologies, showcasing expertise 
              in software development, AI/ML, and system architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter size={20} />
              <span className="font-mono font-semibold">Filter by:</span>
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium font-mono text-sm
                  ${selectedCategory === cat 
                    ? "bg-foreground text-background" 
                    : "bg-secondary text-foreground border border-border hover:border-foreground"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects List */}
          <div className="space-y-12">
            {projects
              .filter(p => selectedCategory === "All" || p.category === selectedCategory)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary p-8 rounded-lg border border-border"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Project Image Placeholder */}
                    <div className="lg:col-span-1">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
                        <Code className="w-16 h-16 text-muted-foreground" />
                      </div>
                      <div className="mt-4">
                        <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-2 font-mono">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 italic">Client: {project.client}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 font-mono">Key Features & Achievements:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 font-mono">Technical Challenges:</h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, chIndex) => (
                            <li key={chIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 font-mono">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-background text-foreground px-3 py-1 rounded text-xs border border-border font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4 border-t border-border">
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                          <Github size={16} />
                          <span className="text-sm font-mono">Source Code</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                          <ExternalLink size={16} />
                          <span className="text-sm font-mono">Live Demo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;

