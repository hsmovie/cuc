import React from 'react';
import {Router, Route, IndexRoute } from 'react-router';
import App from './App';
import {MainRoute, AuthRoute} from 'containers/routes/index';

import {SectionsContainer, Section, Header, Footer} from '../index';

const Routes = ({history} ) => (
      
 <Router history={history}>
      <Route path="/" component={App}>
            <IndexRoute component={MainRoute}/>
            <Route path="/auth" component={AuthRoute}/> 
        </Route>
  </Router>
       
)

export default Routes;