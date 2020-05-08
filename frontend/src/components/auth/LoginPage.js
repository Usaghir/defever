import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
import LoginNavbar from "./LoginNavBar";
import LoginFooter from "./LoginFooter"
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
        let a = 0;
        return (
            <div className="wrapper"  >
                <LoginNavbar/>
                <div className="container" >
                    
                    <div className="row mt-5" >
                        <div className="col-md-6 " style={{color: "white"}} >
            
                            
                           <LoginDescription text1="By Raja Umer"/>
                           <LoginDescription text1="By FeiFei"/>
                           <LoginDescription text1="By Imanol"/>
                           <LoginDescription text1="By Riaz"/>
                           <LoginDescription text1="By Akateh"/>
                           <LoginDescription text1="By Simon"/>
                           <LoginDescription text1="By Rasmus"/>
                           <LoginDescription text1="By Sladjan"/>
                           <LoginDescription text1="By Erika"/>

                        </div>

                        <div className="col-md-6" >
                            <div className="col d-flex justify-content-end">
                                <div className="col-7 mt-4 ">
                                    <RegisterForm onSubmit={this.register} />
                                    <div className=" mt-4 ">
                        
                                    <LoginTrendingPagesBar  />
                                    </div>
                                    <div className=" mt-4 ">
                                    <LoginTrendingPostsBar  />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <LoginFooter/>
            </div>
        );
    }
}

export default LoginPage;