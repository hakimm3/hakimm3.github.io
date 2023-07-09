import React from "react";

export default function Experience(props) {
  const data = props.data.map((item) => {
    return (
      <div className="col-lg-6 my-2" key={item.title}>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title"> {item.title} </h3>
            <h6 className="card-subtitle mb-2 text-muted">
             {item.place}
            </h6>
            <p className="card-text">
             {item.description}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section className="my-3" id="experience">
        <h1>Experience</h1>
        <div className="row">{data}</div>
      </section>
    </>
  );
}
