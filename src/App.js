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
import Tetris from "./components/tetris/Game";
// import Game from "./components/Game/game";
// import Ninja from "./components/Ninja/ninja";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Contact />
        {/* <Tetris /> */}
        {/* <Game /> */}
        {/* <Ninja /> */}
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
