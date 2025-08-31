import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";

const projects = [
  {
    id: 1,
    title: "Recipe Blog",
    description: "A modern recipe blog with dark mode and search functionality.",
    image: "/recipes.png",
    link: "/recipe"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
    image: "/portfolio.png",
    link: "/",
  },
  {
    id: 3,
    title: "Art and Creativity",
    description: "Showcasing my art and creativity",
    image: "/instagram.png",
    link: "https://www.instagram.com/gigidrawsit/",
  },
  {
    id: 4,
    title: "Tkinter Project",
    description: "A Python desktop app built with Tkinter.",
    image: "/missingNumberGame.png",
    link: "https://github.com/geegeeee/missingNumberGameApp.git",
  },
];

const Portfolio = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [showInstagram, setShowInstagram] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      title: title,
      message: message,
      name: name,
      email: email,
      time: new Date().toLocaleString(),
    };

    emailjs.send(
      "service_giginwe",
      "template_kte95tk",
      templateParams,
      "ooRLgCbIdOoLMV8lG"
    ).then(
      (response) => {
        setStatus("Message sent successfully! I will get back to you soon!");
        setName("");
        setEmail("");
        setTitle("");
        setMessage("");
      },
      (error) => {
        setStatus("Failed to send message. Please try again.");
      }
    )
  }

  function useOnScreen(ref){
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect (() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {threshold : 0.1} // triggers when 10% visible
      );
      if (ref.current) { observer.observe(ref.current); }
      return () => { observer.disconnect(); }
    }, [ref]);

    return isIntersecting;
  }

  const AnimatedSection = React.memo(({ children }) => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
  
    return (
      <section
        ref={ref}
        className={`transform transition-opacity transition-transform duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {children}
      </section>
    );
  });  

  return (
    <div className="container mx-auto p-10">
      <AnimatedSection>

      <Helmet>
        <title>Gigi Nwe Portfolio</title>
      </Helmet>

      {/* Header */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-6">
        My Portfolio
      </h1>

      {/* About Me Section */}
      <section className="text-center mb-12">
        <div className="relative w-40 h-40 md:w-60 md:h-60 mx-auto mb-4 rounded-full shadow-lg overflow-hidden">
          <img
            src="/profile.jpg"
            alt="Profile 1"
            className="absolute inset-0 w-full h-full object-cover rounded-full opacity-100 transition-opacity duration-4s animate-fade"
          />
          <img
            src="/profile_photo.jpeg"
            alt="Profile 2"
            className="absolute inset-0 w-full h-full object-cover rounded-full opacity-0 transition-opacity duration-4s animate-[fade_9s_infinite_2s]"
          />
        </div>

        <h1 className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">Gigi Nwe</h1>
        <h2 className="text-lg md:text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4">Myat Theingi Nwe</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-7">
          My name is Gigi Nwe, and I am a Computer Science graduate from RMIT University.
          I'm an avid front-end developer who loves creating beautiful and minimalist, yet functional web experiences. 
          Passionate in Front-End and Full-Stack Website Development, Machine Learning, and Artificial Intelligence. 
          Proficient in React, JavaScript, HTML, CSS, Tailwind, PyQt, C++, C#, GitHub, AWS, and Azure.
        </p>

        {/* Social Links */}
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://github.com/geegeeee?tab=repositories" className="text-blue-700 dark:text-blue-300 hover:text-blue-500">
            🔗 GitHub
          </a>
          <a href="https://www.linkedin.com/in/gigi-nwe-58ab1b165/" className="text-blue-700 dark:text-blue-300 hover:text-blue-500">
            🔗 LinkedIn
          </a>
          <a 
            href="/resume.pdf"
            download="GigiNwe_resume.pdf"
            className="text-blue-700 dark:text-blue-300 hover:text-blue-500"
            >
            🔗 Resume
          </a>
        </div>
      </section>
      </AnimatedSection>

      {/* Projects Section */}
      
      <section className="p-5" id="projects">
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
                {project.id === 3 ? (
                  <button
                    onClick={() => setShowInstagram(true)}
                    className="inline-block mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
                  >
                    View Instagram
                  </button>
                ) : (
                  <a
                    href={project.link}
                    className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    View Project
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </section>
      

      {/* Contact Me Section */}
      <section className="mt-12 text-center p-5" id="contact">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Contact Me
        </h2>
        <form
          onSubmit={sendEmail}
          className="max-w-md mx-auto flex flex-col space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 border rounded-lg"
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 border rounded-lg h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
          {status && <p className="mt-2 text-sm">{status}</p>}
        </form>
      </section>
      
      {/* Instagram Popup */}
      {showInstagram && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-11/12 md:w-3/4 lg:w-1/2 p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowInstagram(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              ✖
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
              My Instagram - @gigidrawsit
            </h2>

            {/* Embedded Instagram */}
            <div className="flex justify-center">
              <iframe
                src="https://www.instagram.com/gigidrawsit/embed"
                className="w-full h-[500px] rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}
  </div>
  );
};

export default Portfolio;
