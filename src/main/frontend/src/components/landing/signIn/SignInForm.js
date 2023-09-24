import React, { useState } from "react";
import "../Landing.css";

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (value) => {
    const minLength = 5; // Adjust as needed
    const maxLength = 25; // Adjust as needed

    if (!value) {
      return "Email is required";
    } else if (value.length < minLength || value.length > maxLength) {
      return `Email should be between ${minLength} and ${maxLength} characters`;
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      return "Invalid email address";
    }

    return null; // No errors
  };

  const validatePassword = (value) => {
    const minLength = 6; // Adjust as needed
    const maxLength = 15; // Adjust as needed

    if (!value) {
      return "Password is required";
    } else if (value.length < minLength || value.length > maxLength) {
      return `Password should be between ${minLength} and ${maxLength} characters`;
    }

    return null; // No errors
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    // Clear the email error when the user starts typing again
    setErrors({ ...errors, email: null });
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    // Clear the password error when the user starts typing again
    setErrors({ ...errors, password: null });
  };

  const handleFormSubmit = () => {
    const newErrors = {};

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError) {
      newErrors.email = emailError;
    }

    if (passwordError) {
      newErrors.password = passwordError;
    }

    if (Object.keys(newErrors).length === 0) {
      onSubmit({ email, password });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="card border-0">
      <div className="card-body ">
        <div className="form-group">
          <input
            type="email"
            className={`form-control rounded-pill ${
              errors.email ? "border-danger" : ""
            }`}
            placeholder="Email *"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          {errors.email && (
            <div className="text-danger small">
              <i
                className="fa fa-exclamation-circle mr-1"
                aria-hidden="true"
              ></i>
              {errors.email}
            </div>
          )}
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password *"
            className={`form-control rounded-pill ${
              errors.password ? "border-danger" : ""
            }`}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          {errors.password && (
            <div className="text-danger small">
              <i
                className="fa fa-exclamation-circle mr-1"
                aria-hidden="true"
              ></i>
              {errors.password}
            </div>
          )}
        </div>

        <div className="form-group text-center">
          <button
            className="btn  border-0 rounded-pill w-50 bebas-font"
            onClick={handleFormSubmit}
            style={{ backgroundColor: "#ff2f4f", color: "white" }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0C2C54")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff2f4f")}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
