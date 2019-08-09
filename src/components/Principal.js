import * as React from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';

export default class Principal extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Conversas' },
      { key: 'second', title: 'Contatos' },
    ],
  };
  
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: Conversas,
          second: Contatos,
        })}
        renderTabBar={props => <TabBarMenu {...props} />}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, 
                          height: Dimensions.get('window').height }}
      />
    );
  }
}
