import React, { Component } from 'react';
import './style/Tsing.css';

class Tsing extends Component {
  render() {
    return (
      <a className="container">
        <div className="profile">
          <div className="group">
            <div className="cap"></div>
            <div className="hair"></div>
            <div className="ear"></div>
            <div className="ear right"></div>
            <div className="face"></div>
            <div className="eyebrow"></div>
            <div className="tohide">
              <div className="eye"></div>
              <div className="eye right"></div>
              <div className="glasses"></div>
            </div>
            <div className="deco">
              <div className="cateye"></div>
              <div className="cateye right"></div>
            </div>

            <div className="blush"></div>
            <div className="mouth">
            </div>
            <div className="neck"></div>
            <div className="body">
              <div className="collar">
              </div>
          </div>
        </div>
      </div>
      <p className='name'>Tsing</p>
      </a>
    );
  }
}

export default Tsing;
