import React, { Component } from 'react';

import like from '../like.svg';
import './Palpite.css'

export default class Palpite extends Component {
  render() {
    const { palpites } = this.props;

    return(
      <li className="palpite">
        <strong> {palpites.author} </strong>
        <p> {palpites.content} </p>
        <button type='button'>
          <img src={like} alt='Like' />
          {palpites.likes}
        </button>
      </li>
    );
  }
}
