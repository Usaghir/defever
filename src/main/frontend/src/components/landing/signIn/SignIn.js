import React, { useState } from "react";
import SignInForm from "./SignInForm";
import Auth from "../../../services/Auth";

function SignIn() {
  const [loginError, setLoginError] = useState(null);

  async function login(loginData) {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      // Set the login error message
      setLoginError("Invalid credentials ");

      // Remove the error message after a few seconds (adjust the delay as needed)
      setTimeout(() => {
        setLoginError(null);
      }, 5000);
    }
  }

  return (
    <div>
      <SignInForm onSubmit={login} />
      {loginError && (
        <div className="alert custom-alert-danger mt-3">
          <i className="fa fa-exclamation-circle mr-1" aria-hidden="true"></i>
          {loginError}
        </div>
      )}
    </div>
  );
}

export default SignIn;
