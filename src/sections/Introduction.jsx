import React from "react";
import my_photo from "../assets/my_photo_light.jpg";

export default function Introduction() {
  return (
    <div className="row" id="about">
      <div className="col-md-4 text-center mt-2">
        <img
          src={my_photo}
          alt="My Photo"
          className="img-thumbnail p-0"
          id="my-photo"
        />
      </div>
      <div className="col-md-8 mt-2">
        <h1>Hi There!</h1>
        <p>
        I am a full stack web developer with 3 years of experience in the tech
        industry. I have basic skills in programming languages such as HTML,
        CSS, JavaScript, JQuery,PHP, and SQL, and have experience using
        frameworks such as Laravel and Bootstrap. I have worked on various web
        development projects, including the creation of an e-commerce website
        and project management web application. I also have experience managing
        projects using tools such as ClickUp, Trello, Etc. I enjoy learning new technologies
        and always strive to improve my skills in web development. I am
        interested in full stack development because of my ability to manage
        projects from design to implementation. If you need assistance with web
        development, do not hesitate to contact me through LinkedIn or email at
        trisaabdul@gmail.com
        </p>
      </div>
    </div>
  );
}
