import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTools } from "@fortawesome/free-solid-svg-icons";

export default function Project(props) {
  return (
    <>
      <section className="my-3" id="experience">
        <h1>Projects</h1>
        <div className="row">
          {props.data.map((item) => {
            return (
              <section className="col-lg-12 my-2" key={item.name}>
                <div className="card" id="card-experience">
                  <div className="card-body h-100">
                      <h4 className="card-title"> {item.name} </h4>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <FontAwesomeIcon icon={faCalendar} /> {item.year} - {item.isPrivate ? "Private " : "Public "}
                       Project
                    </h6>
                    <p className="card-text"> 
                      {item.description}
                    </p>
                    <p>
                      {
                        item.technologies.map((tech) => {
                          return (
                            <span className="badge text-bg-primary ms-2" key={tech}>
                              <FontAwesomeIcon icon={faTools} /> {tech}
                            </span>
                          );
                        })
                      }
                    </p>
                  </div>
                      { !item.isPrivate && 
                    <div className="card-footer">
                      <a target="_blank" href={item.website} className="btn btn-outline-primary text-white">
                        <i className="fas fa-external-link-alt"></i> View Project
                      </a>
                      <a target="_blank" href={item.repository} className="btn btn-outline-info text-white ms-2">
                        <i className="fas fa-external-link-alt"></i> View Repository
                      </a>
                  </div>
                      }
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
