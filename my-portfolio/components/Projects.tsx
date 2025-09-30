"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Way2Predict",
      description: "AI-powered student prediction system.",
      github: "https://github.com/rushivenkatadri/way2predict",
      document: "/way2predict.pdf",
    },
    {
      title: "Tourism Management System",
      description: "A web platform for seamless travel planning.",
      github: "https://github.com/rushivenkatadri/tourism-management",
      document: "/tourism-management.pdf",
    },
    // Add more projects here if needed
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <motion.h2
        className="text-3xl font-bold text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-4 flex flex-col space-y-2">
              <a
                href={project.document}
                download
                className="text-blue-400 hover:underline"
              >
                📄 Download Project Document
              </a>
              <a
                href={project.github}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                🔗 View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* All GitHub Projects Link */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <a
          href="https://github.com/rushivenkatadri?tab=repositories"
          target="_blank"
          className="px-5 py-3 bg-green-500 rounded-full text-lg font-semibold hover:bg-green-600 transition"
        >
          🔗 View All GitHub Projects
        </a>
      </motion.div>
    </section>
  );
}
