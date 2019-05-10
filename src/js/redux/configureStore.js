import {
  compose,
  createStore,
  applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducers';

// Redux DevTools Extension for Chrome and Firefox
const reduxDevTool = () => {
  return typeof window === 'object'
  && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f;
};

export default function configureStore(initialState) {
  const composedStoreEnhancer = compose(reduxDevTool());

  const store = composedStoreEnhancer(createStore)(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );

  if (module.hot) {
    module.hot.accept('./rootReducers', () => {
      store.replaceReducer(require('./rootReducers'));
    });
  }

  return store;
}
