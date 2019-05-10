import axios from 'axios'

export const REQUEST_GIFS = 'REQUEST_GIFS';
export const REQUEST_GIFS_SUCCESS = 'REQUEST_GIFS_SUCCESS';
export const REQUEST_GIFS_FAILED = 'REQUEST_GIFS_FAILED';
export const SELECT_SCORE = 'SELECT_SCORE';

const { GIPHY_API_KEY } = process.env;

export function selectScore(score) {
  return {
    type: SELECT_SCORE,
    score,
  }
}

function requestGifs(searchTerm) {
  return {
    type: REQUEST_GIFS,
    searchTerm,
  }
}

const requestGifsSuccess = (gifs) => ({
  type: REQUEST_GIFS_SUCCESS,
  payload: {
    ...gifs,
  },
});

const requestGifsFailed = (error) => ({
  type: REQUEST_GIFS_FAILED,
  payload: {
    error,
  },
});

function getGif(searchTerm, weirdness) {
  return (dispatch) => {
    dispatch(requestGifs(searchTerm));
    // Giphy rate limit: 50 requests per hour.
    // better to use a placeholder unless testing gifs themselves
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=cheeseburgers&weirdness=${weirdness}`;
    // const url = 'https://jsonplaceholder.typicode.com/photos';
    return axios
      .get(url)
      .then((res) => {
        // Giphy
        dispatch(requestGifsSuccess(res.data));
        // Placeholder
        // dispatch(requestGifsSuccess(res.data[0]));
      })
      .catch((err) => {
        dispatch(requestGifsFailed(err.message));
      });
  }
}

function shouldFetchGif(state) {
  const { gifs } = state;
  if (!gifs) {
    return true;
  }
  if (gifs.isFetching) {
    return false;
  }
  return true;
}

export function fetchGifIfNeeded(searchTerm, weirdness) {
  return (dispatch, getState) => {
    if (shouldFetchGif(getState(), searchTerm)) {
      return dispatch(getGif(searchTerm, weirdness))
    }
    return null;
  }
}
