import React, { Component } from 'react';
import '../Components.css';

class Description extends Component {
  render() {
    return (
      <div className="card  mt-5  mb-5 text-dark rounded-0" style={{}}>
        <div className="card-body">
          <h1
            className="card-title  bebas-font font-weight-bold pt-1 pl-2"
            style={{ color: 'white', backgroundColor: '#0C2C54' }}
          >
            Welcome to Defever{' '}
          </h1>
          <h6 className="font-weight-bold ">
            {' '}
            Defever is a forum application where users can get live visual information regarding
            Covdid-19 as graph. Users can interact with each users using posts and chat
            functionalities.
          </h6>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item ">
              {' '}
              Up-to-date visual figures and graph display related to COVID-19 in detail (cases,
              intensive care, deaths, recovered) in Sweden and countries with higher number and some
              history.
            </li>
            <li className="list-group-item">
              {' '}
              Post page to share the thoughts as post and read other's thought as posts and respond
              them with feedback by liking or commenting.{' '}
            </li>
            <li className="list-group-item">
              {' '}
              Chat page to where user can enter in a chat room to chat with other online users and
              interact with them.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Description;
