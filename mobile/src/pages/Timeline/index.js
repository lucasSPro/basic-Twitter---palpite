import React, {Component} from 'react';
import api from '../../services/api';

import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Palpite from '../../components/Palpite';

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
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.palpites}
          keyExtractor={palpite => palpite._id}
          renderItem={({item}) => <Palpite palpite={item} />}
        />
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
