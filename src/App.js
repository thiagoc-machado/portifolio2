import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Game from './components/tetris/Game';
function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>
      {/* <Game rows={20} columns={10} /> */}
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
