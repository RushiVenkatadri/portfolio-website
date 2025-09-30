"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react"; 


export default function App() {
  const skills = ["AI", "Web Dev", "Cybersecurity"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-black bg-opacity-30 fixed top-0 w-full z-50">
        <h1 className="text-2xl font-bold tracking-wide">Rushi Venkatadri K</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
       <section className="relative h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Top Greeting Banner */}
      <motion.div
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 text-center font-semibold fixed top-0 left-0 z-50 shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        👋 Hello, I’m Rushi Venkatadri — Aspiring Software Developer & AI Enthusiast
      </motion.div>

      {/* Floating Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="w-72 h-72 bg-blue-500/30 rounded-full absolute top-10 left-10"
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="w-96 h-96 bg-purple-500/20 rounded-full absolute bottom-10 right-10"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </div>

      {/* Skill Tags */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            className="bg-blue-500/70 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Profile Photo and Intro Text */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        {/* Profile Photo */}
        <motion.img
          src="/photo.jpeg" // make sure your image is in public/photo.jpeg
          alt="Rushi Venkatadri"
          className="rounded-full border-4 border-blue-500 shadow-2xl w-52 h-52 object-cover"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Intro Text */}
        <motion.div
          className="md:ml-12 mt-6 md:mt-0 max-w-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold mb-4">
            Hi, I’m <span className="text-blue-400">Rushi</span>
          </h1>
          <p className="text-lg mb-6 text-gray-300">
            I’m a passionate <span className="text-blue-400">CSE Student</span>{" "}
            and aspiring <span className="text-blue-400">Software Developer</span>.  
            I love building creative projects with <span className="text-blue-400">AI, Web Development, and Cybersecurity</span>.
          </p>
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-blue-500 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-gray-900 text-center md:text-left"
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-blue-400"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
      {" "}Hi, I’m Rushi Venkatadri, a Computer Science and Engineering student with a deep interest in software development, AI, and cybersecurity. I love building projects that are both technically challenging and practically useful—whether it’s an AI-powered prediction system or a web platform for travel management. Beyond academics, I’m exploring areas like bug bounty, system design, and operating systems, with the goal of becoming a well-rounded developer and security professional.
My vision is to combine creativity with technology to craft solutions that make a difference, while constantly pushing myself to grow as a developer.          <span className="text-blue-400">Cybersecurity</span>,{" "}
          <span className="text-blue-400">AI</span>, and building{" "}
          <span className="text-blue-400">cool web apps</span>. Currently, I’m
          working on projects that showcase my creativity and technical skills.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 text-blue-400"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Tourism System", "Way2Predict", "DevGuard"].map((project, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-500/50 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project}
              </h3>
              <p className="text-gray-400">
                A cool project showcasing my skills in{" "}
                {project === "DevGuard" ? "AI + Security" : "Web Development"}.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}

          <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-center text-white"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let’s Connect
      </motion.h2>
      <p className="text-gray-400 mb-12">
        Feel free to reach out to me. I’d love to collaborate and share ideas!
      </p>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Email */}
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4 hover:bg-gray-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          <Mail className="w-8 h-8 text-blue-400" />
          <div className="text-left">
            <h3 className="font-semibold text-lg">Email</h3>
            <a
              href="mailto:rushivenkatadri@example.com"
              className="text-blue-400 hover:underline"
            >
              rushivenkatadri@example.com
            </a>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4 hover:bg-gray-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          <MapPin className="w-8 h-8 text-green-400" />
          <div className="text-left">
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-gray-300">India</p>
          </div>
        </motion.div>

        {/* GitHub */}
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4 hover:bg-gray-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          <Github className="w-8 h-8 text-gray-300" />
          <div className="text-left">
            <h3 className="font-semibold text-lg">GitHub</h3>
            <a
              href="https://github.com/rushivenkatadri"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              github.com/rushivenkatadri
            </a>
          </div>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4 hover:bg-gray-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          <Linkedin className="w-8 h-8 text-blue-500" />
          <div className="text-left">
            <h3 className="font-semibold text-lg">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/rushi-venkatadri"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/rushi-venkatadri
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  


      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Rushi Venkatadri | Built with ❤️ and
        Framer Motion
      </footer>
    </div>
  );
}
