import React from "react";

function PostForm({ onSubmit }) {
  const [body, setBody] = React.useState("");

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit((body === "") ? alert("Empty posts not allowed!") : { body: body, likes: 0});

    // Clear the input field
    setBody("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">What do you want to share or discuss?</h4>
        <div>
          <div className="form-group">
            <textarea
              className="form-control"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-sm" onClick={handleSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
