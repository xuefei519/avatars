import React, { Component } from 'react';
import './style/AnnieH.css';

class AnnieH extends Component {
  render() {
    return (
      <div className="container">
        <div className="profile">
          <div className="group">
            <div className="hair"></div>
            <div className="fringe"></div>
            <div className='extraHair'></div>
            <div className="ear"></div>
            <div className="ear right"></div>
            <div className="face">
              <div className='mole'></div>
            </div>
            <div className="eyebrow"></div>
            <div className="eye"></div>
            <div className="eye right"></div>
            <div className="blush"></div>
            <div className="nose"></div>
            <div className="lip"></div>
            <div className='dimples'></div>
            <div className="mouth">
              <div className='teeth'></div>
              <div className="tongue"></div>
            </div>
            <div className="neck"></div>
            <div className="body">
              <div className="collar"></div>
              <div className='tank'></div>
            </div>
          </div>
          </div>
          <p className='name'>Annie H.</p>
        </div>
      );
    }
}

export default AnnieH;
