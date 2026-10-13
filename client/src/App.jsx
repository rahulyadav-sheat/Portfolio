import {profile,skills,projects} from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar profile = {profile} />
      <Hero profile = {profile} />
      <About skills = {skills} />
      <Skills skills = {skills}/>\
      <Projects projects = {projects} />
    </>
  );
}
export default App;