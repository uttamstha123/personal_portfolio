import "./App.css";
import NavBar from "./layouts/NavBar.js";
import Header from "./section/Header.js";
import Skills from "./section/Skills.js";
function App() {
  return (
    <>
      <header className="mainHeader pt-0 padding-y">
        <NavBar />
        <Header/>
      </header>
      <section className="section padding-y padding-x">
        <Skills/>
      </section>
    </>
  );
}

export default App;
