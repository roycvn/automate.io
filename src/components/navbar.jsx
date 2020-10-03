import React, { Component } from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="inner-container">
        <div className="fl">
          <i className="fas fa-layer-group logo-icon"></i>
          <span className="logo-title">flowapp</span>
        </div>
        <div className="fr">
          <button type="button">Logout</button>
        </div>
        <div className="cl"></div>
      </div>
    </nav>
  );
}

export default NavBar;