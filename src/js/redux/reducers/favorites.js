import { combineReducers } from 'redux'
import {
  REMOVE_FAVORITE,
  SELECT_SCORE,
  SET_FAVORITE,
  GET_FAVORITES,
} from '../actions/favorites'

function selectedScore(state = 0, action) {
  switch (action.type) {
    case SELECT_SCORE:
      return action.score
    default:
      return state
  }
}

function favorites(
  state = {
    favorites: [],
  },
  action
) {
  switch (action.type) {
    case GET_FAVORITES:
      return Object.assign({}, state, {
        isFetching: true,
        favorites: action.payload,
      })
    case REMOVE_FAVORITE:
      return state;
    case SET_FAVORITE:
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  favorites,
  selectedScore,
})

export default rootReducer;
