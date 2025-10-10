import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink, Calendar, Users } from 'lucide-react';

const ResearchPage = () => {
  const publications = [
    {
      title: "BLDAR: A Blending Ensemble Learning Approach for Primary Energy Consumption Analysis",
      venue: "Springer",
      type: "Book Chapter",
      year: "2025",
      status: "Published",
      description: "Implemented BLDAR, a novel blended ensemble model integrating LightGBM, Decision Tree, AdaBoost, and Random Forest regressors for forecasting primary energy consumption.",
      achievements: [
        "Achieved state-of-the-art 90% R² score",
        "Established new benchmark for sustainable energy analytics",
        "Combined multiple ensemble algorithms for superior accuracy",
        "Contributed to sustainable energy research"
      ],
      technologies: ["LightGBM", "Decision Tree", "AdaBoost", "Random Forest", "Python", "Scikit-Learn"],
      doi: "Springer Book Chapter - 2025"
    },
    {
      title: "An Automatic System for Identifying and Categorizing Tribal Clothing Based on Convolutional Neural Networks",
      venue: "IEEE - Fourth International Conference on Emerging Research in Electronics, Computer Science and Technology (ICERECT)",
      type: "Conference Paper",
      year: "2022",
      status: "Published",
      description: "Developed a CNN-based system using the custom-made 'TribalBd' dataset to classify Bangladeshi tribal dresses with high accuracy.",
      achievements: [
        "Achieved 89.97% accuracy with YOLOv5",
        "Surpassed YOLOv6 (86.24%) and YOLOv7 (71.28%)",
        "Created custom 'TribalBd' dataset with 12+ tribal communities",
        "Pioneering work in cultural heritage preservation through AI"
      ],
      technologies: ["YOLOv5", "YOLOv6", "YOLOv7", "Computer Vision", "Deep Learning", "Python", "PyTorch"],
      doi: "IEEE Conference Paper - 2022"
    }
  ];

  const conferences = [
    {
      event: "IEEE Computer Society Bangladesh Chapter Symposium",
      role: "Researcher",
      topic: "Research Abstract Presentation",
      year: "November 2024",
      description: "Research abstract accepted for presentation"
    },
    {
      event: "Fourth International Conference on Emerging Research in Electronics, Computer Science and Technology (ICERECT), IEEE",
      role: "Presenter",
      topic: "Computer Vision Research - Tribal Dress Classification",
      year: "March 2022",
      description: "Presented paper on tribal dress classification using CNNs"
    }
  ];

  const competitions = [
    {
      event: "Facebook Developer Circles Challenge (META)",
      role: "Top 20 Finalist",
      topic: "Chatbot Development for Messenger Platform",
      year: "February 2021",
      description: "Participated in Chatbot-Developments Hackathons and placed in top 20"
    },
    {
      event: "ICPC Intra University Selection Programming Contest",
      role: "Participant",
      topic: "Competitive Programming",
      year: "October 2019",
      description: "Team ranked top 50 among 900 teams"
    },
    {
      event: "Leading University National Programming Contest",
      role: "Participant",
      topic: "Competitive Programming",
      year: "February 2018",
      description: "Team ranking was 72 out of 190 teams"
    }
  ];

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
            <h1 className="text-5xl font-bold mb-4 font-mono">Research & Publications</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Contributing to the academic community through research in computer vision, 
              machine learning, and sustainable technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center font-mono">
            <BookOpen className="w-8 h-8 mr-3" />
            Published Research
          </h2>
          
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary p-8 rounded-lg border-l-4 border-foreground"
              >
                <div className="flex flex-wrap items-start justify-between mb-4 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {pub.type}
                    </span>
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {pub.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-foreground">{pub.venue}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={12} />
                      {pub.year}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 font-mono">{pub.title}</h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pub.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 font-mono">Key Contributions:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pub.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 font-mono">Technologies & Methods:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-background text-foreground px-3 py-1 rounded text-xs border border-border font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground font-mono">{pub.doi}</span>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm">View Paper</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center font-mono">
            <Award className="w-8 h-8 mr-3" />
            Conference Presentations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conferences.map((conf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg border border-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg pr-4">{conf.event}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{conf.year}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    {conf.role}
                  </span>
                </div>
                <p className="text-foreground font-medium mb-2 font-mono">{conf.topic}</p>
                <p className="text-sm text-muted-foreground">{conf.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center font-mono">
            <Users className="w-8 h-8 mr-3" />
            Competitive Programming & Hackathons
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitions.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg border border-border"
              >
                <div className="mb-3">
                  <h3 className="font-bold text-base mb-2">{comp.event}</h3>
                  <span className="text-xs text-muted-foreground">{comp.year}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    {comp.role}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{comp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;

