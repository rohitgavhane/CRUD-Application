import React from 'react';
import './App.css';
import { FaDatabase } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <motion.div
        className="container mt-5 flex-grow-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="card p-5 shadow"
          style={{
            background: 'linear-gradient(to right, #2A0845, #8D5BFF)',
            color: 'white',
            borderRadius: '20px',
          }}
        >
          <h1 className="text-center fw-bold mb-3">
            Welcome to the CRUD Application
          </h1>
          <h1 className="text-center fw-bold mb-3">
            <FaDatabase />{' '}
            <Typewriter
              words={['Create.', 'Read.', 'Update.', 'Delete.']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p className="text-center mb-4">
            Build, Read, Update, and Delete your data easily with this sleek and modern UI.
          </p>
          <p className="text-center">Bootstrap + React = Rapid Development 💡</p>

          <div className="text-center mt-4">
            <motion.a
              href="/addstudent"
              whileHover={{
                scale: 1.08,
                backgroundColor: '#7f55f6',
                boxShadow: '0 0 12px #a974f2',
              }}
              whileTap={{ scale: 0.75 }}
              className="btn btn-primary btn-lg"
              style={{
                background: 'linear-gradient(to right, #4A0DF4, #c58aff)',
                border: 'none',
                color: 'white',
                padding: '12px 35px',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '12px',
                transition: '0.3s ease-in-out',
              }}
            >
              🚀 Get Started
            </motion.a>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
