export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section id="contact" className="py-16 px-6 bg-gray-800 text-center">
  {/* Profile Picture */}
  <div className="flex justify-center mb-2">
    <img 
      src="/photo.jpeg"  // Update with your actual image path
      alt="Rushi Venkatadri"
      className="rounded-full border-4 border-gray-400 shadow-lg"
      style ={{width:"250px",height:"250px"}}
    />
  </div>
 </section>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-2">
        <h1 className="text-5xl font-bold">Rushi Venkatadri</h1>
        <p className="text-xl text-gray-400 mt-3">Aspiring Software Developer</p>
        <a 
          href="#projects" 
          className="mt-6 px-6 py-3 bg-blue-500 rounded-full text-lg font-semibold hover:bg-blue-600 transition"
        >
          View My Work
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Way2Predict</h3>
            <p className="text-gray-400 mt-2">AI-powered student prediction system.</p>
            <a 
              href="/way2predict.pdf" 
              download
              className="mt-4 block text-blue-400 hover:underline"
            >
              📄 Download Project Document
            </a>
            <a 
              href="https://github.com/rushivenkatadri/way2predict" 
              target="_blank" 
              className="mt-2 block text-blue-400 hover:underline"
            >
              🔗 View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Tourism Management System</h3>
            <p className="text-gray-400 mt-2">A web platform for seamless travel planning.</p>
            <a 
              href="project.pdf" 
              download
              className="mt-4 block text-blue-400 hover:underline"
            >
              📄 Download Project Report
            </a>
            <a 
              href="https://github.com/rushivenkatadri/tourism-management" 
              target="_blank" 
              className="mt-2 block text-blue-400 hover:underline"
            >
              🔗 View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Projects Section */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold">All My GitHub Projects</h2>
        <p className="text-gray-400 mt-2">Explore all my work on GitHub!</p>
        <a 
          href="https://github.com/rushivenkatadri?tab=repositories" 
          target="_blank" 
          className="mt-3 px-5 py-2 bg-green-500 rounded-full text-lg font-semibold hover:bg-green-600 transition"
        >
          🔗 View All Projects
        </a>
      </section>
      <section id="contact" className="py-16 px-6 bg-gray-800 text-center">
  <h2 className="text-3xl font-bold text-white">Contact Me</h2>
  <p className="text-gray-400 mt-2">Let's connect! Feel free to reach out.</p>

  {/* Contact Form */}
  <form className="mt-6 max-w-lg mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
    <input 
      type="text" 
      placeholder="Your Name" 
      className="w-full p-3 rounded-lg bg-gray-900 text-white mb-3 border border-gray-600 focus:outline-none"
    />
    <input 
      type="email" 
      placeholder="Your Email" 
      className="w-full p-3 rounded-lg bg-gray-900 text-white mb-3 border border-gray-600 focus:outline-none"
    />
    <textarea 
      placeholder="Your Message" 
      rows={4} 
      className="w-full p-3 rounded-lg bg-gray-900 text-white mb-3 border border-gray-600 focus:outline-none"
    ></textarea>
    <button 
      type="submit" 
      className="w-full p-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
    >
      Send Message
    </button>
  </form>

  {/* Contact Info */}
  <div className="mt-6">
    <p className="text-gray-400">📧 Email: <a href="mailto:rushivenkatadri@example.com" className="text-blue-400 hover:underline">rushivenkatadri@example.com</a></p>
    <p className="text-gray-400">📍 Location: India</p>
  </div>

  {/* Social Media Links */}
  <div className="flex justify-center mt-6 space-x-4">
    <a href="https://github.com/rushivenkatadri" target="_blank" className="text-gray-400 hover:text-white">
      🔗 GitHub
    </a>
    <a href="https://linkedin.com/in/rushi-venkatadri" target="_blank" className="text-gray-400 hover:text-white">
      🔗 LinkedIn
    </a>
    <a href="https://twitter.com/rushi-venkatadri" target="_blank" className="text-gray-400 hover:text-white">
      🔗 Twitter
    </a>
  </div>
</section>

    </main>
  );
}
