import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Route from './src/route/Route';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Route />
      </Provider>
    );
  }
}

