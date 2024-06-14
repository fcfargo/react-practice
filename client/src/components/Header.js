import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    const isAuthLoggedIn = this.props.user;
    switch (isAuthLoggedIn) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1" style={{ margin: '0 10px' }}>
            <Payments />
          </li>,
          <li key="3">Credits : {this.props.user.credits}</li>,
          <li key="2">
            <a href="/api/users/logout">Logout</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.user ? '/surveys' : '/'} className="brand-logo">
            Emaily
          </Link>
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
  return { user: auth };
}

export default connect(mapStateToProps)(Header);
