import React, { Component } from 'react';
import LoginForm from './LoginForm';
import Logo from './logo.png';
import Auth from '../../services/Auth';

class LoginNavbar extends Component {
  async login(loginData) {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      alert('Invalid credentials');
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg  justify-content-around bg-light">
        <img
          className="navbar-brand"
          src={Logo}
          alt="#"
          style={{ width: 80 }}
        />

        <div className=" ml-5" id="navbarColor01 ">
          <LoginForm onSubmit={this.login} />
        </div>
      </nav>
    );
  }
}
export default LoginNavbar;
