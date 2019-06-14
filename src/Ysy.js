import React, { Component } from 'react';
import './style/Ysy.css';

class Ysy extends Component {
  render() {
    return (
      <div className="container">
        <div className="profile">
          <div className="group">
            <div className="deco">
              <div className="monitor">
                <div className="stand"></div>
              </div>
            </div>
            <div className="hair"></div>
            <div className="ear"></div>
            <div className="ear right"></div>
            <div className="fringe"></div>
            <div className="face"></div>
            <div className="eyebrow"></div>
            <div className="eye"></div>
            <div className="eye right"></div>
            <div className="nose"></div>
            <div className="blush"></div>
            <div className="mouth">
              <div className="tongue"></div>
            </div>
            <div className="neck"></div>
            <div className="body tohide">
            <div className="collar"></div>
            <div className="apron"></div>
            </div>
          </div>
        </div>
        <p className='name'>Ysy</p>
      </div>
    );
  }
}

export default Ysy;
