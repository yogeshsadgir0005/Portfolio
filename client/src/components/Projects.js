import React, { useState } from 'react';
import img1 from "../assets/Screenshot 2025-08-30 012202.png";
import img2 from "../assets/Screenshot 2025-08-07 180358.png"
const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Earn Karo – Complete Task and Earn Platform",
      subtitle: "Reward-based Task Platform",
      description: "Built a full-stack platform where users earn rewards by completing tasks like app installs and quizzes.",
      category: "Full Stack",
      image: img1,
      link:"https://github.com/yogeshsadgir0005/earnkaro",
      technologies: [
        { name: "Node.js", color: "bg-green-100 text-green-800" },
        { name: "Express.js", color: "bg-gray-100 text-gray-800" },
        { name: "React.js", color: "bg-cyan-100 text-cyan-800" },
        { name: "MongoDB", color: "bg-emerald-100 text-emerald-800" },
        { name: "JWT", color: "bg-purple-100 text-purple-800" },
        { name: "Razor Pay API", color: "bg-blue-100 text-blue-800" },
        { name: "Webhooks", color: "bg-orange-100 text-orange-800" }
      ],
      features: [
        "Webhooks Used for Realtime tracking of install and signups",
        "Designed a responsive frontend using React.js and Tailwind CSS for smooth UX",
        "Developed secure RESTful APIs for user, task, and admin operations",
        "Implemented JWT-based authentication with role-based access control",
        "Created an admin dashboard for managing task status, payouts, and rewards",
        "Deployed frontend on Vercel, backend on Render, and used MongoDB Atlas"
      ],
      highlights: [
        { icon: "👥", label: "User Management", value: "Role-based Access" },
        { icon: "💰", label: "Payment Integration", value: "Razor Pay API" },
        { icon: "📊", label: "Real-time Tracking", value: "Webhooks" },
        { icon: "🔒", label: "Security", value: "JWT Authentication" }
      ]
    },
    {
      title: "SkillBridge – Bridging the Gap Between Talent and Opportunity",
      subtitle: "Freelance Marketplace Platform",
      description: "Built a full-stack freelance marketplace connecting clients and freelancers with secure, role-based authentication.",
      category: "Full Stack",
      image: img2,
      link:"https://github.com/yogeshsadgir0005/skillbridge",
      technologies: [
        { name: "Node.js", color: "bg-green-100 text-green-800" },
        { name: "Express.js", color: "bg-gray-100 text-gray-800" },
        { name: "React.js", color: "bg-cyan-100 text-cyan-800" },
        { name: "MongoDB", color: "bg-emerald-100 text-emerald-800" },
        { name: "Socket.IO", color: "bg-red-100 text-red-800" },
        { name: "JWT", color: "bg-purple-100 text-purple-800" },
        { name: "Tailwind CSS", color: "bg-teal-100 text-teal-800" }
      ],
      features: [
        "Implemented project posting, bidding system, and a dedicated project workspace with real-time chat using Socket.IO",
        "Database management utilized MongoDB to efficiently manage product information and user data",
        "Designed a complete project lifecycle workflow (Open → Active → Pending Approval → Completed) with approval/rejection flows",
        "Developed an admin dashboard to oversee users, projects, and applications",
        "Created a modern, fully responsive UI with Tailwind CSS, dark mode, and smooth transitions for enhanced user experience"
      ],
      highlights: [
        { icon: "💬", label: "Real-time Chat", value: "Socket.IO" },
        { icon: "🔄", label: "Project Workflow", value: "Complete Lifecycle" },
        { icon: "👨‍💼", label: "Admin Dashboard", value: "Management System" },
        { icon: "🎨", label: "Modern UI", value: "Tailwind CSS" }
      ]
    }
  ];

  const currentProject = projects[activeProject];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Project Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-secondary-100 p-1 rounded-xl">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    index === activeProject
                      ? 'bg-white text-primary-600 shadow-soft'
                      : 'text-secondary-600 hover:text-secondary-800'
                  }`}
                >
                  Project {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Project Display */}
          <div className="card overflow-hidden animate-fade-in" key={activeProject}>
            <div className="grid lg:grid-cols-1 gap-0">
              {/* Project Visual */}
              <div className="relative group overflow-hidden min-h-[400px] flex items-center justify-center">
                {/* ✅ Show image for each project */}
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                    <a 
                      href="#"
                      className="btn btn-primary btn-sm group/btn"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Live Demo
                    </a>
                    <a 
                      href={currentProject.link}
                      className="btn btn-secondary btn-sm bg-white/90 text-secondary-800 border-white/90 hover:bg-white"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 lg:p-12 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                      {currentProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900">
                    {currentProject.title}
                  </h3>
                  <p className="text-lg font-medium text-primary-600">
                    {currentProject.subtitle}
                  </p>
                  <p className="text-secondary-600 leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  {currentProject.highlights.map((highlight, index) => (
                    <div key={index} className="text-center p-3 bg-secondary-50 rounded-lg">
                      <div className="text-2xl mb-2">{highlight.icon}</div>
                      <div className="text-xs font-medium text-secondary-600 mb-1">
                        {highlight.label}
                      </div>
                      <div className="text-sm font-semibold text-secondary-900">
                        {highlight.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary-900">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {currentProject.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3 text-secondary-600">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-secondary-900">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color} hover:scale-105 transition-transform duration-200`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/yogeshsadgir0005"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline group"
            >
              View All Projects on GitHub
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
