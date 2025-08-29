import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: '🚀',
      title: 'Performance Focused',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: '💡',
      title: 'Innovation Driven',
      description: 'Always exploring new technologies and best practices'
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description: 'Working effectively with cross-functional teams'
    }
  ];

  const handleDownload = (e) => {
    e.preventDefault();
    fetch('/yogesh_Resume.pdf')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Yogesh_Sadgir_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert('Failed to download file. Please try again.'));
  };

  return (
    <section id="about" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
                  {/* Image Section */}
          <div className="relative animate-slide-in-left">
            <div className="relative z-10">
              <div className="w-full h-auto rounded-2xl shadow-large bg-white aspect-[4/5]  flex items-center justify-center text-white text-8xl font-bold">
                        <img 
 src="https://www.workiy.com/sites/default/files/inline-images/MERN-logo.png" 
  alt="MERN Logo" 
  className="-rotate-90"
/>

              </div>
      
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl -z-10"></div>

            {/* Floating Achievement Cards */}
         
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-900">
                Full-Stack Developer & Problem Solver
              </h3>
              <div className="space-y-4 text-secondary-600 text-lg leading-relaxed">
                <p>
                  I'm a passionate B.Tech IT Engineering student at <span className="font-semibold text-primary-600">Dy Patil School of Engineering & Technology</span>,
                  with a strong focus on full-stack web development using the MERN stack.
                </p>
                <p>
                  With hands-on experience as a <span className="font-semibold text-primary-600">Full-Stack Developer Intern at Innovative Staffing</span>,
                  I've developed high-performance web applications that increased client engagement by 20%
                  and improved web performance by 20-25%.
                </p>
                <p>
                  I specialize in creating scalable, responsive web applications using modern technologies
                  like React.js, Node.js, Express.js, and MongoDB. My goal is to write clean, efficient
                  code that delivers exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-200">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-secondary-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
  href="/yogesh_Resume.pdf"
  download="Yogesh_Sadgir_Resume.pdf"
  className="btn btn-primary group"
>
  Download Resume
  <svg
    className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
</a>


              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-outline"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
