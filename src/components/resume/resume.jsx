import "./resume.css";
import resume from "../../assets/resume.pdf";

function Resume() {
  return (
    <div className="component-wrapper resume-container">
      <div className="title-container">
        <h1 className="title">
          Res
          <span>ume</span>
        </h1>
        <a href={resume} download>
          <button className="download-button">Download</button>
        </a>
      </div>

      <section>
        <div className="proficiencies-container">
          <div>
            <h4>APIs</h4>
            <ul className="proficiency-list">
              <li>Apollo GraphQL</li>
              <li>GraphQL</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          <div>
            <h4>Authentication</h4>
            <ul className="proficiency-list">
              <li>JSON Web Tokens (JWT)</li>
            </ul>
          </div>

          <div>
            <h4>Back-End</h4>
            <ul className="proficiency-list">
              <li>Express</li>
              <li>MongoDB</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          <div>
            <h4>CI/CD</h4>
            <ul className="proficiency-list">
              <li>GitHub Actions</li>
            </ul>
          </div>

          <div>
            <h4>Deployment</h4>
            <ul className="proficiency-list">
              <li>MongoDB Atlas</li>
              <li>Netlify</li>
              <li>Render</li>
            </ul>
          </div>

          <div>
            <h4>Front-End</h4>
            <ul className="proficiency-list">
              <li>Bootstrap</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Vite</li>
            </ul>
          </div>

          <div>
            <h4>ORMs and Libraries</h4>
            <ul className="proficiency-list">
              <li>Mongoose</li>
              <li>Sequelize</li>
            </ul>
          </div>

          <div>
            <h4>Version Control</h4>
            <ul className="proficiency-list">
              <li>Git</li>
              <li>GitHub</li>
              <li>Gitlab</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
