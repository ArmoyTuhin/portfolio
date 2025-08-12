import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Tribal Dress Classification Using CNNs",
      venue: "IEEE",
      type: "Conference Paper",
      description: "Advanced computer vision research using YOLOv5 on custom 'TribalBd' dataset for cultural dress classification.",
      achievements: [
        "89.97% accuracy achieved",
        "Outperformed YOLOv6/YOLOv7",
        "Custom dataset creation",
        "Cultural preservation through AI"
      ],
      technologies: ["YOLOv5", "Computer Vision", "Deep Learning", "Python"],
      doi: "IEEE DOI Available"
    },
    {
      title: "BLDAR: Blended Ensemble Model for Energy Forecasting",
      venue: "Springer",
      type: "Book Chapter",
      description: "Innovative ensemble machine learning approach combining multiple algorithms for accurate energy consumption prediction.",
      achievements: [
        "R² score: 90%",
        "Combined LightGBM, AdaBoost, DT, RF",
        "Energy efficiency optimization",
        "Sustainable technology contribution"
      ],
      technologies: ["LightGBM", "AdaBoost", "Random Forest", "Ensemble Learning"],
      doi: "Springer Chapter Published"
    }
  ];

  const participations = [
    {
      event: "Java Developers Conference 2024",
      role: "Speaker",
      topic: "Spring AI talk",
      description: "Presented on AI integration in Spring framework"
    },
    {
      event: "IEEE CS BD Symposium 2024",
      role: "Researcher",
      topic: "Research accepted",
      description: "Research paper accepted and presented"
    },
    {
      event: "Photography Club of India",
      role: "Winner",
      topic: "Street photography (2022)",
      description: "First place in street photography competition"
    },
    {
      event: "Facebook Messenger Bot Hackathon",
      role: "Top 100",
      topic: "Chatbot Development (2020)",
      description: "Ranked in top 100 participants globally"
    }
  ];

  return (
    <section id="publications" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Publications & Research</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the academic community through research in computer vision, 
            machine learning, and sustainable technology solutions.
          </p>
        </motion.div>

        {/* Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <BookOpen className="w-6 h-6 mr-3" />
            Research Publications
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary p-8 rounded-lg border border-border hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {pub.type}
                  </span>
                  <span className="text-sm font-bold text-foreground">{pub.venue}</span>
                </div>

                <h4 className="text-xl font-bold mb-4">{pub.title}</h4>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pub.description}
                </p>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Key Contributions:</h5>
                  <ul className="space-y-2">
                    {pub.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {pub.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-background text-foreground px-2 py-1 rounded text-xs border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{pub.doi}</span>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm">View Paper</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Participations */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3" />
            Conferences & Competitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {participations.map((participation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg border border-border hover-lift"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-lg">{participation.event}</h4>
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    {participation.role}
                  </span>
                </div>
                <p className="text-foreground font-medium mb-2">{participation.topic}</p>
                <p className="text-sm text-muted-foreground">{participation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;

