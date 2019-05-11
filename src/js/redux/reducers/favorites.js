import { combineReducers } from 'redux';
import {
  REMOVE_FAVORITE,
  SET_FAVORITE,
  GET_FAVORITES,
} from '../actions/favorites';

const initialState = {
  favorites: [],
};

function favorites(state = initialState, action) {
  switch (action.type) {
    case GET_FAVORITES:
      return Object.assign({}, state, {
        isFetching: true,
        favorites: action.payload,
      })
    case REMOVE_FAVORITE:
      return state;
    case SET_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  favorites,
});

export default rootReducer;
