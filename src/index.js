import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import firebase from 'firebase';
import firebaseConfig from '../config/firebase';
//redux
import configureStore from 'redux/configureStore';
import Root from 'containers/Root';
//router
import {browserHistory} from 'react-router';

firebase.initializeApp(firebaseConfig);

const store = configureStore();
const rootElement = document.getElementById('root');
ReactDOM.render((
  <AppContainer>
    <Root store={store}  history={browserHistory}/>
  </AppContainer>
), rootElement);

if (module.hot) {
  /**
 * Warning from React Router, caused by react-hot-loader.
 * The warning can be safely ignored, so filter it from the console.
 * Otherwise you'll see it every time something changes.
 * See https://github.com/gaearon/react-hot-loader/issues/298
 */

  

  const orgError = console.error; // eslint-disable-line no-console
  console.error = (...args) => { // eslint-disable-line no-console
    if (args && args.length === 1 && 'String' && args[0].indexOf('You cannot change <Router routes>;') > -1) {
      // React route changed
    } else {
      // Log the error as normally
      orgError.apply(console, args);
    }
  };

  module.hot.accept('./containers/Root', () => {
      const NextRoot = require('./containers/Root').default;
      ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} history={browserHistory}/>
      </AppContainer>, rootElement);
    })
}
