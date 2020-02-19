import React, { Component } from 'react';
import api from '../services/api';
import socket from 'socket.io-client';

import palpiteiroLogo from '../palpite.svg';
import '../Pages/Timeline.css';

import Palpite from '../Compoment/Palpite';

export default class Pages extends Component {
  state = {
    palpites: [],
    newPalpite: '',
  }
  async componentDidMount(){
    this.subscribeToEvents();
    const respose = await api.get('palpite');

    this.setState({ palpites: respose.data})
  }
  subscribeToEvents = () => {
    const io = socket('http://localhost:3000');

    io.on('palpite', data =>{
      this.setState({ palpites: [ data, ...this.state.palpites] });
    });
    io.on('like', data =>{
      console.log(data);
    });
  }

  handleInputChange = e => {
    this.setState({ newPalpite: e.target.value});
  }
  handleNewPalpite = async e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newPalpite;
    const author = localStorage.getItem('@palpite:username');

    await api.post('palpite', {content, author});

    this.setState({newPalpite: ''});
  }
  render() {
    return(
      <div className="timeline-wrapper">
        <img height={25} src={palpiteiroLogo} alt='Palpiteiro' />
        
        <form>
          <textarea
            value={this.state.newPalpite}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewPalpite}
            placeholder='What is going on'/>
        </form>
        <ul className="palpite-list">
        {this.state.palpites.map(palpite => <Palpite key={palpite._id} palpites={palpite}/>)}
        </ul>
      </div>
    );
  }
}
