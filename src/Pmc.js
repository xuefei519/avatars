import React, { Component } from 'react';
import './style/Pmc.css';

class Pmc extends Component {
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
            <div className="blush"></div>
            <div className="nose"></div>

            <div className="mouth">

            </div>
            <div className="neck"></div>
            <div className="body">
              <div className='string'></div>
              285
            </div>
          </div>
        </div>
        <p className="name">PMC</p>
      </a>
    );
  }
}
export default Pmc;
