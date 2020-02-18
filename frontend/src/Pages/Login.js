
import React, { Component } from 'react';

import palpiteiroLogo from '../palpite.svg';
import './Login.css';


export default class Pages extends Component {
    state = {
      username: '',
    };
    
    handleSubmit = e => {
      e.preventDefault();

      const { username } = this.state;

      if (!username.length) return;

      localStorage.setItem('@palpite:username', username);

      this.props.history.push('/timeline');
    }
    // eslint-disable-next-line no-undef
    handleInputChange = e =>{
      this.setState({ username: e.target.value })
    }
    render() {
      return (
        <div className='login-wrapper'>
          <img src={palpiteiroLogo} alt='palpiteiro' />
          <form onSubmit={this.handleSubmit}>
            <input 
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder='Nome de usuário'
            />
          <button type='submit'>Entrar</button>
          </form>

        </div>
      )
  }
}
