import { combineReducers } from 'redux'
import {
  SELECT_SCORE,
  REQUEST_GIFS,
  REQUEST_GIFS_SUCCESS,
  REQUEST_GIFS_FAILED,
} from '../actions/gifs'

function selectedScore(state = 0, action) {
  switch (action.type) {
    case SELECT_SCORE:
      return action.score
    default:
      return state
  }
}

function gifs(
  state = {
    isFetching: false,
    gif: {},
  },
  action
) {
  switch (action.type) {
    case REQUEST_GIFS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case REQUEST_GIFS_SUCCESS:
      console.log(action);
      return Object.assign({}, state, {
        isFetching: false,
        // Fix when Giphy gives data back
        //        gif: action.payload.data,
        gif: action.payload,
      })
    case REQUEST_GIFS_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  gifs,
  selectedScore,
})

export default rootReducer;
