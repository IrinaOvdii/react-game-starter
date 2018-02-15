import { UPDATE_SQUARE } from '../actions/games/updateSquare'

let initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SQUARE:
      const squares = state.squares.slice();
      squares[action.payload] = state.xIsNext ? 'X' : 'O';
      return {
        squares: squares,
        xIsNext: !state.xIsNext,
      };
    default:
    return state

  }
}
