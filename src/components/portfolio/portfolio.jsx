import './portfolio.css';
import Project from './project/project.jsx';

function Portfolio () {
  return (
    <div>
      <h1 className='title'>Portfolio</h1>
      <section class="projects">
        <Project imageName="" title="Project 1" link="" githubRepo="" />
        <Project imageName="" title="Project 2" link="" githubRepo="" />
        <Project imageName="" title="Project 3" link="" githubRepo="" />
        <Project imageName="" title="Project 4" link="" githubRepo="" />
      </section>
    </div>
  );
}

export default Portfolio;