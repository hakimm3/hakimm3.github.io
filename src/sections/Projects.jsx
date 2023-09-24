import Card from "../components/Card";
import ProjectsData from "../data/Project";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTools } from "@fortawesome/free-solid-svg-icons";

export default function Projects({ id }) {
  return (
    <section className="my-3 row" id={id}>
      <h2>Projects</h2>
      {ProjectsData.map((item) => {
        return (
          <div className="col-lg-12 my-2" key={item.name}>
            <Card
              title={item.name}
              sub_title={
                <div>
                <FontAwesomeIcon icon={faCalendar} /> {item.year} - 
                {(item.isPrivate ? " Private " : " Public ") }
                Project
                </div>
              }
              link="#"
              text={
                item.description && (
                  <div>
                    <p> {item.description} </p>
                    <p>
                      {item.technologies.map((tech) => {
                        return (
                          <span
                            className="badge text-bg-primary ms-2"
                            key={tech}
                          >
                            <FontAwesomeIcon icon={faTools} /> {tech}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                )
              }
              footer={
                !item.isPrivate && (
                  <div>
                    <a
                      target="_blank"
                      href={item.website}
                      className="btn btn-outline-primary text-white"
                    >
                      <i className="fas fa-external-link-alt"></i> View Project
                    </a>
                    <a
                      target="_blank"
                      href={item.repository}
                      className="btn btn-outline-info text-white ms-2"
                    >
                      <i className="fas fa-external-link-alt"></i> View
                      Repository
                    </a>
                  </div>
                )
              }
            />
          </div>
        );
      })}
    </section>
  );
}
