import React, { useState } from 'react';
import { Download, FileText, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CVSection = () => {
  const [showCVModal, setShowCVModal] = useState(false);

  // CV data - you can update this with your actual CV content
  const cvData = {
    name: "Tuhin Chowdhury",
    title: "Software Engineer | AI/ML Researcher",
    contact: {
      email: "tuhin.sec@gmail.com",
      phone: "+880 1701 538514",
      location: "Chittagong, Bangladesh"
    },
    summary: "Software Engineer with expertise in AI/ML applications, medical healthcare data security, and scalable backend systems. Published researcher with focus on computer vision and ensemble learning.",
    
    education: {
      degree: "Bachelor of Science in Computer Science & Engineering",
      university: "Shahjalal University of Science & Technology",
      period: "September 2017 – April 2022",
      cgpa: "3.27/4.00 (Final Year: 3.7/4.00)"
    },
    
    experience: [
      {
        title: "Software Engineer",
        company: "Golden Harvest Infotech Limited",
        period: "2022 – Present",
        responsibilities: [
          "Developed AI-driven hospital management system with RAG-based multi-agent architecture",
          "Built high-throughput DSLR imaging system for church census records archiving",
          "Created invoice data extraction system using PaddleOCR and Llama 3.1",
          "Implemented satellite billing system for Bangladesh Satellite Corporation"
        ]
      }
    ],
    
    publications: [
      {
        title: "An Automatic System for Identifying and Categorizing Tribal Clothing Based on Convolutional Neural Networks",
        venue: "IEEE Conference Paper",
        year: "2022",
        role: "First Author"
      },
      {
        title: "BLDAR: A Blending Ensemble Learning Approach for Primary Energy Consumption Analysis",
        venue: "Springer Book Chapter",
        year: "2025",
        role: "Co-Author"
      }
    ],
    
    skills: {
      "Programming Languages": ["Python", "Java", "C#", "JavaScript", "TypeScript"],
      "AI/ML": ["PyTorch", "TensorFlow", "OpenAI APIs", "LlamaIndex", "YOLOv5/v6/v7"],
      "Backend": ["Spring Boot", ".NET", "Node.js", "PostgreSQL", "MongoDB"],
      "Frontend": ["React", "Next.js", "Tailwind CSS", "Three.js"],
      "Cloud & Tools": ["AWS", "Docker", "Git", "GraphQL"]
    }
  };

  // Function to download the actual CV PDF
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Tuhin_Chowdhury_CV.pdf';
    link.download = 'Tuhin_Chowdhury_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to view CV in new tab
  const handleViewCV = () => {
    window.open('/Tuhin_Chowdhury_CV.pdf', '_blank');
  };

  const generateCVHTML = (data) => {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${data.name} - CV</title>
  <style>
    body { font-family: 'Arial', sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; color: #333; }
    h1 { color: #00ffff; border-bottom: 3px solid #00ffff; padding-bottom: 10px; }
    h2 { color: #6e00ff; margin-top: 30px; border-bottom: 2px solid #6e00ff; padding-bottom: 5px; }
    h3 { color: #00ffff; margin-top: 20px; }
    .contact { display: flex; gap: 20px; flex-wrap: wrap; margin: 20px 0; }
    .section { margin: 30px 0; }
    .job, .publication { margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 4px solid #00ffff; }
    .skills { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
    .skill-category { background: #f0f0f0; padding: 10px; border-radius: 5px; }
    ul { margin: 10px 0; padding-left: 20px; }
    li { margin: 5px 0; }
  </style>
</head>
<body>
  <h1>${data.name}</h1>
  <p><strong>${data.title}</strong></p>
  <div class="contact">
    <span>📧 ${data.contact.email}</span>
    <span>📱 ${data.contact.phone}</span>
    <span>📍 ${data.contact.location}</span>
  </div>
  
  <div class="section">
    <h2>Professional Summary</h2>
    <p>${data.summary}</p>
  </div>
  
  <div class="section">
    <h2>Education</h2>
    <div class="job">
      <h3>${data.education.degree}</h3>
      <p><strong>${data.education.university}</strong></p>
      <p>${data.education.period} | CGPA: ${data.education.cgpa}</p>
    </div>
  </div>
  
  <div class="section">
    <h2>Professional Experience</h2>
    ${data.experience.map(exp => `
      <div class="job">
        <h3>${exp.title}</h3>
        <p><strong>${exp.company}</strong> | ${exp.period}</p>
        <ul>
          ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>
  
  <div class="section">
    <h2>Publications</h2>
    ${data.publications.map(pub => `
      <div class="publication">
        <h3>${pub.title}</h3>
        <p><strong>${pub.venue}</strong> | ${pub.year} | ${pub.role}</p>
      </div>
    `).join('')}
  </div>
  
  <div class="section">
    <h2>Technical Skills</h2>
    <div class="skills">
      ${Object.entries(data.skills).map(([category, skills]) => `
        <div class="skill-category">
          <strong>${category}:</strong><br>
          ${skills.join(', ')}
        </div>
      `).join('')}
    </div>
  </div>
</body>
</html>
    `;
  };

  return (
    <section id="cv" className="section-padding" style={{background: 'linear-gradient(to bottom, #000000, #0f0f23)'}}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={handleDownload}
            className="flex items-center gap-2 bg-cyan-500 text-black px-8 py-4 rounded-lg font-medium font-mono hover:bg-cyan-400 transition-all"
            style={{boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'}}
          >
            <Download size={20} />
            DOWNLOAD CV
          </motion.button>
        </div>
      </div>

      {/* CV Preview Modal */}
      <AnimatePresence>
        {showCVModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowCVModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black border-2 border-cyan-500 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{boxShadow: '0 0 40px rgba(0, 255, 255, 0.3)'}}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b-2 border-cyan-500/30">
                <h3 className="text-2xl font-bold text-cyan-400 font-mono">// CV_PREVIEW</h3>
                <button
                  onClick={() => setShowCVModal(false)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-cyan-400 mb-2">{cvData.name}</h1>
                    <p className="text-xl text-purple-400 mb-4">{cvData.title}</p>
                    <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
                      <span>📧 {cvData.contact.email}</span>
                      <span>📱 {cvData.contact.phone}</span>
                      <span>📍 {cvData.contact.location}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="holo-card p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-cyan-400 mb-3 font-mono">// SUMMARY</h2>
                    <p className="text-gray-400">{cvData.summary}</p>
                  </div>

                  {/* Education */}
                  <div className="holo-card p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-cyan-400 mb-3 font-mono">// EDUCATION</h2>
                    <h3 className="text-lg font-semibold text-purple-400">{cvData.education.degree}</h3>
                    <p className="text-gray-400">{cvData.education.university}</p>
                    <p className="text-sm text-gray-500">{cvData.education.period} | CGPA: {cvData.education.cgpa}</p>
                  </div>

                  {/* Experience */}
                  <div className="holo-card p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-cyan-400 mb-4 font-mono">// EXPERIENCE</h2>
                    {cvData.experience.map((exp, idx) => (
                      <div key={idx} className="mb-4">
                        <h3 className="text-lg font-semibold text-purple-400">{exp.title}</h3>
                        <p className="text-gray-400">{exp.company} | {exp.period}</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400 text-sm">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Publications */}
                  <div className="holo-card p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-cyan-400 mb-4 font-mono">// PUBLICATIONS</h2>
                    {cvData.publications.map((pub, idx) => (
                      <div key={idx} className="mb-4">
                        <h3 className="text-md font-semibold text-purple-400">{pub.title}</h3>
                        <p className="text-sm text-gray-400">{pub.venue} | {pub.year} | {pub.role}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="holo-card p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-cyan-400 mb-4 font-mono">// SKILLS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(cvData.skills).map(([category, skills]) => (
                        <div key={category}>
                          <h3 className="text-sm font-semibold text-cyan-400 mb-2">{category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill, idx) => (
                              <span key={idx} className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/30">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t-2 border-cyan-500/30 flex justify-end gap-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 bg-cyan-500 text-black px-6 py-3 rounded-lg font-medium font-mono hover:bg-cyan-400 transition-all"
                  style={{boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'}}
                >
                  <Download size={18} />
                  DOWNLOAD
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CVSection;

