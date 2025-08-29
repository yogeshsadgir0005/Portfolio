import React from 'react';

const Education = () => {
  const education = {
    degree: "B. TECH in IT Engineering",
    institution: "Dy Patil School of Engineering & Technology",
    location: "Pune, India",
    duration: "2022 - 2026",
    status: "Currently Pursuing",
    relevantCourses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Technologies",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems"
    ]
  };

  const certifications = [
    {
      title: "Frontend Developer",
      issuer: "HackerRank",
      date: "2025",
      description: "Gained hands-on experience in state management of API integration and performance optimization.",
      skills: ["React.js", "JavaScript", "HTML/CSS", "API Integration", "Performance Optimization"],
      link: "#"
    }
  ];

  return (
    <section id="education" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">My academic background and achievements</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-secondary-900 flex items-center">
              <span className="mr-3 text-3xl">🎓</span>
              Education
            </h3>

            <div className="card p-8 space-y-6 animate-slide-in-left">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-secondary-900 mb-2">
                    {education.degree}
                  </h4>
                  <h5 className="text-lg font-semibold text-primary-600 mb-2">
                    {education.institution}
                  </h5>
                  <div className="flex flex-wrap gap-4 text-secondary-600 text-sm">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span>{education.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-2">
                    {education.status}
                  </span>
                </div>
              </div>

              <div>
                <h6 className="font-semibold text-secondary-900 mb-3">Relevant Coursework</h6>
                <div className="grid grid-cols-2 gap-2">
                  {education.relevantCourses.map((course, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 text-sm text-secondary-600"
                    >
                      <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"></path>
                      </svg>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-secondary-900 flex items-center">
              <span className="mr-3 text-3xl">🏆</span>
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="card p-6 space-y-4 hover:shadow-medium transition-all duration-300 animate-slide-in-right"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-secondary-900 mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-primary-600 font-semibold mb-2">
                        by {cert.issuer}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-secondary-600 mb-3">
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    {cert.link && (
                      <a 
                        href={'https://www.hackerrank.com/certificates/87cc7086c20b'}
                        className="btn btn-outline btn-sm group"
                      >
                        View Certificate
                        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </a>
                    )}
                  </div>

                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  <div>
                    <h6 className="text-sm font-semibold text-secondary-900 mb-2">Skills Covered</h6>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="tech-tag text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;