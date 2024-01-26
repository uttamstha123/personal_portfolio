import "./App.css";
import NavBar from "./layouts/NavBar.js";
import Header from "./section/Header.js";

function App() {
  return (
    <>
      <header className="mainHeader pt-0 padding-y">
        <NavBar />
        <Header/>
      </header>
    </>
  );
}

export default App;
