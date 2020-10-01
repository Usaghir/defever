import React, { Component } from 'react';
import './Chat.css';
import { Button, Avatar } from '@material-ui/core';
//import { AccessAlarm, AccessibilityNewIcon } from '@material-ui/icons/AccessibilityNew';
//import {  } from '@material-ui-icons';

// <Avatar className="bg-primary" >H</Avatar>
//       <Avatar >N</Avatar>
//       <Avatar >OP</Avatar>
//<i class="far fa-meh"></i>

class Online extends Component {
  render() {
    return (
      <div id="chat-page" className=" w-25 h-75 rounded-0">
        <div className="chat-container  ">
          <div className="chat-header">
            <h3
              className=" badge-primary "
              style={{
                backgroundColor: '#0C2C54',
              }}
            >
              Online
            </h3>

            <ul className="chat-header">
              {this.props.onlineUsers.map((use, index) => (
                <li key={index} className="row shadow-lg p-3 mb-2 bg-light ">
                  <Avatar className="bg-primary mr-3">{use[0]}</Avatar>
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
