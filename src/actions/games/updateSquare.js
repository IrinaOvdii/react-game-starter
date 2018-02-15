export const UPDATE_SQUARE = 'UPDATE_SQUARE'

export default (newSquare) => {
  return {
    type: UPDATE_SQUARE,
    payload: newSquare
  }
}
