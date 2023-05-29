import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import "./App.css";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
