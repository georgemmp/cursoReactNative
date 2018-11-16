import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Route from './src/route/Route';
import reducers from './src/reducers';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCfi-ndgksEZI3UNO4ovDj_VKvQdViz-Eg',
      authDomain: 'whatsapp-clone-dc72a.firebaseapp.com',
      databaseURL: 'https://whatsapp-clone-dc72a.firebaseio.com',
      projectId: 'whatsapp-clone-dc72a',
      storageBucket: 'whatsapp-clone-dc72a.appspot.com',
      messagingSenderId: '89301573398'
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

