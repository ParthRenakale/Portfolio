// App.jsx
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Parth Ramesh Renakale
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          B.E. Computer Engineering | Full-Stack Developer | DevOps Enthusiast
        </motion.p>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#internships">Internships</a>
          <a href="#projects">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About */}
      <motion.section
        id="about"
        className="section card"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p>
          Dedicated engineering student with a strong foundation in full-stack
          web development (MERN) and DevOps. Experienced in building scalable,
          user-centric applications and implementing CI/CD pipelines. Passionate
          about solving real-world problems with technology.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        className="section card"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          <span>MERN Stack</span>
          <span>DevOps: Jenkins, Docker, AWS</span>
          <span>Git, GitHub, Bitbucket, Jira</span>
          <span>Python, C++</span>
        </div>
      </motion.section>

      {/* Internships */}
      <motion.section
        id="internships"
        className="section card"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Internships</h2>
        <div className="timeline">
          <div>
            <h3>Tracelink – Software Engineer Intern</h3>
            <p>Apr 2025 – Present</p>
            <p>
              Worked on CI/CD pipelines, Jenkins automation, and AWS deployments.
            </p>
          </div>
          <div>
            <h3>To-Let Globe – Full Stack Developer Intern</h3>
            <p>Jan 2025 – Mar 2025</p>
            <p>
              Built MERN stack apps, JWT authentication, and optimized
              performance.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="section card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Projects</h2>
        <ul>
          <li><strong>TrekTales</strong> – Place sharing with maps & JWT login.</li>
          <li><strong>AgriAssist</strong> – Smart farming + financial insights.</li>
          <li><strong>PingMe</strong> – Real-time chat app with authentication.</li>
        </ul>
      </motion.section>

      {/* Publications */}
      <motion.section
        id="publications"
        className="section card"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Publications</h2>
        <p>
          <strong>Containerisation in Web Development: Docker and Kubernetes</strong> –
          Published in INCOFT 2025.
        </p>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="section card"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact</h2>
        <p>📞 +91-7385111218</p>
        <p>📧 prenakale@gmail.com</p>
        <p>
          🔗 <a href="https://www.linkedin.com/in/parth-renakale-71b97a324/" target="_blank">LinkedIn</a> | 
          <a href="https://github.com/ParthRenakale" target="_blank"> GitHub</a> | 
          <a href="https://leetcode.com/u/prenakale/" target="_blank"> LeetCode</a>
        </p>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Parth Renakale | Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
