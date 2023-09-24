import React, { useState, useEffect } from "react";
import { BsSendFill } from "react-icons/bs";

function PostForm({ onSubmit }) {
  const [body, setBody] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [buttonColor, setButtonColor] = useState("#CCCCCC");

  const handleBodyChange = (e) => {
    const inputValue = e.target.value;
    setBody(inputValue);
    setIsButtonActive(!!inputValue); // Set to true if there is input, otherwise false
  };

  const handleSubmit = () => {
    if (body === "") {
      alert("Empty posts not allowed!");
    } else {
      onSubmit({ body });
      setBody("");
      setIsButtonActive(false); // Reset button to inactive state
      setButtonColor("#CCCCCC"); // Reset button color
    }
  };

  useEffect(() => {
    // Use effect to monitor the body state
    if (body === "") {
      setButtonColor("#CCCCCC");
    } else {
      setButtonColor("#ff2f4f");
    }
  }, [body]);

  const buttonStyles = {
    fontSize: "28px",
    color: buttonColor,
    backgroundColor: "transparent",
  };

  return (
    <div className="card shadow-lg">
      <div className="card-body">
        <h1 className="card bebas-font text-white background-blue pl-3 pt-2 pb-2">
          Create Post
        </h1>
        <div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              value={body}
              onChange={handleBodyChange}
              placeholder="Can write here"
              rows="4"
            />
          </div>

          <div className="form-group mt-3">
            <button
              className={`border-0 bebas-font ${isButtonActive ? "active" : ""}`}
              onClick={handleSubmit}
              style={buttonStyles}
              disabled={!isButtonActive}
            >
              <BsSendFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
