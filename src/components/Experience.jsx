import React from "react";

export default function Experience() {
  return (
    <section className="my-3" id="experience">
      <h1>Experience</h1>
      <div className="row">
        <div className="col-lg-6 my-2">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Full Stack Developer</h3>
              <h6 className="card-subtitle mb-2 text-muted">
                PT. Era Kualitas Informasi (July 2022 - Now)
              </h6>
              <p className="card-text">
                Responsible for developing web applications using various
                technologies including Laravel and JQuery. Participating in the
                development and testing of products on a regular basis.
                Responsible for managing and updating the application
                infrastructure.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 my-2">
          <div className="card pb-1">
            <div className="card-body">
              <h3 className="card-title">Asistance Web Developer</h3>
              <h6 className="card-subtitle mb-2 text-muted">
                PT. Nocola Iot Solution (Intershipe July 2021 - September 2021)
              </h6>
              <p className="card-text">
                Experienced internship for 3 months at PT. Nocola Iot Solution as a
                Web Developer and helping develop the cems.id website, and do some stuff using wordpress, HTML, CSS, and CodeIginter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
