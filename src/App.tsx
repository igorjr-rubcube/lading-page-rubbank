import React, { useRef } from 'react';
import './App.css';
import NavBar from './components/nav/NavBar.js';
import Hero from './components/hero/Hero.js';
import Beneficios from './components/beneficios/Beneficios.js';

let lastScroll = 0;

// TODO - Make this handle with responsive design
const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
  const deltaY = event.deltaY;
  const nDivs = document.querySelectorAll('Section').length;
  const defaultHeight = document.querySelector('Section')?.clientHeight || 0;
  const windowSizeY = window.innerHeight + defaultHeight * nDivs;
  if (deltaY === 0) return;
  if (deltaY > 0 && window.scrollY >= defaultHeight * nDivs) return;
  if (deltaY < 0 && window.scrollY <= 0) return;
  if (deltaY > 0) {
    lastScroll = window.scrollY;
    lastScroll = (lastScroll % defaultHeight === 0) ? lastScroll : lastScroll - (lastScroll % defaultHeight);
    lastScroll = (deltaY > 0) ? lastScroll : lastScroll - deltaY;
    window.scroll({ top: lastScroll + defaultHeight, behavior: 'smooth' });
  } else {
    lastScroll = window.scrollY;
    lastScroll = (lastScroll % defaultHeight === 0) ? lastScroll : lastScroll - (lastScroll % defaultHeight);
    lastScroll = (deltaY > 0) ? lastScroll : lastScroll - deltaY;
    window.scroll({ top: lastScroll - defaultHeight, behavior: 'smooth' });
  }

};

function App() {
  return (
    <div onWheel={handleWheel}>
      <NavBar />
      <Hero />
      <Beneficios />
      <Beneficios />
      <Beneficios />
      <Beneficios />

    </div>
  );
}

export default App;
