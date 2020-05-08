import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Logo from "./logo.png";
import Auth from "../../services/Auth";

class LoginNavbar extends Component {
    async login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
    }
    render() {


    return (
      
            <nav className=" sticky-top row bg-light justify-content-around" style={{ height:80}}>
                <img className=" mr-3 " src={Logo} alt="#" style={{width:120, height:120}}/>
            
                <div className=" ml-5" id="navbarColor01 "  >
                    <LoginForm onSubmit={this.login} />
                </div>
            </nav>
     
    ); 
}
}
export default LoginNavbar;