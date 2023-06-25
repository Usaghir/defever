import React, { Component } from 'react';
import Login from './Login';
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
      <nav className="Loginnavbar Loginnavbar-expand-lg  justify-content-around bg-light">
        <img
          className="Loginnavbar-brand"
          src={Logo}
          alt="#"
          style={{ width: 80 }}
        />

        <div className=" ml-5" id="LoginnavbarColor01 ">
          <Login onSubmit={this.login} />
        </div>
      </nav>
    );
  }
}
export default LoginNavbar;
