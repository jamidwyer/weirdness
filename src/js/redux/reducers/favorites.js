import {
  REMOVE_FAVORITE,
  SET_FAVORITE,
  GET_FAVORITES,
} from '../actions/favorites';

const initialState = [];

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
      console.log(action.payload);
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
}

export default favorites;
