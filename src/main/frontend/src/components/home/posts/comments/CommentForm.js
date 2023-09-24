import React, { useState, useEffect } from "react";
import { BsSendFill } from "react-icons/bs";

function CommentForm({ onSubmit }) {
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
      alert("Empty comments not allowed!");
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
    <div className="card">
      <div className="card-body">
        <div>
          <div className="form-group">
            <textarea
              className="form-control rounded-0"
              placeholder="Write your comment"
              value={body}
              onChange={handleBodyChange}
            />
          </div>

          <div className="form-group">
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

export default CommentForm;
