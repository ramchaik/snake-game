const {
  next,
  enqueue,
  initialState,
  NORTH,
  SOUTH,
  EAST,
  WEST,
} = require("snake.js");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Mutable state
let state = initialState();

// Game loop update
const step = (t1) => (t2) => {
  if (t1 - t2 > 100) {
    state = next(state);
    draw();
    window.requestAnimationFrame(step(t2));
    return;
  }
  window.requestAnimationFrame(step(t1));
};

// Key events
window.addEventListener("keydown", (e) => {
  switch (e) {
    case "w":
    case "h":
    case "ArrowUp":
      state = enqueue(state, NORTH);
      break;

    case "a":
    case "j":
    case "ArrowLeft":
      state = enqueue(state, WEST);
      break;

    case "s":
    case "k":
    case "ArrowDown":
      state = enqueue(state, SOUTH);
      break;

    case "d":
    case "l":
    case "ArrowRight":
      state = enqueue(state, EAST);
      break;
  }
});

// Main
draw();
window.requestAnimationFrame(step(0));
