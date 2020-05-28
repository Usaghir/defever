import React, { Component } from 'react';
import './Chattest.css';

export class ChatRoom extends Component {
  render() {
    return (
      <div className={this.props.chatDisplay} id="chat-page">
        <div className="chat-container">
          <div className="chat-header">
            <h2>Defever Global Chat Box</h2>
          </div>
          <div className="connecting"></div>
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
