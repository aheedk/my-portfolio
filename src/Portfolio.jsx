import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* Header with color and animated title/nav */}
      <header className="header">
        <motion.h1
          className="name"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Aheed Kamil
        </motion.h1>
        <nav className="nav">
          {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ scale: 1.1, color: 'var(--color-accent)' }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </header>

      {/* About Section with subtle entrance */}
      <motion.section
        id="about"
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2>About Me</h2>
        <p>
          Computer Science student at University of South Florida (Expected May 2026) with hands-on experience in full-stack development,
          data crawling, and agile workflows.
        </p>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2>Experience</h2>
        {[
          {
            title: 'Software Engineering Intern',
            org: 'TopicTide',
            date: 'Aug 2024 - Present',
            bullets: [
              'Utilized Jira for seamless Agile workflow.',
              'Designed and developed the company website interface.',
              'Built a Golang crawler to gather Reddit data, stored in MongoDB.',
              'Optimized React.js front-end components for cross-device compatibility.',
              'Conducted thorough testing and debugging to boost reliability.'
            ]
          },
          {
            title: 'Accounting Intern',
            org: 'Khan, Arndt & Associates, P.A.',
            date: 'May 2022 - Aug 2022',
            bullets: [
              'Managed financial data in Excel with accurate reporting.',
              'Processed and analyzed documents to extract key figures.'
            ]
          }
        ].map((exp, i) => (
          <motion.div
            key={exp.title}
            className="card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>{exp.title}</h3>
            <p className="subtitle">
              {exp.org} — {exp.date}
            </p>
            <ul>
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2>Projects</h2>
        <div className="projects-grid">
          {[
            {
              title: 'Workly',
              desc: 'Web app to track employee work hours, built with React and Figma designs.'
            },
            {
              title: 'Weather App',
              desc: 'Dynamic weather app using vanilla JS, HTML, CSS with real-time API data.'
            },
            {
              title: 'Wordle (CLI)',
              desc: 'Python CLI game using random, sys, termcolor with responsive feedback.'
            }
          ].map((proj, k) => (
            <motion.div
              key={proj.title}
              className="card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4>{proj.title}</h4>
              <p>{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h2>Education & Clubs</h2>
        <div className="card">
          <h3>University of South Florida</h3>
          <p className="subtitle">B.S. in Computer Science — Expected May 2026</p>
          <p>GPA: 3.45</p>
          <p><strong>Courses:</strong> Data Structures, Algorithms, Program Design, Programming Concepts.</p>
        </div>
        <div className="card">
          <h3>Clubs &amp; Organizations</h3>
          <ul>
            <li>Society of Competitive Programming</li>
            <li>SHPE</li>
            <li>NSBE</li>
            <li>TMC (Treasure) — 2024-Present</li>
          </ul>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <h2>Get In Touch</h2>
        <a className="button" href="https://github.com/aheedk" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Aheed Kamil
      </footer>
    </div>
  );
}
