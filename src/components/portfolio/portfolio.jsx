import './portfolio.css';
import Project from './project/project.jsx';

function Portfolio () {
  return (
    <div className="component-wrapper">
      <h1 className='title'>
        Port
        <span>folio</span>
      </h1>
      <section className="projects">
        <Project imageName="bookshelf.gif" title="Bookshelf" link="https://selmgar.github.io/my-book-list/my-book-list.html" githubRepo="https://github.com/selmgar/my-book-list" />
        <Project imageName="weatherdashboard.gif" title="Weather Dash" link="https://weather-dashboard-zhx7.onrender.com/" githubRepo="https://github.com/selmgar/Weather-Dashboard" />
        <Project title="Project 3" link="" githubRepo="" />
        <Project title="Project 4" link="" githubRepo="" />
      </section>
    </div>
  );
}

export default Portfolio;