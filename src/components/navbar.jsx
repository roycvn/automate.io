import React, { Component } from 'react';

class NavBar extends Component {

  // logout = () => {
  //   this.props.doLogout();
  // }

  render() {
    const { isLoggedIn } = this.props;
    let classList = 'hide-visibility';
    if (isLoggedIn) {
      classList = '';
    }
    return (<nav className="navbar">
      <div className="inner-container">
        <div className="fl">
          <i className="fas fa-layer-group logo-icon"></i>
          <span className="logo-title">flowapp</span>
        </div>
        <div className={"fr " + classList}>
          <button type="button" onClick={this.props.doLogout}>Logout</button>
        </div>
        <div className="cl"></div>
      </div>
    </nav>);
  }
}

export default NavBar;