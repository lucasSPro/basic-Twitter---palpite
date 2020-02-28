import React, {Component} from 'react';
import socket from 'socket.io-client';
import api from '../../services/api';

import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Palpite from '../../components/Palpite';

import Icon from 'react-native-vector-icons/Entypo';

export default class Timeline extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Timeline',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('New')}>
        <Icon
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginRight: 20}}
          name="documents"
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
    ),
  });

  state = {
    palpites: [],
  };

  async componentDidMount() {
    this.subscribeToEvents();
    const response = await api.get('palpite');

    this.setState({palpites: response.data});
  }

  subscribeToEvents = () => {
    const io = socket('http://10.0.3.2:3000');

    io.on('palpite', data => {
      this.setState({palpites: [data, ...this.state.palpites]});
    });
    io.on('like', data => {
      this.setState({
        palpites: this.state.palpites.map(palpite =>
          palpite._id === data._id ? data : palpite,
        ),
      });
    });
  };

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
