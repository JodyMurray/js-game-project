// initialize kaboom context
kaboom({
  global: true,
  width: 800,
  height: 800,
  canvas: document.querySelector("#game"),
  scale: 1,
  debug: true,
  background: [0, 0, 0, 0],
});

// global variables
let lives = 3;

// loads sprite
loadRoot("assets/");
loadSprite("yoda1", "sprites/yoda-1.png");

// create game scenes
scene("game", () => {
  const yoda1 = add([sprite("yoda1"), pos(400, 200), scale(0.1)]);

  //layers
  layers(["bg", "obj", "ui"], "obj");
  add([sprite, layer("obj")]);
});

// create life containers
function createLifeIcons() {
  if (lifeContainer.children.length >= 3) {
    return;
  }

  const iconsToAdd = Math.min(lives, 3 - lifeContainer.children.length);
  for (let i = 0; i < iconsToAdd; i++) {
    const lifeIcon = document.createElement("div");
    lifeIcon.classList.add("life-icon");
    lifeContainer.appendChild(lifeIcon);
  }
}

function removeLifeIcon() {
  const lifeIcons = lifeContainer.getElementsByClassName("life-icon");
  if (lifeIcons.length > 0) {
    lifeContainer.removeChild(lifeIcons[lifeIcons.length - 1]);
  }
  if (lifeIcons.length <= 0) {
    // If lives end up at 0, gameOver function called
  }
}

// calls function to create life container(s)
createLifeIcons();

// start game
go("game");
