import './App.css';
import NavBar from './components/nav/NavBar.js';
import Hero from './components/hero/Hero.js';
import Beneficios from './components/beneficios/Beneficios.js';
import Feedback from './components/feedback/Feedback.js';
import Footer from './components/footer/Footer.js';
import CallToAction from './components/cta/CallToAction.js';


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Beneficios />
      <Feedback />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
