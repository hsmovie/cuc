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
  module.hot.accept('./containers/Root', () => {
      const NextRoot = require('./containers/Root').default;
      ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} history={browserHistory}/>
      </AppContainer>, rootElement);
    })
}
