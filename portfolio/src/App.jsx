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
