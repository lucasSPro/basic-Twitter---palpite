import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class New extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    newPalpite: '',
  };

  goBack = () => {
    this.props.navigation.pop();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBack}>
            <Icon name="close" color="#6A2894" size={24} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>Palpitar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: '#6A2894',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  input: {
    margin: 20,
    fontSize: 16,
    color: '#333',
  },
});
