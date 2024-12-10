import "./about-me.css";
import profilePicture from "../../assets/me.jpg";

function AboutMe() {
  return (
    <div className="component-wrapper about-me-container">
      <h1 className="title">
        About<span className="me">Me</span>
      </h1>
      <section>
        <img
          className="profile-picture"
          src={profilePicture}
          alt="Selena Garcia"
        />
        <p>
          Hello! I’m Selena Garcia, a passionate web developer focused on
          creating innovative web applications.
        </p>

        <p>
          I gained a solid foundation through an intensive bootcamp at UTSA College
          and am constantly learning new technologies to stay ahead in the
          field. You can explore my technical skills further on my resume page.
        </p>

        <p>
          I’m excited to collaborate on new projects and contribute to building
          impactful web solutions.
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
