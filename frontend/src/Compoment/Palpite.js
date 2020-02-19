import React, { Component } from 'react';
import api from '../services/api';

import like from '../like.svg';
import './Palpite.css'

export default class Palpite extends Component {

  handleLike = async () => {
    const {_id} = this.props.palpites;
    
    await api.post(`likes/${_id}`)
  }

  render() {
    const { palpites } = this.props;

    return(
      <li className="palpite">
        <strong> {palpites.author} </strong>
        <p> {palpites.content} </p>
        <button type='button' onClick={this.handleLike}>
          <img src={like} alt='Like' />
          {palpites.likes}
        </button>
      </li>
    );
  }
}
