import React, { Component } from 'react';
import './style/Hao.css';

class Hao extends Component {
  render() {
    return (
      <a className="container">
        <div className="profile">
          <div className="group">
            <div className="hair"></div>
            <div className="ear right"></div>
            <div className="fringe"></div>
            <div className="face"></div>
            <div className="eyebrow"></div>
            <div className="eye"></div>
            <div className="eye right"></div>
            <div className="blush"></div>
            <div className="nose"></div>
            <div className="lip"></div>
            <div className="mouth">
              <div className="teeth"></div>
              <div className="tongue"></div>
            </div>
            <div className="neck"></div>
            <div className="body">
              <div className='collar'>
              </div>
            </div>
          </div>
      </div>
      <p className="name">Hao</p>
      </a>
    );
  }
}
export default Hao;
