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
            <Card>
              <Card.Header title={item.name} sub_title={item.year + " " + (item.isPrivate ? "Private Project" : "Public Project")}/>
              <Card.Body text={item.description}/>
              <Card.Footer>
                {!item.isPrivate &&
                   <div>
                     <a href={item.repository} className="btn btn-outline-info">View Code</a>
                      <a href={item.website} className="btn btn-outline-primary mx-2">View Webiste</a>
                   </div>
                }
              </Card.Footer>
            </Card>
          </div>
        );
      })}
    </section>
  );
}
