import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About/>
        <Skills/>
      </main>
    </>
  );
}

export default App;
