import React from 'react';

const Experience = () => {
  const experience = {
    position: "Full-Stack Developer Intern",
    company: "Innovative Staffing",
    duration: "June 2025 – September 2025",
    location: "Remote",
    type: "Internship",
    link: "#",
    achievements: [
      {
        icon: "📈",
        title: "20% Client Engagement Boost",
        description: "Development of high-performance web application using React.js, Node.js, Express.js and MongoDB scalable solutions that boosted client engagement by 20%."
      },
      {
        icon: "⚡",
        title: "Server-Side Optimization",
        description: "Developed and Optimized Server-Side functionality with node.js and express.js integrating Webhooks and Payment APIs."
      },
      {
        icon: "🐛",
        title: "20-25% Performance Improvement",
        description: "Diagnosed and resolved critical website bugs, improving web performance by 20-25% and ensuring seamless functionality across responsive interfaces."
      }
    ],
    technologies: [
      { name: "React.js", color: "bg-cyan-100 text-cyan-800" },
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "Express.js", color: "bg-gray-100 text-gray-800" },
      { name: "MongoDB", color: "bg-emerald-100 text-emerald-800" },
      { name: "Webhooks", color: "bg-purple-100 text-purple-800" },
      { name: "Payment APIs", color: "bg-blue-100 text-blue-800" }
    ]
  };

  return (
    <section id="experience" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8 lg:p-12 animate-slide-up">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900">
                    {experience.position}
                  </h3>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                    {experience.type}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-primary-600">
                  {experience.company}
                </h4>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-secondary-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mb-8">
              <h5 className="text-lg font-semibold text-secondary-900 mb-6">
                Key Achievements & Responsibilities
              </h5>
              <div className="grid gap-6">
                {experience.achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-secondary-50 rounded-xl hover:bg-secondary-100 transition-colors duration-200"
                  >
                    <div className="text-2xl flex-shrink-0 mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h6 className="font-semibold text-secondary-900 mb-2">
                        {achievement.title}
                      </h6>
                      <p className="text-secondary-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h5 className="text-lg font-semibold text-secondary-900 mb-4">
                Technologies & Tools Used
              </h5>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color} hover:scale-105 transition-transform duration-200`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;