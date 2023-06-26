import React, { Component } from 'react';
import SignUp from './SignUp';
import Auth from '../../services/Auth';
import Description from './Description';
import '../Components.css';
import LoginNavbar from './LoginNavBar';


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
      <LoginNavbar/>
        <div className="container mt-5">
          <div className="grid-container mt-5">
            <Description text1="By Raja Umer" />
            <SignUp onSubmit={this.register} />
          </div>
        </div>
       
      </div>
    );
  }
}

export default Home;
