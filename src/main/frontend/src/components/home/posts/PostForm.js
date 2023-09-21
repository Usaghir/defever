import React from 'react';

function PostForm({ onSubmit }) {
  const [body, setBody] = React.useState('');

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit(body === '' ? alert('Empty posts not allowed!') : { body: body });

    // Clear the input field
    setBody('');
  };

  return (
    <div className="card rounded-0">
      <div className="card-body">
        <h1
          className="card-title bebas-font pl-5"
          style={{
            backgroundColor: '#0C2C54',
            color: 'white',
          }}
        >
          Create Post
        </h1>
        <div>
          <div className="form-group">
            <textarea
              className="form-control rounded-0"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button
              className="btn btn-primary btn-sm rounded-0 bebas-font border-0"
              onClick={handleSubmit}
              style={{
                backgroundColor: '#0C2C54',
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
