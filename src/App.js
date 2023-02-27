import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About/>
      </main>
    </>
  );
}

export default App;
