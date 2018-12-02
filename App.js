import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Route from './src/route/Route';
import reducers from './src/reducers';

export default class App extends React.Component {
  componentWillMount() {
      
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Route />
      </Provider>
    );
  }
}

