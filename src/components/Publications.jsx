import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "BLDAR: A Blending Ensemble Learning Approach for Primary Energy Consumption Analysis",
      venue: "Springer",
      type: "Book Chapter",
      year: "01/12/2024",
      description: "Implemented BLDAR, a novel blended ensemble model integrating LightGBM, Decision Tree, AdaBoost, and Random Forest regressors for forecasting primary energy consumption. The model achieved a state-of-the-art 90% R2 score, establishing a new benchmark for sustainable energy analytics.",
      achievements: [
        "Achieved state-of-the-art 90% R² score",
        "Established new benchmark for sustainable energy analytics",
        "Combined multiple ensemble algorithms for superior accuracy",
        "Contributed to sustainable energy research"
      ],
      technologies: ["LightGBM", "Decision Tree", "AdaBoost", "Random Forest", "Python", "Scikit-Learn"],
      doi: "Springer Book Chapter - 01/12/2024"
    },
    {
      title: "An Automatic System for Identifying and Categorizing Tribal Clothing Based on Convolutional Neural Networks",
      venue: "IEEE",
      type: "Conference Paper",
      year: "01/12/2021",
      description: "Developed a CNN-based system using the custom-made 'TribalBd' dataset to classify Bangladeshi tribal dresses, achieving 89.97% accuracy with YOLOv5, surpassing YOLOv6 (86.2%) and YOLOv7 (71.28%).",
      achievements: [
        "Achieved 89.97% accuracy with YOLOv5",
        "Surpassed YOLOv6 (86.2%) and YOLOv7 (71.28%)",
        "Created custom 'TribalBd' dataset",
        "Pioneering work in cultural heritage preservation through AI"
      ],
      technologies: ["YOLOv5", "YOLOv6", "YOLOv7", "Computer Vision", "Deep Learning", "Python", "PyTorch"],
      doi: "IEEE Conference Paper - 01/12/2021"
    }
  ];

  const participations = [
    {
      event: "IEEE Computer Society Bangladesh Chapter Symposium",
      role: "Researcher",
      topic: "Research Abstract Presentation",
      year: "11/2024",
      description: "Research abstract accepted for presentation"
    },
    {
      event: "Fourth International Conference on Emerging Research in Electronics, Computer Science and Technology (ICERECT), IEEE",
      role: "Presenter",
      topic: "Computer Vision",
      year: "03/2022",
      description: "Presented paper on Computer Vision"
    },
    {
      event: "Facebook Developer Circles Challenge | META",
      role: "Top 20 Finalist",
      topic: "Chatbot-Developments Hackathons for Messenger Platform",
      year: "02/2021",
      description: "Participated in Chatbot-Developments Hackathons for Messenger Platform and placed in top 20"
    },
    {
      event: "ICPC Intra University Selection Programming Contest",
      role: "Participant",
      topic: "Competitive Programming",
      year: "10/2019",
      description: "Our team ranked top 50 among 900 teams"
    },
    {
      event: "Leading University National Programming Contest",
      role: "Participant",
      topic: "Competitive Programming",
      year: "02/2018",
      description: "Team ranking was 72 out of 190 teams"
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
                  <div className="text-right">
                    <span className="text-sm font-bold text-foreground block">{pub.venue}</span>
                    <span className="text-xs text-muted-foreground">{pub.year}</span>
                  </div>
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
                  <span className="text-xs text-muted-foreground">{participation.year}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
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

