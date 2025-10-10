import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Code, GraduationCap, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import tuhinPortrait from '../assets/tuhin_portrait.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-foreground/20">
                <img
                  src={tuhinPortrait}
                  alt="Tuhin Chowdhury"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 font-mono">
                Tuhin Chowdhury
              </h1>
              <p className="text-xl text-muted-foreground mb-6 font-mono">
                Software Engineer | AI/ML Researcher
              </p>
              
              <div className="space-y-3 mb-8 text-base">
                <p className="flex items-center gap-2">
                  <GraduationCap size={20} />
                  <span>B.Sc. in Computer Science & Engineering</span>
                </p>
                <p className="flex items-center gap-2">
                  <BookOpen size={20} />
                  <span>School of Applied Science and Technology, Shahjalal University of Science & Technology</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={20} />
                  <a href="mailto:tuhin.sec@gmail.com" className="hover:underline">
                    tuhin.sec@gmail.com
                  </a>
                </p>
              </div>

              <div className="prose prose-sm max-w-none mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  I am a Software Engineer at Golden Harvest Infotech Limited with a strong focus on 
                  <strong> AI/ML applications</strong>, <strong>medical healthcare data security</strong>, and <strong>scalable backend systems</strong>. 
                  My research interests include secure healthcare data management, ensemble learning, deep learning for cultural heritage preservation, 
                  and intelligent document processing systems with emphasis on privacy and security.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/research"
                  className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
                >
                  <BookOpen size={18} />
                  Research & Publications
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/projects"
                  className="flex items-center gap-2 border-2 border-foreground text-foreground px-6 py-3 rounded-lg font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  <Code size={18} />
                  View Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 font-mono">Research Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Medical Healthcare Data Security",
                  description: "Secure healthcare data management, HIPAA compliance, encryption techniques, and privacy-preserving AI for medical systems"
                },
                {
                  title: "Machine Learning & AI",
                  description: "Ensemble learning methods, deep neural networks, and AI-driven automation systems"
                },
                {
                  title: "Computer Vision",
                  description: "Object detection, image classification, OCR systems, and cultural heritage preservation"
                },
                {
                  title: "Natural Language Processing",
                  description: "RAG-based systems, document intelligence, and context-aware information retrieval"
                },
                {
                  title: "Energy Analytics",
                  description: "Predictive modeling for sustainable energy consumption using ensemble techniques"
                },
                {
                  title: "Healthcare Informatics",
                  description: "AI agents for medical data processing and intelligent healthcare management systems"
                }
              ].map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background p-6 rounded-lg border border-border hover:border-foreground/50 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-2 font-mono">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2+", label: "Publications" },
              { number: "4+", label: "Major Projects" },
              { number: "2+", label: "Years Experience" },
              { number: "10+", label: "Students Mentored" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-secondary rounded-lg"
              >
                <div className="text-4xl font-bold mb-2 font-mono">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
