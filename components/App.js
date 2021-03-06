import React, {Component} from 'react';
import {
  DeviceEventEmitter,
  Navigator,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { EventEmitter } from 'fbemitter';
import styles from '../styles/styles.js';
import Drawer from 'react-native-drawer';
import navigationHelper from '../helpers/navigation';
import Menu from './Menu';
import Settings from './Settings';
import NewType from './NewType'
import NewActivity from './NewActivity';

let _emitter = new EventEmitter;

class App extends Component {
  componentDidMount() {
    var self = this;
    _emitter.addListener('openMenu', () => {
        self._drawer.open();
    });

    _emitter.addListener('back', () => {
        self._navigator.pop();
    });
  }

  render() {
    return (
      <Drawer
          ref={(ref) => this._drawer = ref}
          type="overlay"
          content={<Menu navigate={(route) => {
              this._navigator.push(navigationHelper(route));
              this._drawer.close()
          }}/>}
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles= {styles.navbar}
          tweenHandler={(ratio) => ({
              main: { opacity:(2-ratio)/2 }
          })}>
          <Navigator
              ref={(ref) => this._navigator = ref}
              configureScene={(route) => Navigator.SceneConfigs.FloatFromLeft}
              initialRoute={{
                  id: 'Settings',
                  title: 'Settings',
                  index: 0
              }}
              renderScene={(route, navigator) => this._renderScene(route, navigator)}
              navigationBar={
                  <Navigator.NavigationBar
                      style={styles.navBar}
                      routeMapper={NavigationBarRouteMapper} />
              }
          />
      </Drawer>
    );
  }

  _renderScene(route, navigator) {
    switch (route.id) {
      case 'NewActivity':
        return (<NewActivity navigator={navigator} />);
      case 'NewType':
        return (<NewType navigator={navigator} />);
      case 'Settings':
        return (<Settings navigator={navigator} />);
    }
  }
}

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        style={styles.navBarLeftButton}
        onPress={() => {_emitter.emit('openMenu')}}>
        <Text>Menu</Text>
      </TouchableOpacity>
    )
  },

  RightButton(route, navigator, index, navState) {
    return null;
  },

  Title(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    )
  }
}

export default App;
