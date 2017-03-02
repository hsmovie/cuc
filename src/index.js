import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase';
import firebaseConfig from '../config/firebase';
//redux
import configureStore from 'redux/configureStore';
import {Provider} from 'react-redux';
// //router
// import Root from 'containers/Root';
// import {browserHistory} from 'react-router';

firebase.initializeApp(firebaseConfig);

const store = configureStore();
const rootElement = document.getElementById('root');


import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
 
import App from 'containers/App'; 
const Example = React.createClass({
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            true,
      navigation:           true,
      verticalAlign:        false,
      arrowNavigation:      true,
      sectionPaddingTop:    '4rem', // the section top padding 
      delay:                400 // the scroll animation speed
    };
 
    return (
      <Provider store={store}>
      <div>
        <Header>
          <App/>
        </Header>
        <Footer>
          <a href="">Dcoumentation</a>
          <a href="">Example Source</a>
          <a href="">About</a>
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
        </div>
      </Provider>
    );
  }
});
 
ReactDOM.render(<Example/>, rootElement);



// ReactDOM.render(
//   <Root store={store} history={browserHistory}/>
//     , rootElement);

// ReactDOM.render((
//   <AppContainer>
//     <Root store={store}  history={browserHistory}/>
//   </AppContainer>
// ), rootElement);

// if (module.hot) {


//   /**
//  * Warning from React Router, caused by react-hot-loader.
//  * The warning can be safely ignored, so filter it from the console.
//  * Otherwise you'll see it every time something changes.
//  * See https://github.com/gaearon/react-hot-loader/issues/298
//  */

  

//   const orgError = console.error; // eslint-disable-line no-console
//   console.error = (...args) => { // eslint-disable-line no-console
//     if (args && args.length === 1 && 'String' && args[0].indexOf('You cannot change <Router routes>;') > -1) {
//       // React route changed
//     } else {
//       // Log the error as normally
//       orgError.apply(console, args);
//     }
//   };

//   module.hot.accept('./containers/Root', () => {
//       const NextRoot = require('./containers/Root').default;
//       ReactDOM.render(
//       <AppContainer>
//         <NextRoot store={store} history={browserHistory}/>
//       </AppContainer>, rootElement);
//     })
// }
