let ctx;
let canvas = null;
let introductionElement,
    savePlacarElement,
    perfectElement,
    restartButton,
    gameoverElement,
    actionButton,
    scoreElement;

function resetGame(canvas) {
    startGame(canvas);
}
// Export the startGame function

// Resets game variables and layouts but does not start the game (game starts on keypress)
// Função startGame não precisa mais do parâmetro canvas
// Export the startGame function
function startGame(canvas) {
    if (!canvas) {
        console.error("Canvas não está definido!");
        return;
    }

    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    ctx = canvas.getContext("2d");

    if (!ctx) {
        console.error("Erro ao obter o contexto 2D do canvas!");
        return;
    }

    phase = "waiting";
    lastTimestamp = undefined;
    sceneOffset = 0;
    score = 0;

    introductionElement = document.getElementById("introduction") ?? null;
    savePlacarElement = document.getElementById("saveplacar") ?? null;
    perfectElement = document.getElementById("perfect") ?? null;
    restartButton = document.getElementById("restart") ?? null;
    scoreElement = document.getElementById("score") ?? null;
    actionButton = document.getElementById("action") ?? null;
    gameoverElement = document.getElementById("gameover") ?? null;

    if (introductionElement) introductionElement.style.opacity = 1;
    if (savePlacarElement) savePlacarElement.style.display = "none";
    if (perfectElement) perfectElement.style.opacity = 0;
    if (restartButton) restartButton.style.display = "none";
    if (gameoverElement) gameoverElement.style.display = "none";
    if (actionButton) actionButton.style.display = "block";
    if (scoreElement) scoreElement.innerText = score;

    platforms = [{ x: 50, w: 50 }];
    generatePlatform();
    generatePlatform();
    generatePlatform();
    generatePlatform();

    sticks = [{ x: platforms[0].x + platforms[0].w, length: 0, rotation: 0 }];

    trees = [];
    generateTree();
    generateTree();
    generateTree();
    generateTree();
    generateTree();
    generateTree();
    generateTree();
    generateTree();
    generateTree();
    generateTree();

    heroX = platforms[0].x + platforms[0].w - heroDistanceFromEdge;
    heroY = 0;

    draw();
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
function drawBackground() {
    // Draw sky
    var gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
    gradient.addColorStop(0, "#171717");
    gradient.addColorStop(1, "#8d3400");
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

// Extend the base functionality of JavaScript
Array.prototype.last = function () {
    return this[this.length - 1];
};

// A sinus function that acceps degrees instead of radians
Math.sinus = function (degree) {
    return Math.sin((degree / 180) * Math.PI);
};

// Game data
let phase = "waiting"; // waiting | stretching | turning | walking | transitioning | falling
let lastTimestamp; // The timestamp of the previous requestAnimationFrame cycle

let heroX; // Changes when moving forward
let heroY; // Only changes when falling
let sceneOffset; // Moves the whole game

let platforms = [];
let sticks = [];
let trees = [];

let namel = "";
let valuel = "";
let savename = "";
let action = "";

let score = 0;

// Configuration
//const platformHeight = 200;
const canvasWidth = 375;
const canvasHeight = 1100;
const heroDistanceFromEdge = 10; // While waiting
const paddingX = 100; // The waiting position of the hero in from the original canvas size
const perfectAreaSize = 10;

if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
) {
    if (window.innerWidth > window.innerHeight) {
        var platformHeight = 600;
        // console.log("Mobile mode deitado");
    } else {
        var platformHeight = 0;
        // console.log("Mobile mode de pé");
    }
} else {
    var platformHeight = 400;
}

// console.log("Width = " + window.innerWidth);
// console.log("Heigth = " + window.innerHeight);

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

window.addEventListener("load", function () {
    canvas = document.getElementById("game");
    if (!canvas) {
        console.warn("Canvas não encontrado! Criando dinamicamente...");
        canvas = document.createElement("canvas");
        canvas.id = "game";
        document.body.appendChild(canvas);
    }
    ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("Erro ao obter o contexto 2D do canvas!");
        return;
    }

    // Agora o resto da inicialização
    introductionElement = document.getElementById("introduction");
    savePlacarElement = document.getElementById("saveplacar");
    perfectElement = document.getElementById("perfect");
    restartButton = document.getElementById("restart");
    scoreElement = document.getElementById("score");
    actionButton = document.getElementById("action");
    gameoverElement = document.getElementById("gameover");

    if (!actionButton) {
        console.error("Elemento com ID 'action' não encontrado!");
    } else {
        actionButton.addEventListener("click", function (event) {
            if (phase === "waiting") {
                lastTimestamp = undefined;
                event.preventDefault();
                introductionElement.style.opacity = 0;
                phase = "stretching";
                window.requestAnimationFrame(animate);
            }
        });

        actionButton.addEventListener("touchstart", function (event) {
            if (phase === "waiting") {
                lastTimestamp = undefined;
                event.preventDefault();
                introductionElement.style.opacity = 0;
                phase = "stretching";
                window.requestAnimationFrame(animate);
            }
        });
    }

    resetGame(canvas); // Passe o canvas como argumento

    const gameoverScoreElement = document.getElementById("gameoverScore");

    var hallElement = {};

    // Hall of fame block

    const listElement = document.getElementById("hiscore");
    const formElement = document.getElementById("savename");
    let listItems = [];

    function updateList(json) {
        const listElement = document.getElementById("hiscore");
        if (listElement) {
            while (listElement.firstChild) {
                listElement.removeChild(listElement.firstChild);
            }
        } else {
            console.error("Elemento com ID 'hiscore' não encontrado!");
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
            // console.log(listaJSON);
            let req = new XMLHttpRequest();

            req.onreadystatechange = () => {
                if (req.readyState == XMLHttpRequest.DONE) {
                    // console.log(req.responseText);
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

    const savename = document.getElementById("savename");
    if (!savename) {
        console.error("Elemento com ID 'savename' não encontrado!");
    } else {
        savename.addEventListener("submit", handleFormSubmit);
    }
    resetGame(document.getElementById("game"));

    // If space was pressed restart the game
    // window.addEventListener("keydown", function (event) {
    // if (event.key == " ") {
    //     event.preventDefault();
    //     resetGame();
    //     return;
    // }
    // });

    actionButton = document.getElementById("action");
    if (!actionButton) {
        console.error("Elemento com ID 'action' não encontrado!");
    } else {
        actionButton.addEventListener("click", function (event) {
            if (phase === "waiting") {
                lastTimestamp = undefined;
                event.preventDefault();
                introductionElement.style.opacity = 0;
                phase = "stretching";
                window.requestAnimationFrame(animate);
            }
        });

        actionButton.addEventListener("touchstart", function (event) {
            if (phase === "waiting") {
                lastTimestamp = undefined;
                event.preventDefault();
                introductionElement.style.opacity = 0;
                phase = "stretching";
                window.requestAnimationFrame(animate);
            }
        });
    }
    window.addEventListener("mouseup", function (event) {
        if (phase == "stretching") {
            phase = "turning";
        }
    });

    window.addEventListener("resize", function () {
        const canvas = document.getElementById("game"); // Obtém o canvas novamente
        if (ctx && canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            draw();
        }
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
                sticks.last().length +=
                    (timestamp - lastTimestamp) / stretchingSpeed;
                break;
            }
            case "turning": {
                sticks.last().rotation +=
                    (timestamp - lastTimestamp) / turningSpeed;

                if (sticks.last().rotation > 90) {
                    sticks.last().rotation = 90;

                    const [nextPlatform, perfectHit] =
                        thePlatformTheStickHits();
                    if (nextPlatform) {
                        // Increase score
                        score += perfectHit ? 2 : 1;
                        scoreElement.innerText = score;
                        gameoverScoreElement.innerText = "Score: " + score;

                        if (perfectHit) {
                            perfectElement.style.opacity = 1;
                            setTimeout(
                                () => (perfectElement.style.opacity = 0),
                                1000
                            );
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
                    const maxHeroX =
                        sticks.last().x + sticks.last().length + heroWidth;
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
                    platformHeight +
                    100 +
                    (window.innerHeight - canvasHeight) / 2;
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
        if (sticks.last().rotation != 90)
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

    restartButton.addEventListener("click", function (event) {
        event.preventDefault();
        resetGame(document.getElementById("game"));

        gameoverElement.style.display = "none";
        actionButton.style.display = "block";
        restartButton.style.display = "none";
    });
});
export { startGame };
