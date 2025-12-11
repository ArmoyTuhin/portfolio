import React, { useState } from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Hospital Management System",
      description: "Built Spring Boot microservices to manage patient information, bed management, admissions, and cross-department workflows across OPD, IPD, IAM, and EHR for Houston, USA.",
      achievements: [
        "Built Spring Boot microservices to manage patient information, bed management, admissions, and cross-department workflows across OPD, IPD, IAM, and EHR",
        "Implemented secure communication using JWT, timestamp validation, IPC-based internal service calls, and Betterstack for centralized logging",
        "Optimized performance with PostgreSQL through custom SQL, indexing, and optimized joins, along with asynchronous processing, scheduled jobs, and reliable transactional operations",
        "Developed N8N automation workflows, OCR-based patient registration, real-time bed allocation, nurse shift tracking, and duplicate detection, significantly improving system accuracy and operational efficiency"
      ],
      challenges: [
        "Integrating multiple healthcare data sources",
        "Ensuring HIPAA compliance and data security",
        "Building context-aware AI agents for medical queries"
      ],
      technologies: ["Spring Boot 3", "PostgreSQL", "WebClient", "Spring Security", "ChromaDB", "N8N", "AWS S3", "Docker", "JUnit"],
      category: "Backend Development",
      location: "Houston, USA"
    },
    {
      title: "Supply Chain Management Software",
      description: "Designed and implemented the backend for a Garment Supply Chain Management software for 1500+ users, developing 10+ microservices to manage the entire lifecycle from order import via Excel to vendor, warehouse, production updates, and shipment for Garment Industry, Dhaka.",
      achievements: [
        "Designed and implemented the backend for a Garment Supply Chain Management software for 1500+ users, developing 10+ microservices to manage the entire lifecycle from order import via Excel to vendor, warehouse, production updates, and shipment, including interactive templates for every phase of garment production",
        "The system reduced manual work by over 50% and included an automated alert system",
        "Maintained APIs, service registry, and gateway, handled multiple databases, integrated Feign clients for inter-service communication, and used Zipkin for distributed tracing, ensuring robust, scalable, and observable operations"
      ],
      challenges: [
        "Handling complex supply chain workflows",
        "Managing multiple databases and microservices",
        "Ensuring scalable and reliable operations"
      ],
      technologies: ["Spring Boot 3", "PostgreSQL", "JasperSoft", "Sendgrid", "Docker", "Zipkin"],
      category: "Backend Development",
      location: "Garment Industry, Dhaka"
    },
    {
      title: "Satellite Frequency Renting and Auto Billing System",
      description: "Built a Spring Boot billing management system for multiple clients to automate 100% of invoice, chalan, and payment notifications via SMTP email for Bangladesh Satellite Corporation, Dhaka.",
      achievements: [
        "Built a Spring Boot billing management system for multiple clients to automate 100% of invoice, chalan, and payment notifications via SMTP email, handling 15+ JasperReports with multi-report and graph-based analytics, deployed using Docker",
        "Calculated satellite frequency usage on a pay-per-use model, integrating dynamic reporting and analytics, which eliminated manual reporting and reduced operational effort by 50% while ensuring reliable, scalable billing workflows"
      ],
      challenges: [
        "Complex billing calculations based on usage patterns",
        "Generating professional PDF invoices dynamically",
        "Ensuring accurate billing and reporting"
      ],
      technologies: ["Java", "Spring Boot", "JasperReport", "Sendgrid", "PostgreSQL"],
      category: "Backend Development",
      location: "Bangladesh Satellite Corporation, Dhaka"
    },
    {
      title: "Church Census Records Archiving Project",
      description: "Engineered the full hardware ecosystem for a high-throughput DSLR imaging system using C#, .NET 8, and Nikon SDK, capturing 1,000+ images per hour with real-time spatial analysis and line-segment validation for a US-based company focused on family ancestry research.",
      achievements: [
        "Engineered the full hardware ecosystem for a high-throughput DSLR imaging system using C#, .NET 8, and Nikon SDK, capturing 1,000+ images per hour with real-time spatial analysis and line-segment validation",
        "Built a portable, offline-ready imaging solution worth 0.5 million BDT for R&D, serving a US-based company focused on family ancestry research",
        "Led the backend team of the desktop application, integrating real-time image processing workflows while preserving visual aesthetics for millions of pages of historical books and documents",
        "Developed a bulk image sharing pipeline maintaining image quality and producing data-entry-ready outputs, enabling faster digitization and collaboration",
        "Solved challenges in real-time customized image capturing and storage management, ensuring efficient image handling and minimal post-processing"
      ],
      challenges: [
        "Real-time image processing and validation",
        "Handling high-volume image capture (1000+ images/hour)",
        "Maintaining image quality during bulk processing",
        "Offline-ready portable solution development"
      ],
      technologies: ["C#", ".NET 8", "Nikon SDK", "WPF", "Image Processing"],
      category: "Desktop Application",
      location: "US-based Company (Family Ancestry Research)"
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