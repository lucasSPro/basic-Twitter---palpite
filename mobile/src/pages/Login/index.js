import React, {Component} from 'react';

import logo from '../../assets/logoPalpite.png';

import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  AsyncStorage,
} from 'react-native';

export default class index extends Component {
  state = {
    username: '',
  };
  async componentDidMount() {
    const username = await AsyncStorage.getItem('@AppPalpite:username');
    if (username) {
      this.props.navigation.navigate('App');
    }
  }
  handlerInputChange = username => {
    this.setState({username});
  };

  handlerLogin = async () => {
    const {username} = this.state;
    if (!username.length) {
      return;
    }
    await AsyncStorage.setItem('@AppPalpite:username', username);

    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.content}>
          <View style={styles.divLogo}>
            <Image source={logo} style={styles.logo} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome de usuário"
            onSubmitEditing={this.handlerLogin}
            onChangeText={this.handlerInputChange}
            returnKeyType="send"
          />
          <TouchableOpacity onPress={this.handlerLogin} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A2894',
    alignContent: 'center',
  },

  divLogo: {
    width: 120,
    height: 55,
  },

  logo: {
    width: 120,
    height: 55,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  input: {
    borderWidth: 1,
    borderBottomColor: '#fff',
    borderRadius: 3,
    height: 44,
    paddingHorizontal: 15,
    backgroundColor: '#6A2894',
    alignSelf: 'stretch',
    marginTop: 20,
    textDecorationColor: '#fff',
  },

  button: {
    height: 44,
    alignSelf: 'stretch',
    marginTop: 15,
    backgroundColor: '#000',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
