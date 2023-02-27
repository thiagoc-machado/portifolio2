import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Header/home/Home';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
      </main>
    </>
  );
}

export default App;