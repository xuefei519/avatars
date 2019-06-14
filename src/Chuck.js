import React, { Component } from 'react';
import './style/Chuck.css';

class Chuck extends Component {
  render() {
    return (
      <div className="container">
        <div className="profile">
          <div className="group">
            <div className="hat">
              <div className="pika-ear left"></div>
              <div className="pika-ear right"></div>
              <div className="pika-eye"></div>
              <div className="pika-eye right"></div>
              <div className="pika-blush"></div>
              <div className="pika-nose"></div>
              <div className="pika-mouth"></div>
            </div>
            <div className="hair"></div>
            <div className="ear"></div>
            <div className="ear right"></div>
            <div className="fringe"></div>
            <div className="face"></div>
            <div className="eyebrow"></div>
            <div className="glasses"></div>
            <div className="eye"></div>
            <div className="eye right"></div>
            <div className="blush"></div>
            <div className="nose"></div>
            <div className="mouth">
              <div className="tongue"></div>
            </div>
            <div className="neck"></div>
            <div className="collar"></div>
            <div className="body">
            </div>
          </div>
        </div>
        <p className='name'>Chuck</p>
      </div>
    );
  }
}

export default Chuck;
