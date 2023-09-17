import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import ExperienceData from "./data/Experience";
import Education from "./components/Education";
import EducationData from "./data/Education";

import "./assets/style.css" 

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <main className="col-md-8 bg-dark">
          <Navbar />
          <Introduction />
          <Experience data={ExperienceData} />
          <Education data={EducationData}/>
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
