import logo from './logo.svg';
import './App.css';
// import { Navigation } from './Component/Navigation';
import ResponsiveAppBar from './Component/Navigation';
import About from './Component/About';
import Projects from './Component/Projects';
import Skills from './Component/Skills';
import Contact from './Component/contact';
function App() {
  return (
    <div>
      {/* <Navigation/> */}
      <ResponsiveAppBar></ResponsiveAppBar>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
