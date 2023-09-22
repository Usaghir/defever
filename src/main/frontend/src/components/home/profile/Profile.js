import React, { useState, useEffect } from "react";
import UserApi from "../../../api/UserApi";
import "./profile.css";

function Profile({ user }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Fetch the user's profile data when the component mounts
    fetchProfileData();
  }, []); // The empty array ensures this effect runs only once, when the component mounts

  const fetchProfileData = async () => {
    try {
      // Fetch user profile data and update the state
      let userObject = await UserApi.current();
      setName(userObject.data.name);
      setEmail(userObject.data.email);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const validateName = (value) => {
    const nameParts = value.split(" ");
    const minLength = 3;
    const maxLength = 25;

    if (nameParts.length < 2) {
      return "First and last name are required";
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
    const maxLength = 12;

    if (value.length < minLength || value.length > maxLength) {
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
      // Submit the form to update the user profile
      const updatedUser = { ...user };
      updatedUser.name = name;
      updatedUser.password = password || user.password;

      UserApi.updateUser(updatedUser)
        .then((res) => {
          setName(res.data.name);
          setEmail(res.data.email);
          setPassword("");
          setSuccessMessage("Profile updated successfully!"); // Display success message
        })
        .catch((error) => {
          // Handle error from the API if needed
          console.error("Error updating profile:", error);
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="profile-container ">
      <div className="card card-container shadow-lg mt-5">
        <div className="card-body ">
          <div>
            <div className="form-group">
              <input
                type="text"
                className={`form-control rounded-pill text-uppercase ${
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
                disabled // Disable the email field
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
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0C2C54")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#ff2f4f")
                }
              >
                Sign In
              </button>
              {successMessage && (
                <div className="message-success small mt-2">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
