import React, { Component } from 'react';
import '../Components.css';

class LoginDescription extends Component {
  render() {
    return (
      <div className="card   text-dark rounded-0" style={{}}>
        <div className="card-body">
          <h1
            className="card-title  bebas-font font-weight-bold pt-1 pl-2"
            style={{ color: 'white', backgroundColor: '#0C2C54' }}
          >
            Welcome to Defever{' '}
          </h1>
          <h6 className="font-weight-bold ">
            {' '}
            Defever is a forum application which aims to give its users a space where to get
            reliable data and interact with other users in a comfortable environment
          </h6>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item ">
              {' '}
              Up-to-date numbers related with COVID-19 (Confirmed cases, number of people in
              intensive care, deaths). Cases in Sweden and also an overview of other countries.
            </li>
            <li className="list-group-item"> Link to latest relevant news.</li>
            <li className="list-group-item">
              {' '}
              Forum page where to see and interact with the most relevant topics brought up by other
              users.{' '}
            </li>
            <li className="list-group-item">
              {' '}
              Chat page for a more direct and quick form of messaging.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LoginDescription;
