import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "👨‍💻",
      skills: [
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "C++", level: 85, color: "from-blue-500 to-blue-700" },
        { name: "C", level: 80, color: "from-gray-500 to-gray-700" }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 90, color: "from-cyan-400 to-cyan-600" },
        { name: "Next.js", level: 85, color: "from-gray-800 to-black" },
        { name: "Tailwind CSS", level: 88, color: "from-teal-400 to-teal-600" },
        { name: "HTML/CSS", level: 92, color: "from-orange-400 to-red-500" }
      ]
    },
    {
      title: "Backend Technologies",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-500 to-green-700" },
        { name: "Express.js", level: 90, color: "from-gray-600 to-gray-800" },
        { name: "RESTful APIs", level: 85, color: "from-purple-500 to-purple-700" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 87, color: "from-green-400 to-green-600" },
        { name: "MongoDB Atlas", level: 85, color: "from-green-500 to-emerald-600" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 88, color: "from-orange-500 to-red-600" },
        { name: "JWT Authentication", level: 85, color: "from-indigo-500 to-indigo-700" },
        { name: "Socket.IO", level: 80, color: "from-blue-600 to-blue-800" },
        { name: "Payment APIs", level: 75, color: "from-purple-600 to-pink-600" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="card card-hover p-6 space-y-6 animate-slide-up"
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-secondary-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-secondary-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-primary-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out ${
                          isVisible ? `w-[${skill.level}%]` : 'w-0'
                        }`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center animate-fade-in">
          <h4 className="text-lg font-semibold text-secondary-700 mb-6">
            Additional Technologies & Tools
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Webhooks', 'Payment Integration', 'Razor Pay API', 'JWT', 'Socket.IO',
              'Responsive Design', 'RESTful APIs', 'Database Design', 'Performance Optimization',
              'Code Review', 'Agile Methodology', 'Problem Solving'
            ].map((tech, index) => (
              <span 
                key={index}
                className="tech-tag hover:bg-primary-600 hover:text-white transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;