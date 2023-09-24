import React, { Component } from "react";
import "./script.js";
import "./script.css";
import { startGame } from "./script.js"; 

class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    startGame(canvas);
  }
  render() {
    return (
      <div>
        <div className="container-game">
          <canvas ref={this.canvasRef} id="game"></canvas>
          <a id="titulo">Stick NINJA</a>
          <div id="introduction">
            Click the ACTION button to extend the stick, <br />
            click again to drop it.
          </div>
          <div id="perfect">
            PERFECT
            <br />
            DOUBLE SCORE
          </div>
          <div className="placar" id="placar">
            <a>SCORE</a>
            <ul className="hiscore_h" id="hiscore_h">
              <li id="score">SCORE. </li>
            </ul>
            <a>HALL OF FAME</a>
            <ul className="hiscore" id="hiscore"></ul>
          </div>
          <div className="saveplacar" id="saveplacar">
            <form action="" id="savename">
              <a id="enterName">
                Enter your name for the
                <br />
                Hall of fame
                <br />
              </a>
              <input
                type="text"
                placeholder="Name *"
                className="nameSave"
                id="nameSave"
                maxLength="10"
              />
              <button
                type="submit"
                id="saveBtn"
                value="Save"
                className="saveBtn"
              >
                {" "}
                Save{" "}
              </button>
            </form>
          </div>
          <ul id="gameover">
            Game Over
            <li id="gameoverScore"></li>
          </ul>
          <button id="restart">RESTART</button>
          <button id="action" className="noselect">
            ACTION
          </button>
        </div>
        <div id="game-container"></div>
        <style>
          {`
              /* Estilos do jogo */
            `}
        </style>
      </div>
    );
  }
}

export default GameComponent;
