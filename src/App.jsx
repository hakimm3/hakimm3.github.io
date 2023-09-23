import Navbar from "./sections/Navbar";
import Introduction from "./sections/Introduction";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import "./assets/style.css";
import { useEffect, useState } from "react";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";

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

  // var templateParams = {
  //   from_name: "Pengunjung",
  //   from_email: "Unknown",
  //   reply_to: "Unknown",
  //   message:
  //     "Pengunjung berada di " +
  //     location.latitude +
  //     ", " +
  //     location.longitude +
  //     "",
  // };

  // emailjs
  //   .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams)
  //   .then(
  //     function (response) {
  //       console.log("Message sent!");
  //     },
  //     function (error) {
  //       console.log("Message failed to send!");
  //     }
  //   );

  return (
    <div className="container">
      <div className="row justify-content-center">
        <main className="col-md-8 bg-dark">
          <Navbar />
          <Introduction />
          <Experience id="experience"/>
          <Education id="education" />
          {/* <Project data={ProjectData}/>*/}
          <Projects id="projects"/>
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
