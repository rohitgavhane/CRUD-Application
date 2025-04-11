import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaBootstrap, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center py-5">
      <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem", color: "#4A0DF4" }}>
        🚀 About This Project
      </h1>

      <h4 className="fw-semibold mb-" style={{ maxWidth: "800px" }}>
        This CRUD (Create, Read, Update, Delete) application helps you manage student records easily. It's built using modern web technologies for a fast, responsive, and interactive experience.
      </h4>
      &nbsp;
      &nbsp;
      <h3 className="fw-semibold mt-4 mb-2" style={{ color: "#5e17eb" }}>🔧 Technologies Used</h3>
      <div className="d-flex justify-content-center flex-wrap gap-4 fs-3 mb-4">
        <span><FaReact color="#61DBFB" /> React.js</span>
        <span><FaBootstrap color="#7952B3" /> Bootstrap</span>
        <span><FaNodeJs color="#68A063" /> Node.js</span>
        <span><FaDatabase color="#f0ad4e" /> MongoDB</span>
      </div>

      <h4 className="fw-semibold mt-4 mb-2" style={{ color: "#5e17eb" }}>✨ Features</h4>
      <ul className="list-unstyled">
        <li>✅ Add new student records</li>
        <li>📄 View all students in a table</li>
        <li>✏️ Edit existing student details</li>
        <li>🗑️ Delete student data</li>
        <li>📱 Fully responsive & animated UI</li>
      </ul>

      <h4 className="fw-semibold mt-5 mb-2" style={{ color: "#5e17eb" }}>👨‍💻 Developer</h4>
      <p>
        Built with ❤️ by <strong>Rohit</strong><br />
        A passionate UI/UX and Web Developer.
      </p>
      <p>
        <a href="https://github.com/rohitgavhane" target="_blank" rel="noreferrer" className="btn btn-dark">
          <FaGithub className="me-2" /> View on GitHub
        </a>
      </p>

      <h5 className="fw-semibold mt-5 mb-2" style={{ color: "#5e17eb" }}>🔮 Future Improvements</h5>
      <ul className="list-unstyled mb-0">
        <li>🔍 Search & filter functionality</li>
        <li>🔐 User authentication system</li>
        <li>📤 Export data to CSV</li>
        <li>🌙 Dark mode toggle</li>
      </ul>
    </div>
  );
};

export default About;
