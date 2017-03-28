import React, { Component } from 'react';
import './style/Mengru.css';

class Mengru extends Component {
  render() {
    return (
      <a className="container">
        <div className="profile">
          <div className="group">
            <div className="hair"></div>

            <div className="fringe left"></div>
            <div className="fringe right"></div>

            <div className="face"></div>
            <div className="eyebrow"></div>
            <div className="glasses"></div>
            <div className="eye"></div>
            <div className="eye right"></div>
            <div className="blush"></div>
            <div className="nose"></div>

            <div className="mouth">
              <div className="teeth"></div>
            </div>
            <div className="neck"></div>
            <div className="body">
            <div className="collar"></div>
            </div>
          </div>
        </div>
        <p className="name">Mengru</p>
      </a>
    );
  }
}

export default Mengru;
