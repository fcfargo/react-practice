import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    const isAuthLoggedIn = this.props.auth;
    switch (isAuthLoggedIn) {
      case null:
        return 'Still deciding';
      case false:
        return 'Im Logged out';
      default:
        return 'Im Logged in';
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">Emaily</a>
          <ul className="right">
            <li>
              <a>{this.renderContent()}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
