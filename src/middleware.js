import {
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const isProd = process.env.REACT_APP_ENV === 'production';
const middlewareList = [];

middlewareList.push(thunk);
if (!isProd) {
  middlewareList.push(createLogger());
}

const middleware = compose(
  applyMiddleware(...middlewareList),
  window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
);

export default middleware;
