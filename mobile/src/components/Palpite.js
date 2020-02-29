import React, {Component} from 'react';
import api from '../services/api';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Palpite extends Component {
  handleLike = () => {
    const {_id} = this.props.palpite;
    api.post(`likes/${_id}`);
  };

  condLike = likes => {
    if (likes !== 0) {
      return 'hand-peace-o';
    } else {
      return 'hand-pointer-o';
    }
  };

  render() {
    const {palpite} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.author}>{palpite.author}</Text>
        <Text style={styles.content}>{palpite.content}</Text>

        <TouchableOpacity onPress={this.handleLike} style={styles.likeButton}>
          {/* <Icon name="ios-heart-empty" size={20} color="#999" /> */}
          <Icon name={this.condLike(palpite.likes)} size={20} color="#6A2894" />
          <Text style={styles.likeText}>{palpite.likes}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  author: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C2022',
  },

  content: {
    fontSize: 15,
    lineHeight: 20,
    color: '#1C2022',
    marginVertical: 10,
  },

  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  likeText: {
    color: '#999',
    marginLeft: 5,
  },
});
