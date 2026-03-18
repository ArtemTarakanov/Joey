import './App.css'
import Header from './components/Header';
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import Expertise from "./components/Expertise.tsx";
import String from "./components/String.tsx";

function App() {
  return (
    <>
    <Header/>

    <section id='home'>
      <Hero/>
    </section>

    <section id='projects'>
      <Projects/>
    </section>

      <section id = 'about'>
        <Expertise/>
      </section>

      <String/>
    </>
  )
}

export default App
