export const GET_FAVORITES = 'GET_FAVORITES';
export const SET_FAVORITE = 'SET_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SELECT_SCORE = 'SELECT_SCORE';

export function selectScore(score) {
  return {
    type: SELECT_SCORE,
    score,
  }
}

export function getFavorites() {
  return {
    type: GET_FAVORITES,
  }
}

export const setFavorite = (gif) => ({
  type: SET_FAVORITE,
  payload: {
    ...gif,
  },
});

export const removeFavorite = (gif) => ({
  type: REMOVE_FAVORITE,
  payload: {
    ...gif,
  },
});
