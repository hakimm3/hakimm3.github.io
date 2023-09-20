import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Experience from "./components/Experience";
import ExperienceData from "./data/Experience";

import Education from "./components/Education";
import EducationData from "./data/Education";

import Project from "./components/Project";
import ProjectData from "./data/Project";

import "./assets/style.css";
import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    // if not have location permission
    if(location.latitude === null && location.longitude === null){
      setLocation({
        latitude: 0,
        longitude: 0,
      });
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
      setLocation({
        latitude: 0,
        longitude: 0,
      });
    }

    if(location.latitude !== null && location.longitude !== null){
      console.log("Geolocation is supported by this browser.");
    }



  }, [location.latitude, location.longitude]);

  var templateParams = {
    from_name: "Pengunjung",
    from_email: "Unknown",
    reply_to: "Unknown",
    message:
      "Pengunjung berada di " +
      location.latitude +
      ", " +
      location.longitude +
      "",
  };

  emailjs
    .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams)
    .then(
      function (response) {
        console.log("Message sent!");
      },
      function (error) {
        console.log("Message failed to send!");
      }
    );

  return (
    <div className="container">
      <div className="row justify-content-center">
        <main className="col-md-8 bg-dark">
          <Navbar />
          <Introduction />
          <Experience data={ExperienceData} />
          <Education data={EducationData} />
          <Project data={ProjectData}/>
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
