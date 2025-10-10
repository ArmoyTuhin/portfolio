import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';

const TeachingPage = () => {
  const teaching = [
    {
      role: "Java & Data Structures Instructor",
      organization: "Private Mentorship",
      period: "2022 – Present",
      description: "Mentored over 10+ students in Java programming and data structures, resulting in improved programming skills and successful project completions.",
      topics: ["Java Programming", "Data Structures", "Algorithms", "Object-Oriented Programming", "Problem Solving"],
      achievements: [
        "10+ students mentored successfully",
        "Improved student programming proficiency",
        "Guided students through complex projects",
        "Personalized learning approaches"
      ]
    },
    {
      role: "Mathematics & Physics Instructor",
      organization: "Unmesh Academic Care",
      period: "2018 – 2022",
      location: "Sylhet, Bangladesh",
      description: "Taught Mathematics and Physics to college-level students, delivering comprehensive lessons and supporting academic development.",
      topics: ["Calculus", "Linear Algebra", "Classical Mechanics", "Electromagnetism", "Thermodynamics"],
      achievements: [
        "Delivered engaging lectures to college students",
        "Improved student understanding of complex concepts",
        "Developed custom teaching materials",
        "Supported students in exam preparation"
      ]
    }
  ];

  const leadership = [
    {
      role: "General Secretary",
      organization: "Computer Society, SUST",
      period: "November 2021 – November 2022",
      description: "Organized the university's annual programming contest and coordinated departmental technical events.",
      icon: <Users className="w-6 h-6" />,
      achievements: [
        "Organized annual programming contest",
        "Coordinated technical seminars and workshops",
        "Led team of student volunteers",
        "Fostered coding culture on campus"
      ]
    },
    {
      role: "Campus Director",
      organization: "Bohubrihi - EdTech Platform",
      period: "January 2021 – January 2022",
      description: "Organized programming sessions and workshops on behalf of Bohubrihi to enhance student skills.",
      icon: <BookOpen className="w-6 h-6" />,
      achievements: [
        "Organized programming workshops",
        "Enhanced student technical skills",
        "Collaborated with EdTech platform",
        "Promoted online learning culture"
      ]
    },
    {
      role: "Vice President & Instructor",
      organization: "SECPA - University Photography Club",
      period: "January 2020 – January 2022",
      description: "Served as Image Aesthetics Instructor and conducted workshops on visual composition and photography techniques.",
      icon: <Award className="w-6 h-6" />,
      achievements: [
        "Taught image aesthetics and composition",
        "Conducted photography workshops",
        "Won national and international photography awards",
        "Mentored aspiring photographers"
      ]
    },
    {
      role: "Founding Campus Director",
      organization: "HULT Prize SEC",
      period: "2019 – 2020",
      description: "Organized online seminars and programs to promote social entrepreneurship on campus.",
      icon: <GraduationCap className="w-6 h-6" />,
      achievements: [
        "Founded campus chapter",
        "Organized entrepreneurship seminars",
        "Promoted social innovation",
        "Connected students with global opportunities"
      ]
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
            <h1 className="text-5xl font-bold mb-4 font-mono">Teaching & Mentorship</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Passionate about sharing knowledge and fostering the next generation of engineers 
              through teaching, mentorship, and leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teaching Experience */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center font-mono">
            <GraduationCap className="w-8 h-8 mr-3" />
            Teaching Experience
          </h2>
          
          <div className="space-y-8">
            {teaching.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary p-8 rounded-lg border-l-4 border-foreground"
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-mono">{item.role}</h3>
                    <p className="text-lg text-muted-foreground">{item.organization}</p>
                    {item.location && (
                      <p className="text-sm text-muted-foreground">{item.location}</p>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-3 font-mono">Topics Taught:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="bg-background text-foreground px-3 py-1 rounded text-xs border border-border font-mono"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 font-mono">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Extracurricular */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center font-mono">
            <Users className="w-8 h-8 mr-3" />
            Leadership & Extracurricular Activities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg border border-border"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 font-mono">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">{item.organization}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-2 text-sm font-mono">Key Contributions:</h4>
                  <ul className="space-y-1">
                    {item.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-1 h-1 bg-foreground rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span className="text-xs text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary p-8 rounded-lg border border-border"
          >
            <h2 className="text-3xl font-bold mb-6 font-mono">Teaching Philosophy</h2>
            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                I believe in a <strong>hands-on, problem-solving approach</strong> to teaching that emphasizes 
                practical application over rote memorization. My teaching methodology focuses on:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Personalized Learning:</strong> Adapting teaching methods to individual student needs 
                  and learning styles to maximize comprehension and retention.
                </li>
                <li>
                  <strong>Project-Based Learning:</strong> Encouraging students to build real-world projects 
                  that solidify theoretical concepts through practical implementation.
                </li>
                <li>
                  <strong>Critical Thinking:</strong> Fostering analytical skills and problem-solving abilities 
                  rather than just teaching syntax and formulas.
                </li>
                <li>
                  <strong>Continuous Mentorship:</strong> Providing ongoing support and guidance beyond 
                  classroom hours to ensure student success.
                </li>
              </ul>
              <p>
                Through my teaching and mentorship, I aim to inspire the next generation of engineers 
                to not only excel technically but also to think creatively and contribute meaningfully 
                to society.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeachingPage;

