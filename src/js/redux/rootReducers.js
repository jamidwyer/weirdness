import { combineReducers } from 'redux';
import favorites from './reducers/favorites';
import gifs from './reducers/gifs';

export default combineReducers({
  favorites,
  gifs,
});
