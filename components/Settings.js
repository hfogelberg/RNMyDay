import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem
} from 'native-base';
import styles from '../styles/styles';
import RealmHelper from '../helpers/realmHelper';

class Settings extends Component {
  constructor(props) {
      super(props);
      this.state = {
        types: [],
        editMode: false
       };
  }

  componentDidMount() {
    console.log('Mounted');

    let locations = RealmHelper.getTypes();
    this.setState({types});
    console.log('Types found: ' + types.length);
  }
}

module.exports = Settings;
