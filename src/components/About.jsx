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
    { name: 'Java 21', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Spring Boot', level: 88 },
    { name: 'Machine Learning', level: 82 },
    { name: 'React/JavaScript', level: 80 },
    { name: 'Docker', level: 75 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'TensorFlow/PyTorch', level: 80 },
    { name: 'Kubernetes', level: 70 },
    { name: 'TypeScript', level: 78 },
    { name: 'Redis', level: 75 },
    { name: 'MongoDB', level: 72 },
    // ...add more if needed
  ];

  const skillsToShow = showAll ? skills : skills.slice(0, 8);

  const education = {
    university: "Shahjalal University of Science and Technology (SUST), Sylhet",
    degree: "B.Sc. in Computer Science & Engineering",
    cgpa: "3.27/4.00 (Final Year: 3.7)",
    courses: ["Machine Learning", "Digital Image Processing", "Artificial Intelligence", "Data Structures & Algorithms"]
  };

  const leadership = [
    "Java Instructor (2022–Present)",
    "General Secretary – CSE Society",
    "Programming Trainer",
    "Physics & Math Teacher – Omeca Academic (2018–2022)",
    "Campus Director – HULT Prize SEC",
    "VP – SECPA (Photography training)"
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
                <p className="text-sm font-medium mt-2">CGPA: {education.cgpa}</p>
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
              During my undergraduate studies in Computer Science and Engineering, I gained a strong foundation in C and C++, which led me to actively participate in competitive programming. I took part in both intra-campus and national-level inter-university programming contests, enhancing my problem-solving mindset.<br /><br />
              I was among the first batch of the DEVSKILL Competitive Programming Course in 2018 and earned certification for successfully completing it.
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center mb-2">📱 Development Experience</h3>
              Following my competitive programming days, I transitioned into mobile app development, starting with native Android and then expanding into Flutter. One of my most significant projects was for the Red Crescent Society of Bangladesh — a learning and quiz platform where trainees could enhance their knowledge and earn certificates.
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center mb-2">🎓 Leadership & Campus Involvement</h3>
              Beyond academics, I served as:<br />
              <ul className="list-disc ml-6">
                <li>Campus Director for Hult Prize, a global startup competition.</li>
                <li>Campus Director for Bohubrihi, a leading EdTech platform in Bangladesh.</li>
                <li>Vice President of the CSE Society at my university, where I organized contests, seminars, and tech talks that encouraged a coding culture on campus.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center mb-2">🧑‍💻 Internship & Early Career</h3>
              In my final year, I interned at Rokkhi BD, a startup focused on end-to-end building management systems. This experience helped me solidify my Flutter skills in a production environment.<br /><br />
              After graduation, I was selected through a rigorous coding and interview process into the prestigious BJET (Bangladesh-Japan Engineers Training Program), where I further honed my technical and professional skills.
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center mb-2">💼 Professional Experience</h3>
              Post-BJET, I joined Inspir8 Bangladesh, where I’ve grown both as a software engineer and as a problem solver. I was promoted based on my contributions to project delivery and innovation. Alongside professional development, I’ve consistently pushed myself to stay updated with new tools, automation workflows (like n8n), and scalable software practices.
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center mb-2">🧠 Research & Publications</h3>
              My journey into Machine Learning began with a self-initiated project to extract insights from billing data, visualizing them through interactive charts. This evolved into deeper academic research:<br /><br />
              <span className="font-semibold">Undergraduate Thesis:</span> Tribal Dress Classification in Bangladesh — a pioneering work focusing on the unique attire of over 12 indigenous communities using computer vision techniques like YOLOv5.<br />
              <span className="font-semibold">Published Work:</span> Co-authored a book chapter on ensemble learning and energy analytics, contributing to scholarly research in sustainable computing.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

