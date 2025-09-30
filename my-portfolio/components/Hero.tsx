"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const skills = ["AI", "Web Dev", "Cybersecurity"];

  return (
    <section className="relative h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <motion.div
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 text-center font-semibold fixed top-0 left-0 z-50 shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        👋 Hello, I’m Rushi Venkatadri — Aspiring Software Developer & AI Enthusiast
      </motion.div>

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

      {/* Profile Photo and Intro */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        <motion.img
          src="/photo.jpeg"
          alt="Rushi Venkatadri"
          className="rounded-full border-4 border-blue-500 shadow-2xl w-52 h-52 object-cover"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
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
            I’m a passionate <span className="text-blue-400">CSE Student</span> and aspiring <span className="text-blue-400">Software Developer</span>. I love building creative projects with <span className="text-blue-400">AI, Web Development, and Cybersecurity</span>.
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
  );
}
