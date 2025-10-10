import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { GraduationCap, Award, Users } from 'lucide-react';

const skillColors = [
  "#6366f1", "#06b6d4", "#f59e42", "#22c55e", "#ef4444", "#a21caf", "#eab308", "#0ea5e9"
];

const CircularSkill = ({ name, level, color = "#222", delay = 0 }) => {
  const radius = 38;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (level / 100) * circumference;

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ strokeDashoffset: offset });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col items-center min-w-0 w-48"> {/* Increased width */}
      <svg height={radius * 2} width={radius * 2} className="mb-2 block">
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={controls}
          transition={{ duration: 1, delay }}
        />
        <text
          x={radius}
          y={radius + 6}
          textAnchor="middle"
          fontSize="1.1rem"
          fontWeight="bold"
          fill="#222"
        >
          {level}%
        </text>
      </svg>
      <span className="font-semibold text-base break-words text-center">{name}</span>
    </div>
  );
};

const About = () => {
  const [showAll, setShowAll] = useState(false);

  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Java 21', level: 95 },
    { name: 'C++', level: 90 },
    { name: 'C', level: 90 },
    { name: 'Spring Boot', level: 90 },
    { name: 'FastAPI', level: 85 },
    { name: 'PyTorch', level: 88 },
    { name: 'TensorFlow', level: 85 },
    { name: 'LlamaIndex', level: 82 },
    { name: 'OpenCV', level: 85 },
    { name: 'YOLO', level: 88 },
    { name: '.NET 8', level: 75 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Docker', level: 82 },
    { name: 'AWS S3', level: 80 },
    { name: 'React', level: 78 },
    { name: 'Flutter', level: 75 },
    { name: 'N8N', level: 85 }
  ];

  const skillsToShow = showAll ? skills : skills.slice(0, 8);

  const education = {
    university: "School of Applied Science and Technology, Shahjalal University of Science & Technology",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "Sep 2017 – Apr 2022",
    location: "Sylhet Engineering College, Sylhet, Bangladesh",
    cgpa: "3.27/4.00 (Final Year: 3.7/4.00)",
    thesis: "An Automatic System for Identifying and Categorizing Tribal Clothing Based on Convolutional Neural Networks",
    courses: ["Machine Learning", "Digital Image Processing", "Artificial Intelligence", "Data Structures & Algorithms"]
  };

  const leadership = [
    "Java & Data Structures Instructor (Mentored 10+ students)",
    "General Secretary – Computer Society (2021–2022)",
    "Campus Director – Bohubrihi EdTech Platform (2021–2022)",
    "Vice President & Instructor – SECPA Photography Club (2020–2022)",
    "Founding Campus Director – HULT Prize SEC",
    "Mathematics & Physics Instructor – Unmesh Academic Care"
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Cards grid FIRST */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-background p-8 rounded-lg border border-border hover-lift"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">{education.degree}</h4>
                <p className="text-muted-foreground">{education.university}</p>
                <p className="text-sm text-muted-foreground">{education.period}</p>
                <p className="text-sm font-medium mt-2">CGPA: {education.cgpa}</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Thesis:</h5>
                <p className="text-sm text-muted-foreground italic">{education.thesis}</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Core Courses:</h5>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course, index) => (
                    <span
                      key={index}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background p-8 rounded-lg border border-border hover-lift"
          >
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsToShow.map((skill, idx) => (
                <span
                  key={skill.name}
                  className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill.name} <span className="text-xs text-foreground/60">({skill.level}%)</span>
                </span>
              ))}
            </div>
            {skills.length > 8 && (
              <button
                className="mt-6 px-4 py-2 bg-muted text-foreground rounded shadow hover:bg-muted-foreground transition"
                onClick={() => setShowAll(v => !v)}
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            )}
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-background p-8 rounded-lg border border-border hover-lift"
          >
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Leadership</h3>
            </div>
            <div className="space-y-3">
              {leadership.map((role, index) => (
                <div
                  key={index}
                  className="flex items-start"
                >
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{role}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* About texts BELOW */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="text-left max-w-3xl mx-auto space-y-10 text-base md:text-lg leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-center mb-2">📘 Academic Journey & Competitive Programming</h3>
              During my undergraduate studies at Shahjalal University of Science & Technology, I built a strong foundation in C and C++, actively participating in competitive programming contests. I competed in ICPC Intra University Selection (ranked top 50 among 900 teams), Leading University National Programming Contest (ranked 72 out of 190 teams), and other inter-university competitions, which sharpened my problem-solving abilities.
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center mb-2">🎓 Leadership & Campus Involvement</h3>
              Beyond academics, I served in multiple leadership roles:<br />
              <ul className="list-disc ml-6 mt-2">
                <li><strong>General Secretary – Computer Society (2021–2022):</strong> Organized the university's annual programming contest and coordinated departmental technical events.</li>
                <li><strong>Campus Director – Bohubrihi EdTech Platform (2021–2022):</strong> Organized programming sessions and workshops to enhance student skills.</li>
                <li><strong>Vice President & Instructor – SECPA Photography Club (2020–2022):</strong> Served as Image Aesthetics Instructor, conducting workshops on visual composition. My work has won several national and international photography awards.</li>
                <li><strong>Founding Campus Director – HULT Prize SEC:</strong> Organized online seminars and programs to promote social entrepreneurship on campus.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center mb-2">🧑‍💻 Internship & Career Growth</h3>
              I started my professional journey as an intern at <strong>Rokkhi IT Limited</strong> (June 2022 – Jan 2023), where I implemented an automated document processing feature using Java and EasyOCR Python module, reducing manual data entry by over 50%.<br /><br />
              After my internship, I was selected for the prestigious <strong>Bangladesh-Japan Engineers Training Program (2022)</strong> at Miyazaki University, a competitive international training program focused on advanced engineering practices and cross-cultural technical exchange.
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center mb-2">💼 Professional Experience</h3>
              Since February 2023, I've been working as a <strong>Software Engineer at Golden Harvest Infotech Limited</strong>, where I've made significant contributions:<br />
              <ul className="list-disc ml-6 mt-2">
                <li>Designed a <strong>RAG-based multi-agent system</strong> in the healthcare domain for processing and retrieving insights from medical data (prescriptions, reports, patient records).</li>
                <li>Developed a <strong>desktop application integrated with hardware camera (via SDKs)</strong> to capture customized images, perform real-time image analysis, and securely upload digitized church records in bulk to the cloud for auditing and data entry.</li>
                <li>Received the <strong>Best Emerging Engineer Award (2024)</strong> for outstanding performance and innovative contributions to engineering projects.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center mb-2">🧠 Research & Publications</h3>
              My research journey focuses on AI/ML applications:<br /><br />
              <span className="font-semibold">Undergraduate Thesis:</span> Developed a CNN-based system using the custom-made 'TribalBd' dataset to classify Bangladeshi tribal dresses, achieving 89.97% accuracy with YOLOv5, surpassing YOLOv6 (86.24%) and YOLOv7 (71.28%). Published in IEEE (2022).<br /><br />
              <span className="font-semibold">Book Chapter (Springer - 2025):</span> Co-authored "BLDAR: A Blending Ensemble Learning Approach for Primary Energy Consumption Analysis," implementing a novel blended ensemble model integrating LightGBM, Decision Tree, AdaBoost, and Random Forest regressors, achieving a state-of-the-art 90% R² score for sustainable energy analytics.
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center mb-2">🎓 Teaching & Mentorship</h3>
              I'm passionate about sharing knowledge and have mentored over 10+ students in Java & Data Structures, resulting in improved programming skills and successful project completions. I've also taught Mathematics and Physics to college-level students at Unmesh Academic Care, delivering comprehensive lessons and supporting academic development.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

