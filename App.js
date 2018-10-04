import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import FormLogin from './src/components/FormLogin';
import FormCadastro from './src/components/FormCadastro'

export default class App extends React.Component {
  render() {
    return (
      <FormCadastro />
    );
  }
}

