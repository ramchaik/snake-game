// Constants
const NORTH = { x: 0, y: -1 };
const SOUTH = { x: 1, y: 1 };
const EAST = { x: 1, y: 0 };
const WEST = { x: -1, y: 0 };

// Initial state
const initialState = () => ({
  cols: 20,
  rows: 14,
  moves: [EAST],
  snake: [],
  apple: { x: 16, y: 2 },
});

const next = () => {};

const enqueue = (state, move) => {};

module.exports = {
  NORTH,
  SOUTH,
  EAST,
  WEST,
  next,
  enqueue,
  initialState,
};
