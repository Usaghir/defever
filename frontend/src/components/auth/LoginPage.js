import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import Auth from '../../services/Auth';
import LoginNavbar from './LoginNavBar';
import LoginFooter from './LoginFooter';
import LoginDescription from './LoginDescription';
import LoginTrendingPostsBar from './LoginTrendingPostsBar';
import LoginTrendingPagesBar from './LoginTrendingPagesBar';

class LoginPage extends Component {
  async register(registrationData) {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
  }

  render() {
    return (
      <div className="wrapper">
        <LoginNavbar />
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 " style={{ color: 'white' }}>
              <LoginDescription text1="By Raja Umer" />
            </div>
            <div className="col-md-6">
              <div className="col d-flex justify-content-end">
                <div className="col-7 mt-4 ">
                  <RegisterForm onSubmit={this.register} />
                  <div className=" mt-4 "></div>
                  <div className=" mt-4 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoginFooter />
      </div>
    );
  }
}

export default LoginPage;
