import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import Auth from '../../services/Auth';
import LoginNavbar from './LoginNavBar';
import LoginDescription from './LoginDescription';
import '../Components.css';

class LoginPage extends Component {
  async register(registrationData) {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
  }

  render() {
    return (
      <div className="">
        <LoginNavbar />
        <div className="container">
          <div className="grid-container mt-4">
            <LoginDescription text1="By Raja Umer" />

            <RegisterForm onSubmit={this.register} />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
