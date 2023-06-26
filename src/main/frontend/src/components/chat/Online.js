import React, { Component } from 'react';
import './Chat.css';
import '../Components.css';
import { FaUser } from 'react-icons/fa';

class Online extends Component {
  render() {
    return (
      <div id="chat-page" className=" rounded-0">
        <div className="chat-container">
          <div className="chat-header">
            <h3
              className=" badge-primary bebas-font"
              style={{
                backgroundColor: '#0C2C54',
              }}
            >
              Online
            </h3>

            <ul className="chat-header">
              {this.props.onlineUsers.map((use, index) => (
                <li key={index} className="row shadow-lg p-3 mb-2 bg-light">
                  <FaUser size={50}></FaUser>
                  <h5>{use}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Online;
