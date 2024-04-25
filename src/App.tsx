import React, { useRef } from 'react';
import './App.css';
import NavBar from './components/nav/NavBar.js';
import Hero from './components/hero/Hero.js';
import Beneficios from './components/beneficios/Beneficios.js';

type Position = {
  left: number;
  top: number;
}

const getOffset = (e: HTMLElement) => {
  const rect = e.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

const getDivsPositions = () => {
  const divs = document.querySelectorAll('section');
  const divsPositions: Position[] = [];
  divs.forEach((div) => {
    divsPositions.push(getOffset(div));
  });
  return divsPositions;
}

let index = -1;
const divsPositions = getDivsPositions();

const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
  console.log(divsPositions);

  const deltaY = event.deltaY;
  if (deltaY === 0) return;
  if (deltaY < 0 && window.scrollY <= 0) return;
  if (deltaY > 0) {
    window.scroll({ top: divsPositions[index].top, behavior: 'smooth' });
    index += 1;
  } else {
    window.scroll({ top: divsPositions[index].top, behavior: 'smooth' });
    index -= 1;
  }

}

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
