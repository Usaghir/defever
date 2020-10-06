import React from 'react';

function CommentForm({ onSubmit }) {
  const [body, setBody] = React.useState('');

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit(
      body === '' ? alert('Empty comments not allowed!') : { body: body }
    );

    setBody('');
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
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button
              className="btn btn-primary btn-sm rounded-0 border-0"
              onClick={handleSubmit}
              style={{
                backgroundColor: '#0C2C54',
              }}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
