import './resume.css';
import resume from '../../assets/resume.pdf';

function Resume () {
  return (
    <div className="component-wrapper">
      <h1 className="title">
        Res
        <span>ume</span>
        </h1>
      <section>
        <div className="proficiencies-container">
          <div>
            <h3>Front-End</h3> 
            <ul className="proficiency-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h3>Back-End</h3>
            <ul className="proficiency-list">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
        <a href={resume} download>
          <button className="download-button">Download</button>
        </a>

      </section>
    </div>
  );
}

export default Resume;