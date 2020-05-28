import React, { Component } from 'react';

class Online extends Component {
  render() {
    return (
      <div id="chat-page ">
        <div className="chat-container rounded">
          <h2>User Online</h2>
          <div className="chat-header ">
            
            {this.props.onlineUsers.map((use, index) => (
              <li key={index} className="shadow-lg p-3 mb-2 bg-light rounded" >{use}</li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Online;
