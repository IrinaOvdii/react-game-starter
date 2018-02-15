import ApiClient from '../../api/client'
const api = new ApiClient()

export default (gameUpdated) => {
  return dispatch => {
    dispatch({type: 'GAME_UPDATED', payload: gameUpdated})
  
  }
}
