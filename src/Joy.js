import React, { Component } from 'react';
import './style/Joy.css';

class Joy extends Component {
  render() {
    return (
      <a className="container">
        <div className="profile">
          <div className="group">
            <div className="hair"></div>
            <div className="ear"></div>
            <div className="ear right"></div>
            <div className="fringebase"></div>
            

            <div className="face"></div>
            <div className="eyebrow"></div>
            <div className="eye"></div>
            <div className="eye right"></div>
            <div className="blush"></div>
            <div className="nose"></div>
            <div className="lip"></div>
            <div className="mouth">
              <div className="tongue"></div>
            </div>
            <div className="neck"></div>
            <div className="body">
            <div className="collar"></div>
            </div>
          </div>
        </div>
        <p className='name'>Joy</p>
      </a>
    );
  }
}

export default Joy;
