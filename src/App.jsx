import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import ExperienceData from "./data/Experience";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Navbar />
          <Introduction />
          <Experience data={ExperienceData}/>
          {/* <Carrier /> */}
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
