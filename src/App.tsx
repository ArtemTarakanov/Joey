import './App.css'
import Header from './components/Header';
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";

function App() {
  return (
    <>
    <section id='#home'>
      <Header/>
    </section>

    <section id='#home'>
      <Hero/>
    </section>

    <section id='#projects'>
      <Projects/>
    </section>
    </>
  )
}

export default App
