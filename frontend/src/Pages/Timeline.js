import React, { Component } from 'react';
import api from '../services/api';

import palpiteiroLogo from '../palpite.svg';
import './Timeline.css';

export default class Pages extends Component {
  state = {
    newPalpite: '',
  }
  handleInputChange = e => {
    this.setState({ newPalpite: e.target.value});
  }
  handleNewPalpite = async e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newPalpite;
    const author = localStorage.getItem('@palpite:username');

    await api.post('palpite', {content, author});
  }
  render() {
    return(
      <div className='timeline-wrapper'>
        <img height={25} src={palpiteiroLogo} alt='Palpiteiro' />
        
        <form>
          <textarea
            value={this.state.newPalpite}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewPalpite}
            placeholder='What is going on'/>
        </form>

      </div>
    );
  }
}
