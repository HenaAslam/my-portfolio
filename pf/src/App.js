import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import SocialLinks from "./components/SocialLinks";
import Timeline from "./components/Timeline";
import "./styles.css";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Certificates />

      <Contact />
      <SocialLinks />
      <Cursor />
    </div>
  );
}

export default App;
