import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from 'utils/registerServiceWorker';
import store from 'store';

import App from 'App';
import GlobalStyles from 'styles/global.js';

const MyApp = () => {
  store.dispatch({type: '@app/@@INIT'});

  return (
    <Provider store={store}>
      <>
        <GlobalStyles />
        <App />
      </>
    </Provider>
  );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
