import React, { useState } from "react";

function SignUp({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateName = (value) => {
    const nameParts = value.split(" ");
    const minLength = 3;
    const maxLength = 25;

    if (nameParts.length < 2) {
      return "First and last name is required";
    }

    for (const part of nameParts) {
      if (part.length < minLength || part.length > maxLength) {
        return `Each name part should be between ${minLength} and ${maxLength} characters`;
      }
    }

    return null; // No errors
  };

  const validateEmail = (value) => {
    const minLength = 5;
    const maxLength = 25;

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
    const minLength = 6;
    const maxLength = 15;

    if (!value) {
      return "Password is required";
    } else if (value.length < minLength || value.length > maxLength) {
      return `Password should be between ${minLength} and ${maxLength} characters`;
    }

    return null; // No errors
  };

  const handleNameChange = (value) => {
    setName(value);
    // Clear the name error when the user starts typing again
    setErrors({ ...errors, name: null });
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

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (nameError) {
      newErrors.name = nameError;
    }

    if (emailError) {
      newErrors.email = emailError;
    }

    if (passwordError) {
      newErrors.password = passwordError;
    }

    if (Object.keys(newErrors).length === 0) {
      onSubmit({ name, email, password });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="card border-0 shadow-lg signUp">
      <div className="card-body ">
        <div>
          <div className="form-group">
            <input
              type="text"
              className={`form-control rounded-pill  ${
                errors.name ? "border-danger" : ""
              }`}
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="Name *"
              required
            />
            {errors.name && (
              <div className="text-danger small">
                <i
                  className="fa fa-exclamation-circle mr-1"
                  aria-hidden="true"
                ></i>
                {errors.name}
              </div>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={`form-control rounded-pill ${
                errors.email ? "border-danger" : ""
              }`}
              placeholder="Email *"
              required
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
              required
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
              className="btn  border-0 rounded-pill w-50 bebas-font app-buttons"
              onClick={handleFormSubmit}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0C2C54")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff2f4f")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
