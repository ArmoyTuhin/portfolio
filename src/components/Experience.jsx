import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Golden Harvest Infotech Ltd",
      period: "Feb 2023 – Present",
      role: "Software Engineer",
      achievements: [
        "DSLR SDK–based image capture system",
        "Bulk image transfer, real-time processing",
        "Led 4-member dev team",
        "Improved system efficiency by 40%"
      ],
      technologies: [".NET 8", "Nikon SDK", "WPF", "Real-time Processing"]
    },
    {
      company: "Rokkhi IT Ltd",
      period: "June 2022 – Jan 2023",
      role: "Backend Developer",
      achievements: [
        "Java Spring Boot REST APIs",
        "Improved Android app for 20K+ users",
        "Optimized camera/storage → 30% boost",
        "Microservices architecture implementation"
      ],
      technologies: ["Java", "Spring Boot", "Android", "REST APIs", "Microservices"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative software solutions and leading development teams 
            to deliver high-quality products.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 rounded-lg border border-border hover-lift"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-6 h-6 mr-3" />
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                  </div>
                  <div className="flex items-center mb-4 text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground">{exp.role}</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-4">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-background text-foreground px-3 py-1 rounded-full text-sm border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

