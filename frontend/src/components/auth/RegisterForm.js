import React, { useState } from 'react';

function RegisterForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="card rounded-0">
      <div className="card-body">
        <h4
          className="card-title"
          style={{
            color: '#0C2C54',
          }}
        >
          Sign up
        </h4>
        <div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control rounded-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control rounded-0"
              placeholder="Email"
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              className="form-control rounded-0 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button
              className="btn btn-primary border-0 rounded-0"
              onClick={(e) => onSubmit({ name, email, password })}
              style={{
                backgroundColor: '#0C2C54',
              }}
            >
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
