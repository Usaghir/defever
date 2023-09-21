import React, { useState } from "react";
import SignUp from "./signUp/SignUp";
import Auth from "../../services/Auth";
import Image from "./Image";
import SignIn from "./signIn/SignIn";

function Landing() {
  const [registerSuccess, setRegisterSuccess] = useState(null);

  async function register(registrationData) {
    const success = await Auth.register(registrationData);
    setRegisterSuccess(success);
  }

  return (
    <div className="container-fluid w-75">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6">
          <Image />
        </div>
        <div className="col-md-4">
          <SignIn />
          <br />
          <SignUp onSubmit={register} />
          {registerSuccess === false && (
            <div className="alert custom-alert-danger mt-3">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
              Couldn't register. Check credentials and try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;
