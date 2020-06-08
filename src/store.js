import { createStore } from 'redux';
import rootReducer from 'reducer';
import middleware from 'middleware';
import throttle from 'lodash/throttle';

import { loadState, saveState } from 'services/syncState';

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  middleware,
);

store.subscribe(throttle(() => {
  saveState({
    auth: store.getState().auth,
  });
}));

export default store;
