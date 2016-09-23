import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Input,
  Button
} from 'native-base';
import styles from '../styles/styles';
import RealmHelper from '../helpers/realmHelper';

class Settings extends Component {
  constructor(props) {
      super(props);
      this.state = {
        types: [],
        newType: '',
        editMode: false
       };
  }

  componentDidMount() {
    console.log('Mounted');

    let types = RealmHelper.getTypes();
    this.setState({types});
    console.log(types.length);
  }

  onPress() {
    console.log('onPress: ' + this.state.newType);
    RealmHelper.saveItem(this.state.newType);
  }

  render() {
    return (
      <Container style={{marginTop: 70}}>
        <Content>
          <List>
            <ListItem>
              <Input
                autoCapitalize="sentences"
                autoCorrect={false}
                autoFocus={true}
                placeholder='Activity type'
                onChangeText={(newType) => this.setState({newType})} />
            </ListItem>

            <ListItem>
              <Button
                block rounded primary
                onPress={this.onPress}
                >Save</Button>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

module.exports = Settings;
