export const GET_FAVORITES = 'GET_FAVORITES';
export const SET_FAVORITE = 'SET_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export function getFavorites() {
  return {
    type: GET_FAVORITES,
  }
}

export const setFavorite = (gif, score) => ({
  type: SET_FAVORITE,
  payload: {
    gif,
    score,
  },
});

export const removeFavorite = (gif) => ({
  type: REMOVE_FAVORITE,
  payload: {
    ...gif,
  },
});
