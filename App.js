import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Route from './src/route/Route';
import reducers from './src/reducers';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
    };
    firebase.initializeApp(config);  
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Route />
      </Provider>
    );
  }
}

