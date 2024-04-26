import './App.css';
import NavBar from './components/nav/NavBar.js';
import Hero from './components/hero/Hero.js';
import Beneficios from './components/beneficios/Beneficios.js';
import Feedback from './components/feedback/Feedback.js';
import Footer from './components/footer/Footer.js';
import CallToAction from './components/cta/CallToAction.js';
import FAQ from './components/faq/FAQ.js';
import React, { useEffect, useState } from 'react';


function App() {
    return (
        <>
            <NavBar />
            <Hero id='hero' />
            <Beneficios id='beneficios' />
            <Feedback id='feedback' />
            <FAQ id='faq' />
            <CallToAction id='cta' />
            <Footer id='footer' />
        </>
    );
}


export default App;
