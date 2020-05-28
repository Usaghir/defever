import React, { Component } from 'react';
import './Chat.css';

class ChatRoom extends Component {
  render() {
    return (
      <div id="chat-page" className = 'mr-5 w-75 h-75'>
        <div className="chat-container rounded ">
          <div className="chat-header">
            <h2>Defever Global Chat Box</h2>
          </div>
          <ul id="messageArea">{this.props.chatArea}</ul>
          <form id="messageForm" onSubmit={this.props.chatSubmit}>
            <div className="form-group clearfix">
              <input
                className="form-control primary"
                id="message"
                type="text"
                name="messageContent"
                value={this.props.valueChat}
                onChange={this.props.chatChange}
              />
            </div>
            <div>
              <button className="btn btn-primary" type="submit">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
