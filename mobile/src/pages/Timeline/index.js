import React, {Component} from 'react';
import api from '../../services/api';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

export default class Timeline extends Component {
  static navigationOptions = {
    title: 'Timeline',
    headerRight: (
      <TouchableOpacity onPress={() => {}}>
        <Icon
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginRight: 20}}
          name="documents"
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
    ),
  };

  state = {
    palpites: [],
  };

  async componentDidMount() {
    const response = await api.get('palpite');

    this.setState({palpites: response.data});
    console.log(response);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.palpites.map(palpite => (
          <View style={styles.text} key={palpite._id}>
            <Text>{palpite.author}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
