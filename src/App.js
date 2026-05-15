import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
// import Tetris from "./components/tetris/Game";
// import Game from "./components/Game/game";
import Ninja from "./components/Ninja/ninja";
console.log(`
  ████████╗██╗  ██╗██╗ █████╗  ██████╗  ██████╗     
  ╚══██╔══╝██║  ██║██║██╔══██╗██╔════╝ ██╔═══██╗
     ██║   ███████║██║███████║██║  ███╗██║   ██║
     ██║   ██╔══██║██║██╔══██║██║   ██║██║   ██║
     ██║   ██║  ██║██║██║  ██║╚██████╔╝╚██████╔╝
     ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝
  
  Hi developer 👀
  If you're reading this, you probably know what you're doing...
  But if not, call Thiago 😎
  `);

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Services />
        <Qualification />
        <Skills />
        <Contact />
        {/* <Tetris /> */}
        {/* <Game /> */}
        <Ninja />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
