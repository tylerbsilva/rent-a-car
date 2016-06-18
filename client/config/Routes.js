import React from 'react';
// IMPORT REACT ROUTER DEPS
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../Store';
// remove random key
browserHistory.queryKey = false;

import App from '../components/App';
import Home from '../components/Home';

const Routes = React.createClass({
    render() {
      return (
          <Provider ref={"myRef"} id="0" store={store}>
            <Router history={browserHistory}>
              <Route path='/' component={App}>
                <IndexRoute component={Home}/>
              </Route>
            </Router>
          </Provider>
      )
    }
});

export default Routes;
