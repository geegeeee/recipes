import React from "react";

const projects = [
  {
    id: 1,
    title: "Recipe Blog",
    description: "A modern recipe blog with dark mode and search functionality.",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/portfolio",
  },
  {
    id: 3,
    title: "Art and Creativity",
    description: "Showcasing my art and creativity",
    image: "https://images.unsplash.com/photo-1665470909901-162912ec16f7?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.instagram.com/gigidrawsit/",
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-6">
        My Portfolio
      </h1>

      {/* About Me Section */}
      <section className="text-center mb-12">
      <img
          src="/profile_photo.jpeg"
          alt="Profile"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full mx-auto shadow-lg mb-4"
        />
        <h1 className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">Gigi Nwe</h1>
        <h2 className="text-lg md:text-2xl font-semibold text-gray-600 dark:text-white mb-4">Myat Theingi Nwe</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-7">
          I'm a passionate front-end developer who loves creating beautiful and functional web experiences. 
          Passionate in front-end website development, Machine Learning, and Artificial Intelligence. 
          Proficient in React, HTML, CSS, JavaScript, PyQt, C++, C#, GitHub, AWS, and Azure.
        </p>

        {/* Social Links */}
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://github.com/geegeeee?tab=repositories" className="text-gray-900 dark:text-white hover:text-blue-500">
            🔗 GitHub
          </a>
          <a href="https://www.linkedin.com/in/gigi-nwe-58ab1b165/" className="text-gray-900 dark:text-white hover:text-blue-500">
            🔗 LinkedIn
          </a>
          <a 
            href="/resume.pdf"
            download="GigiNwe_resume.pdf"
            className="text-gray-900 dark:text-white hover:text-blue-500"
            >
            🔗 Resume
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-6">
        🏆 Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
