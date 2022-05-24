import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy as ExperienceIcon,
  faUsers as ClientIcon,
  faFolderTree as ProjectIcon,
} from "@fortawesome/free-solid-svg-icons";
import Me from "../../assets/images/me-about.svg";

const About = () => {
  return (
    <section id="about">
      <div data-aos="zoom-in-up">
        <h5>Get To Know More</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt="About image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <div className="about__icon">
                  <FontAwesomeIcon icon={ExperienceIcon} />
                </div>
                <h5>Experience</h5>
                <small>4+ Years</small>
              </article>

              <article className="about__card">
                <div className="about__icon">
                  <FontAwesomeIcon icon={ClientIcon} />
                </div>
                <h5>Clients</h5>
                <small>60+ Worldwide</small>
              </article>

              <article className="about__card">
                <div className="about__icon">
                  <FontAwesomeIcon icon={ProjectIcon} />
                </div>
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur fuga veniam inventore est architecto eligendi eaque
              mollitia illum non. Aliquid minima quidem non! Rerum qui dicta
              praesentium nemo ut aspernatur!
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
