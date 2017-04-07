import React, { Component } from 'react';
import './style/Yozen.css';

class Yozen extends Component {
  render() {
    return (
      <a className="container">
        <div className="profile">
          <div className="group">
            <div className="hair"></div>
            <div className="fringe"></div>
            <div className="ear"></div>
            <div className="ear right"></div>
            <div className="face"></div>
            <div className="eyebrow"></div>
            <div className="eye"></div>
            <div className="eye right"></div>
            <div className="nose"></div>
            <div className="blush"></div>
            <div className="lip"></div>
            <div className="mouth">
            </div>
            <div className="neck"></div>
            <div className="collar"></div>
            <div className="body"></div>
        </div>
      </div>
      <p className="name">Yozen</p>
      </a>
    );
  }
}

export default Yozen;
