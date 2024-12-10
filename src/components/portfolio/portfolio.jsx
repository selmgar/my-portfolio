import './portfolio.css';
import Project from './project/project.jsx';

function Portfolio () {
  return (
    <div className="component-wrapper portfolio-container">
      <h1 className='title'>
        Port
        <span>folio</span>
      </h1>
      <section className="projects">
        <Project imageName="bananaflix" title="BananaFlix" link="https://bananaflix-fdyk.onrender.com/" githubRepo="https://github.com/selmgar/bananaflix" />
        <Project imageName="booksearch" title="Book Search" link="https://book-search-engine-xk7t.onrender.com/" githubRepo="https://github.com/selmgar/book-search-engine"/>
        <Project imageName="bookshelf" title="Bookshelf" link="https://selmgar.github.io/my-book-list/my-book-list.html" githubRepo="https://github.com/selmgar/my-book-list" />
        <Project imageName="coding-quiz" title="Coding Quiz" link="https://coding-quiz-6lep.onrender.com" githubRepo="https://github.com/selmgar/coding-quiz" />
        <Project imageName="weatherdashboard" title="Weather Dash" link="https://weather-dashboard-zhx7.onrender.com/" githubRepo="https://github.com/selmgar/Weather-Dashboard" />
      </section>
    </div>
  );
}

export default Portfolio;