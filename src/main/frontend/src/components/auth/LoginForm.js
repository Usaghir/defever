import React, { useState } from 'react';
import '../Components.css';

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="d-flex flex-row">
      <div className="form-group mr-5">
        <label className="mb-1  font-weight-bold">Email</label>
        <input
          style={{ height: 30 }}
          type="email"
          className="form-control rounded-0"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group mr-3">
        <label className="mb-1  font-weight-bold">Password</label>
        <input
          style={{ height: 30 }}
          type="password"
          placeholder="Password"
          className="form-control rounded-0"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-group d-flex flex-row">
        <button
          className="btn btn-primary 	ml-4 border-0 rounded-0 bebas-font "
          style={{
            height: 30,
            position: 'relative',
            top: 27,
            backgroundColor: '#0C2C54',
          }}
          onClick={() => onSubmit({ email, password })}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
