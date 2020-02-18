import React, { Component } from 'react';

import './Palpite.css';

export default class Palpite extends Component {
  render() {
  return <h1>{ this.props.palpites.author}</h1>;
  }
}
