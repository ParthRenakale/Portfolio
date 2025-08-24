// App.jsx
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <motion.section
  id="projects"
  className="section card"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>
  <h2>Projects</h2>
  <div className="projects-grid">

    <div className="project-card">
      <h3>TrekTales</h3>
      <p>
        A full-stack location-sharing platform with interactive maps (Mapbox/Leaflet).
        Users can share, explore, and favorite locations with secure JWT-based login.
      </p>
      <div className="btns">
        <a href="https://github.com/ParthRenakale" className="github" target="_blank">GitHub</a>
        <a href="#" className="demo">Live Demo</a>
      </div>
    </div>

    <div className="project-card">
      <h3>AgriAssist</h3>
      <p>
        A smart farming platform for purchasing seeds/tools, tracking yields,
        and analyzing multi-year crop data. Includes financial advisory suggestions
        and interactive dashboards.
      </p>
      <div className="btns">
        <a href="https://github.com/ParthRenakale" className="github" target="_blank">GitHub</a>
        <a href="#" className="demo">Live Demo</a>
      </div>
    </div>

    <div className="project-card">
      <h3>PingMe</h3>
      <p>
        A real-time chat application with room-based chat, socket.io integration,
        and secure JWT authentication to manage sessions across users.
      </p>
      <div className="btns">
        <a href="https://github.com/ParthRenakale" className="github" target="_blank">GitHub</a>
        <a href="#" className="demo">Live Demo</a>
      </div>
    </div>

  </div>
</motion.section>
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
      {/* Projects */}
<motion.section
  id="projects"
  className="section card"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>
  <h2>Projects</h2>
  <div className="projects-grid">
    <div className="project-card">
      <h3>TrekTales</h3>
      <p>
        A full-stack place sharing platform with interactive maps (Mapbox/Leaflet).
        Users can share, explore, and favorite locations with secure JWT-based login.
      </p>
      <a href="https://github.com/ParthRenakale" target="_blank">🔗 GitHub</a>
    </div>

    <div className="project-card">
      <h3>AgriAssist</h3>
      <p>
        A smart farming platform for purchasing seeds/tools, tracking yields,
        and analyzing multi-year crop data. Includes financial advisory suggestions
        and interactive dashboards.
      </p>
      <a href="https://github.com/ParthRenakale" target="_blank">🔗 GitHub</a>
    </div>

    <div className="project-card">
      <h3>PingMe</h3>
      <p>
        A real-time chat application with room-based chat, socket.io integration,
        and secure JWT authentication to manage sessions across users.
      </p>
      <a href="https://github.com/ParthRenakale" target="_blank">🔗 GitHub</a>
    </div>
  </div>
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
