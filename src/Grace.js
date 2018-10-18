import React, { Component } from 'react';
import './style/Grace.css';

class Grace extends Component {
  render() {
    return (
      <a className="container">
      <div className="profile">
        <div className="group">
          <div className="hair"></div>
          <div className="ear"></div>
          <div className="earring"></div>
          <div className="ear right"></div>
          <div className="earring right"></div>
          <div className="fringebase"></div>
          <div className="hairband"></div>
          <div className="bowtie"></div>

          <div className="face"></div>
          <div className="eyebrow"></div>
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="blush"></div>
          <div className="nose"></div>
          <div className="lip"></div>
          <div className="mole"></div>
          <div className="mouth"></div>
          <div className="teeth"></div>
          <div className="neck"></div>
          <div className="body">
          <div className="necklace"></div>
          <div className="collar"></div>
          <div className="dress"></div>
          </div>
        </div>
      </div>
      <p className="name">Grace</p>
      </a>
    );
  }
}
export default Grace;
