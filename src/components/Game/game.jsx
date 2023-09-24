import React, { useEffect, useRef, useState } from "react";
import "./game.css";

export default function Game() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [phase, setPhase] = useState("waiting");
  let [lastTimestamp, setLastTimestamp] = useState();

  const [heroX, setHeroX] = useState();
  const [heroY, setHeroY] = useState();
  const [sceneOffset, setSceneOffset] = useState(0);

  let [platforms, setPlatforms] = useState([]);
  let [sticks, setSticks] = useState([]);
  let [trees, setTrees] = useState([]);

  const [score, setScore] = useState(0);

  // referências
  // Configuration
  const [canvasWidth] = useState(375);
  const [canvasHeight] = useState(1100);
  const [heroDistanceFromEdge] = useState(10);
  const [paddingX] = useState(100);
  const [perfectAreaSize] = useState(10);
  //const platformHeight = 200;
  useEffect(() => {
    // Inicializa o canvas
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Obtém o contexto 2D
    const ctx = canvas.getContext("2d");

    // salva as referências
    canvasRef.current = canvas;
    ctxRef.current = ctx;

    const savename = document.getElementById("savename");
    savename.addEventListener("submit", handleFormSubmit);

    //GAME

    // Extend the base functionality of JavaScript
    Array.prototype.last = function () {
      return this[this.length - 1];
    };

    // A sinus function that acceps degrees instead of radians
    Math.sinus = function (degree) {
      return Math.sin((degree / 180) * Math.PI);
    };

    // Game data
    // Estado

    let platformHeight;
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      if (window.innerWidth > window.innerHeight) {
        platformHeight = 600;
        console.log("Mobile mode deitado");
      } else {
        platformHeight = 0;
        console.log("Mobile mode de pé");
      }
    } else {
      platformHeight = 400;
    }

    console.log("Width = " + window.innerWidth);
    console.log("Heigth = " + window.innerHeight);

    // The background moves slower than the hero
    const backgroundSpeedMultiplier = 0.2;

    const hill1BaseHeight = 200;
    const hill1Amplitude = 10;
    const hill1Stretch = 1;
    const hill2BaseHeight = 150;
    const hill2Amplitude = 30;
    const hill2Stretch = 0.5;

    const stretchingSpeed = 4; // Milliseconds it takes to draw a pixel
    const turningSpeed = 4; // Milliseconds it takes to turn a degree
    const walkingSpeed = 4;
    const transitioningSpeed = 2;
    const fallingSpeed = 2;

    const heroWidth = 17; // 24
    const heroHeight = 30; // 40

    canvas.width = window.innerWidth; // Make the Canvas full screen
    canvas.height = window.innerHeight;

    let introductionElement = document.getElementById("introduction");
    let savePlacarElement = document.getElementById("saveplacar");
    let perfectElement = document.getElementById("perfect");
    let restartButton = document.getElementById("restart");
    let scoreElement = document.getElementById("score");
    let actionButton = document.getElementById("action");
    let gameoverElement = document.getElementById("gameover");
    let gameoverScoreElement = document.getElementById("gameoverScore");

    var hallElement = {};

    // Hall of fame block

    const listElement = document.getElementById("hiscore");
    const formElement = document.getElementById("savename");
    let listItems = [];

    function updateList(json) {
      let namel = "";
      let valuel = "";

      while (listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
      }
      for (var i = 0; i < json.record.length; i++) {
        var item = document.createElement("li");
        namel = json.record[i].name;
        valuel = json.record[i].value;
        addItem(namel, valuel);
      }
    }

    fetch("https://api.jsonbin.io/v3/b/639b92eb15ab31599e1d5c43/latest")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        updateList(json);
      });

    function addItem(name, value) {
      const newItem = document.createElement("li");
      newItem.innerHTML = `${name}: ${value}`;
      let insertIndex = 0;
      while (
        insertIndex < listItems.length &&
        listItems[insertIndex].value > value
      ) {
        insertIndex++;
      }
      listElement.insertBefore(newItem, listElement.childNodes[insertIndex]);
      listItems.splice(insertIndex, 0, { name, value });
      if (listItems.length > 10) {
        listElement.removeChild(listElement.lastChild);
        listItems.pop();
      }
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      const namesave = document.getElementById("nameSave");
      const name = formElement.elements["nameSave"].value;
      const value = score;
      if (name != "") {
        addItem(name, value);
        savePlacarElement.style.display = "none";
        var listaJSON = JSON.stringify(listItems);
        console.log(listaJSON);
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
          if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
          }
        };
        req.open(
          "PUT",
          "https://api.jsonbin.io/v3/b/639b92eb15ab31599e1d5c43",
          true
        );
        req.setRequestHeader("Content-Type", "application/json");
        req.send(listaJSON);
      }
    }

    // Initialize layout
    function resetGame() {
      // Reset game progress
      setPhase("waiting");
      setLastTimestamp(undefined);
      setSceneOffset(0);
      setScore(0);

      // ... Outras redefinições de estado

      // Reset das plataformas iniciais
      const initialPlatforms = [{ x: 50, w: 50 }];
      setPlatforms(initialPlatforms);

      // Reset dos bastões iniciais
      const initialSticks = [
        {
          x: initialPlatforms[0].x + initialPlatforms[0].w,
          length: 0,
          rotation: 0,
        },
      ];
      setSticks(initialSticks);

      // Reset das árvores iniciais
      const initialTrees = [];
      for (let i = 0; i < 10; i++) {
        generateTree(initialTrees);
      }
      setTrees(initialTrees);

      setHeroX(
        initialPlatforms[0].x + initialPlatforms[0].w - heroDistanceFromEdge
      );
      setHeroY(0);

      draw();
    }

    function generateTree() {
      const minimumGap = 30;
      const maximumGap = 150;

      // X coordinate of the right edge of the furthest tree
      const lastTree = trees[trees.length - 1];
      let furthestX = lastTree ? lastTree.x : 0;

      const x =
        furthestX +
        minimumGap +
        Math.floor(Math.random() * (maximumGap - minimumGap));

      const treeColors = ["#f7f30d", "#8FAC34", "#133313"];
      const color = treeColors[Math.floor(Math.random() * 3)];

      trees.push({ x, color });
    }

    function generatePlatform() {
      const minimumGap = 40;
      const maximumGap = 200;
      const minimumWidth = 20;
      const maximumWidth = 100;

      // X coordinate of the right edge of the furthest platform
      const lastPlatform = platforms[platforms.length - 1];
      let furthestX = lastPlatform.x + lastPlatform.w;

      const x =
        furthestX +
        minimumGap +
        Math.floor(Math.random() * (maximumGap - minimumGap));
      const w =
        minimumWidth +
        Math.floor(Math.random() * (maximumWidth - minimumWidth));

      platforms.push({ x, w });
    }

    resetGame();

    // If space was pressed restart the game
    // window.addEventListener("keydown", function (event) {
    // if (event.key == " ") {
    //     event.preventDefault();
    //     resetGame();
    //     return;
    // }
    // });

    document
      .getElementById("action")
      .addEventListener("click", function (event) {
        if (phase === "waiting") {
          lastTimestamp = undefined;
          event.preventDefault();
          introductionElement.style.opacity = 0;
          setPhase("stretching");
          window.requestAnimationFrame(animate);
        }
      });

    // Substitua a linha action.addEventListener("touchstart", ...) por isso
    document
      .getElementById("action")
      .addEventListener("touchstart", function (event) {
        if (phase === "waiting") {
          lastTimestamp = undefined;
          event.preventDefault();
          introductionElement.style.opacity = 0;
          setPhase("stretching");
          window.requestAnimationFrame(animate);
        }
      });
    window.addEventListener("mouseup", function (event) {
      if (phase == "stretching") {
        phase = "turning";
      }
    });

    window.addEventListener("resize", function (event) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    });

    window.requestAnimationFrame(animate);

    // The main game loop
    function animate(timestamp) {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
        window.requestAnimationFrame(animate);
        return;
      }

      switch (phase) {
        case "waiting":
          return; // Stop the loop
        case "stretching": {
          sticks.last().length += (timestamp - lastTimestamp) / stretchingSpeed;
          break;
        }
        case "turning": {
          sticks.last().rotation += (timestamp - lastTimestamp) / turningSpeed;

          if (sticks.last().rotation > 90) {
            sticks.last().rotation = 90;

            const [nextPlatform, perfectHit] = thePlatformTheStickHits();
            if (nextPlatform) {
              // Increase score
              score += perfectHit ? 2 : 1;
              scoreElement.innerText = score;
              gameoverScoreElement.innerText = "Score: " + score;

              if (perfectHit) {
                perfectElement.style.opacity = 1;
                setTimeout(() => (perfectElement.style.opacity = 0), 1000);
              }

              generatePlatform();
              generateTree();
              generateTree();
            }

            phase = "walking";
          }
          break;
        }
        case "walking": {
          heroX += (timestamp - lastTimestamp) / walkingSpeed;

          const [nextPlatform] = thePlatformTheStickHits();
          if (nextPlatform) {
            // If hero will reach another platform then limit it's position at it's edge
            const maxHeroX =
              nextPlatform.x + nextPlatform.w - heroDistanceFromEdge;
            if (heroX > maxHeroX) {
              heroX = maxHeroX;
              phase = "transitioning";
            }
          } else {
            // If hero won't reach another platform then limit it's position at the end of the pole
            const maxHeroX = sticks.last().x + sticks.last().length + heroWidth;
            if (heroX > maxHeroX) {
              heroX = maxHeroX;
              phase = "falling";
            }
          }
          break;
        }
        case "transitioning": {
          sceneOffset += (timestamp - lastTimestamp) / transitioningSpeed;

          const [nextPlatform] = thePlatformTheStickHits();
          if (sceneOffset > nextPlatform.x + nextPlatform.w - paddingX) {
            // Add the next step
            sticks.push({
              x: nextPlatform.x + nextPlatform.w,
              length: 0,
              rotation: 0,
            });
            phase = "waiting";
          }
          break;
        }
        case "falling": {
          if (sticks.last().rotation < 180)
            sticks.last().rotation +=
              (timestamp - lastTimestamp) / turningSpeed;

          heroY += (timestamp - lastTimestamp) / fallingSpeed;
          const maxHeroY =
            platformHeight + 100 + (window.innerHeight - canvasHeight) / 2;
          if (heroY > maxHeroY) {
            restartButton.style.display = "block";
            gameoverElement.style.display = "block";
            actionButton.style.display = "none";
            if (score > listItems[9].value) {
              savePlacarElement.style.display = "block";
            }
            return;
          }
          break;
        }
        default:
          throw Error("Wrong phase");
      }

      draw();
      window.requestAnimationFrame(animate);

      lastTimestamp = timestamp;
    }

    // Returns the platform the stick hit (if it didn't hit any stick then return undefined)
    function thePlatformTheStickHits() {
      if (sticks.last().rotation !== 90)
        throw Error(`Stick is ${sticks.last().rotation}°`);
      const stickFarX = sticks.last().x + sticks.last().length;

      const platformTheStickHits = platforms.find(
        (platform) =>
          platform.x < stickFarX && stickFarX < platform.x + platform.w
      );

      // If the stick hits the perfect area
      if (
        platformTheStickHits &&
        platformTheStickHits.x +
          platformTheStickHits.w / 2 -
          perfectAreaSize / 2 <
          stickFarX &&
        stickFarX <
          platformTheStickHits.x +
            platformTheStickHits.w / 2 +
            perfectAreaSize / 2
      )
        return [platformTheStickHits, true];

      return [platformTheStickHits, false];
    }

    function draw() {
      ctx.save();
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      drawBackground();

      // Center main canvas area to the middle of the screen
      ctx.translate(
        (window.innerWidth - canvasWidth) / 2 - sceneOffset,
        (window.innerHeight - canvasHeight) / 2
      );

      // Draw scene
      drawPlatforms();
      drawHero();
      drawSticks();

      // Restore transformation
      ctx.restore();
    }

    restartButton.addEventListener("click", function (event) {
      event.preventDefault();
      resetGame();
      gameoverElement.style.display = "none";
      actionButton.style.display = "block";
      restartButton.style.display = "none";
    });

    function drawPlatforms() {
      platforms.forEach(({ x, w }) => {
        // Draw platform
        ctx.fillStyle = "#1f1308";
        ctx.fillRect(
          x,
          canvasHeight - platformHeight,
          w,
          platformHeight + (window.innerHeight - canvasHeight) / 2
        );

        // Draw perfect area only if hero did not yet reach the platform
        if (sticks.last().x < x) {
          ctx.fillStyle = "yellow";
          ctx.fillRect(
            x + w / 2 - perfectAreaSize / 2,
            canvasHeight - platformHeight,
            perfectAreaSize,
            perfectAreaSize
          );
        }
      });
    }

    function drawHero() {
      ctx.save();
      ctx.fillStyle = "black";
      ctx.translate(
        heroX - heroWidth / 2,
        heroY + canvasHeight - platformHeight - heroHeight / 2
      );

      // Body
      drawRoundedRect(
        -heroWidth / 2,
        -heroHeight / 2,
        heroWidth,
        heroHeight - 4,
        5
      );

      // Legs
      const legDistance = 5;
      ctx.beginPath();
      ctx.arc(legDistance, 11.5, 3, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(-legDistance, 11.5, 3, 0, Math.PI * 2, false);
      ctx.fill();

      // Eye
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(5, -7, 3, 0, Math.PI * 2, false);
      ctx.fill();

      // Band
      ctx.fillStyle = "red";
      ctx.fillRect(-heroWidth / 2 - 1, -12, heroWidth + 2, 4.5);
      ctx.beginPath();
      ctx.moveTo(-9, -14.5);
      ctx.lineTo(-17, -18.5);
      ctx.lineTo(-14, -8.5);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(-10, -10.5);
      ctx.lineTo(-15, -3.5);
      ctx.lineTo(-5, -7);
      ctx.fill();

      ctx.restore();
    }

    function drawRoundedRect(x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, y + height - radius);
      ctx.arcTo(x, y + height, x + radius, y + height, radius);
      ctx.lineTo(x + width - radius, y + height);
      ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
      ctx.lineTo(x + width, y + radius);
      ctx.arcTo(x + width, y, x + width - radius, y, radius);
      ctx.lineTo(x + radius, y);
      ctx.arcTo(x, y, x, y + radius, radius);
      ctx.fill();
    }

    function drawSticks() {
      sticks.forEach((stick) => {
        ctx.save();

        // Move the anchor point to the start of the stick and rotate
        ctx.translate(stick.x, canvasHeight - platformHeight);
        ctx.rotate((Math.PI / 180) * stick.rotation);

        // Draw stick
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -stick.length);
        ctx.stroke();

        // Restore transformations
        ctx.restore();
      });
    }
    function drawBackground() {
      // Draw sky
      var gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
      gradient.addColorStop(0, "#171717");
      gradient.addColorStop(1, "#371010");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw hills
      drawHill(hill1BaseHeight, hill1Amplitude, hill1Stretch, "#124e0d");
      drawHill(hill2BaseHeight, hill2Amplitude, hill2Stretch, "#3c630c");

      // Draw trees
      trees.forEach((tree) => drawTree(tree.x, tree.color));
    }

    // A hill is a shape under a stretched out sinus wave
    function drawHill(baseHeight, amplitude, stretch, color) {
      ctx.beginPath();
      ctx.moveTo(0, window.innerHeight);
      ctx.lineTo(0, getHillY(0, baseHeight, amplitude, stretch));
      for (let i = 0; i < window.innerWidth; i++) {
        ctx.lineTo(i, getHillY(i, baseHeight, amplitude, stretch));
      }
      ctx.lineTo(window.innerWidth, window.innerHeight);
      ctx.fillStyle = color;
      ctx.fill();
    }

    function drawTree(x, color) {
      ctx.save();
      ctx.translate(
        (-sceneOffset * backgroundSpeedMultiplier + x) * hill1Stretch,
        getTreeY(x, hill1BaseHeight, hill1Amplitude)
      );

      const treeTrunkHeight = 5;
      const treeTrunkWidth = 2;
      const treeCrownHeight = 25;
      const treeCrownWidth = 10;

      // Draw trunk
      ctx.fillStyle = "#7D833C";
      ctx.fillRect(
        -treeTrunkWidth / 2,
        -treeTrunkHeight,
        treeTrunkWidth,
        treeTrunkHeight
      );

      // Draw crown
      ctx.beginPath();
      ctx.moveTo(-treeCrownWidth / 2, -treeTrunkHeight);
      ctx.lineTo(0, -(treeTrunkHeight + treeCrownHeight));
      ctx.lineTo(treeCrownWidth / 2, -treeTrunkHeight);
      ctx.fillStyle = color;
      ctx.fill();

      ctx.restore();
    }

    function getHillY(windowX, baseHeight, amplitude, stretch) {
      const sineBaseY = window.innerHeight - baseHeight;
      return (
        Math.sinus(
          (sceneOffset * backgroundSpeedMultiplier + windowX) * stretch
        ) *
          amplitude +
        sineBaseY
      );
    }

    function getTreeY(x, baseHeight, amplitude) {
      const sineBaseY = window.innerHeight - baseHeight;
      return Math.sinus(x) * amplitude + sineBaseY;
    }
    function startGame() {
      //...
    }

    startGame();
  }, []);

  return (
    <div className="container-game">
      <canvas ref={canvasRef} id="game"></canvas>
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
          <button type="submit" id="saveBtn" value="Save" className="saveBtn">
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
  );
}
