import React, { Component } from 'react';
import './style/Tsing.css';

class Tsing extends Component {
  render() {
    return (
      <div className="container">
        <div className="profile">
          <div className="group">


            <div className="ear"></div>
            <div className="ear right"></div>
            <div className="face"></div>
            <div className="eyebrow"></div>
            <div className="tohide">
              <div className="cap"></div>
              <div className="hair"></div>
              <div className="dummyEye"></div>
              <div className="dummyEye right"></div>
              <div className="glasses"></div>
              <div className="blush"></div>
              <div className="mouth"></div>

              <div className="neck"></div>
              <div className="body">
                <div className="collar">
                </div>
            </div>

            </div>
            <div className="deco">
              <div className="eye"></div>
              <div className="eye right"></div>
              <div className="dummyBlush"></div>
              <div className="dummyMouth"></div>
              <div className="hair"></div>
              <div className="fringe"></div>

              <div className="neck"></div>
              <div className="bowtie"></div>
              <div className="body">
                <div className="collar"></div>
                </div>
            </div>

        </div>
      </div>
      <p className='name'>Tsing</p>
      </div>
    );
  }
}

export default Tsing;
