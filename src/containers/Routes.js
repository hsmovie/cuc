import React from 'react';
import {Router, Route, IndexRoute } from 'react-router';
import App from './App';
import {MainRoute, Admin} from 'containers/routes/index';


const Routes = ({history}) => (
 <Router history={history}>
      <Route path="/" component={App}>
            <IndexRoute component={MainRoute}/> 
            <Route path="/admin" component={Admin}/>
      </Route>
      
  </Router>
        
)

export default Routes;