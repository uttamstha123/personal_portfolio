import "./App.css";
import NavBar from "./layouts/NavBar.js";
import Header from "./section/Header.js";
import Skills from "./section/Skills.js";
import Projects from "./section/Projects.js";
function App() {
  return (
    <>
      <header className="mainHeader pt-0 padding-y">
        <NavBar />
        <Header/>
      </header>
      <section id="skills" className="section padding-y padding-x">
        <Skills/>
      </section>
      <section id="projects" className="section padding-y padding-x">
        <Projects/>
      </section>
    </>
  );
}

export default App;
