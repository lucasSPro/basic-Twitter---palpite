import React, { Component } from 'react';

import palpiteiroLogo from '../twitter.svg';
import './Login.css';


export default class Pages extends Component {
  render() {
    // eslint-disable-next-line 
    this.state = {
      username: '',
    };
    return (
      <div className='login-wrapper'>
        <img src={palpiteiroLogo} alt='palpiteiro' />
        <form>
        <input 
          value={this.state.username}
          placeholder='Nome de usuário'
        />
        <button type='submit'>Entrar</button>
        </form>

      </div>
    )
  }
}
