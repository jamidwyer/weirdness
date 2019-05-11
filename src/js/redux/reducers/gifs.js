import {
  REQUEST_GIFS,
  REQUEST_GIFS_SUCCESS,
  REQUEST_GIFS_FAILED,
} from '../actions/gifs';

const initialState = {
  isFetching: false,
  gif: {},
};

function gifs(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_GIFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        // Giphy
        gif: action.payload.data,
        // Higher rate limit API
        // gif: action.payload,
      };
    case REQUEST_GIFS_FAILED:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default gifs;
