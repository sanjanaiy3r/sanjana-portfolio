import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [formStatus, setFormStatus] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validate inputs
    const errors = {};
    if (!name || name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }
    if (!email || !isValidEmail(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!message || message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFormStatus('error');
      return;
    }

    // Create mailto link with form data
    const mailtoLink = `mailto:iyersanjana208@gmail.com?subject=Portfolio Contact from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;

    setFormStatus('success');
    setFormErrors({});
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      {/* Navigation Bar */}
      <header className="bg-[#0D324D] sticky top-0 shadow-lg z-50" aria-label="Main Navigation">
        <div className="container mx-auto flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
          <nav className="flex space-x-6 text-lg">
            <a
              href="#"
              className="text-white font-bold hover:text-[#c8d8e4] transition-all hover:underline active:underline"
              aria-label="Go to Portfolio"
            >
              My Portfolio
            </a>
            <a
              href="#projects"
              className="text-white font-bold hover:text-[#c8d8e4] transition-all hover:underline active:underline"
              aria-label="Go to Projects Section"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-white font-bold hover:text-[#c8d8e4] transition-all hover:underline active:underline"
              aria-label="Go to Skills Section"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-white font-bold hover:text-[#c8d8e4] transition-all hover:underline active:underline"
              aria-label="Go to Contact Section"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-[#c8d8e4] to-white shadow-md">
        <motion.h2
          className="text-5xl font-bold mb-4 text-[#0D324D]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Sanjana Iyer
        </motion.h2>
        <p className="text-lg text-[#0D324D]">Third-year IT undergraduate passionate about open-source collaboration, exploring new tech stacks, and research.</p>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://github.com/sanjanaiy3r"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#0D324D] text-[#0D324D] px-4 py-2 rounded-lg hover:bg-[#c8d8e4] transition-all transform hover:scale-105"
            aria-label="View my GitHub Profile"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sanjana-iyer-606552321"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#0D324D] text-[#0D324D] px-4 py-2 rounded-lg hover:bg-[#c8d8e4] transition-all transform hover:scale-105"
            aria-label="View my LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1swg0ItbJqVa0O0wNtwxJvZljwVXhTWER/view?usp=drive_link"
            download
            className="border-2 border-[#0D324D] text-[#0D324D] px-4 py-2 rounded-lg hover:bg-[#c8d8e4] transition-all transform hover:scale-105"
            aria-label="Download my Resume"
          >
            Resume
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#0D324D] mb-10">
          Projects
        </h2>
        <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Project 1 */}
          <div className="bg-gradient-to-br from-[#f2f2f2] to-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-2 text-[#0D324D]">Car Plate Vision</h3>
            <p className="text-[#0D324D] mb-4">Built a real-time car number plate detection system using Python, OpenCV, and EasyOCR. It extracts plate information from images and retrieves car details from an SQLite database for automated parking management.</p>
            <a
              href="https://github.com/sanjanaiy3r/Car-Number-Plate-Scanner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D324D] underline hover:text-[#c8d8e4]"
              aria-label="View Project 1 on GitHub"
            >
              View on GitHub
            </a>
          </div>
          {/* Project 2 */}
          <div className="bg-gradient-to-br from-[#f2f2f2] to-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-2 text-[#0D324D]">Cloth-Aid Management System</h3>
            <p className="text-[#0D324D] mb-4">Developed a scalable Cloth-Aid Management System using Java and JavaFX, featuring real-time tracking, inventory management, and secure donation processing for charitable organizations.</p>
            <a
              href="https://github.com/sanjanaiy3r/ClothAid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D324D] underline hover:text-[#c8d8e4]"
              aria-label="View Project 2 on GitHub"
            >
              View on GitHub
            </a>
          </div>
          {/* Project 3 */}
          <div className="bg-gradient-to-br from-[#f2f2f2] to-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-2 text-[#0D324D]">CasaCurate: Home Decor </h3>
            <p className="text-[#0D324D] mb-4">Developed a web platform using React and Node.js for home decor inspiration and shopping, featuring a product catalog, personalized quiz, and backend integration for smooth functionality.</p>
            <a
              href="https://github.com/sanjanaiy3r/CasaCurate_Home-Decor-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D324D] underline hover:text-[#c8d8e4]"
              aria-label="View Project 3 on GitHub"
            >
              View on GitHub
            </a>
          </div>
          {/* Project 4 */}
          <div className="bg-gradient-to-br from-[#f2f2f2] to-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-2 text-[#0D324D]">Payment Gateway Integration</h3>
            <p className="text-[#0D324D] mb-4">Integrated Razorpay API for secure donation processing in test mode. The system allows users to donate via card, net banking, and wallets, with form validation, a seamless interface, and confirmation pop-ups for a smooth user experience.</p>
            <a
              href="https://github.com/sanjanaiy3r/Payment-Gateway-Integration"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0D324D] underline hover:text-[#c8d8e4]"
              aria-label="View Project 4 on GitHub"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section - Modified */}
      <section id="skills" className="py-20 bg-[#c8d8e4]">
        <h2 className="text-4xl font-bold text-center text-[#0D324D] mb-10">
          Skills
        </h2>
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {[
            "HTML", "CSS", "Java", "Python", "Figma",
            "JavaScript", "SQLite", "C Programming",
            "API Integration", "React", "Node",
            "Express", "Microsoft Word", "JavaFX", "VS Code"
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-white px-4 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform text-[#0D324D]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section - Modified */}
      <section id="contact" className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#0D324D] mb-6">Contact</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          {formStatus === 'error' && (
            <div className="text-red-500 text-center">
              <p>Please correct the errors below.</p>
            </div>
          )}
          {formStatus === 'success' && (
            <div className="text-green-500 text-center">
              <p>Your message has been sent successfully!</p>
            </div>
          )}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={`w-full px-4 py-2 border ${
                formErrors.name ? 'border-red-500' : 'border-[#0D324D]'
              } rounded-lg focus:outline-none`}
              aria-label="Enter your name"
              required
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`w-full px-4 py-2 border ${
                formErrors.email ? 'border-red-500' : 'border-[#0D324D]'
              } rounded-lg focus:outline-none`}
              aria-label="Enter your email"
              required
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className={`w-full px-4 py-2 border ${
                formErrors.message ? 'border-red-500' : 'border-[#0D324D]'
              } rounded-lg focus:outline-none`}
              aria-label="Enter your message"
              required
            />
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#0D324D] text-white py-3 rounded-lg shadow-lg hover:bg-[#0b283d] transition-all"
            aria-label="Submit your message"
          >
            Send Message
          </button>
        </form>
        <p className="text-center mt-4 text-[#0D324D]">
          You can also reach out to me at:{" "}
          <a href="mailto:iyersanjana208@gmail.com" className="underline">
            iyersanjana208@gmail.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D324D] text-white text-center py-6">
        <p>&copy; 2024 Sanjana Iyer.</p>
      </footer>
    </div>
  );
}

export default App;
