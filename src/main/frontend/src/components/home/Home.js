import React, { Component } from 'react';
import SignUp from './SignUp';
import Auth from '../../services/Auth';
import LoginNavBar from './LoginNavBar';
import Description from './Description';
import '../Components.css';
import Footer from './Footer';

class Home extends Component {
  async register(registrationData) {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
  }

  render() {
    return (
      <div className="">
        <LoginNavBar />
        <div className="container mt-5">
          <div className="grid-container mt-5">
            <Description text1="By Raja Umer" />
            <SignUp onSubmit={this.register} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
