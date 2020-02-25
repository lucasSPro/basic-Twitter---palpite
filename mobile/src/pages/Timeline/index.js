import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';

export default class Timeline extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A2894',
  },
});

// eslint-disable-next-line no-undef
Main.navigationOptions = {
  title: 'Timeline',
};
