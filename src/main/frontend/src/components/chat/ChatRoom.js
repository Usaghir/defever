import React, { Component } from 'react';
import './Chat.css';

class ChatRoom extends Component {
  render() {
    return (
      <div id="chat-page" className="">
        <div className="chat-container  ">
          <div className="chat-header">
            <h2
              className=" badge-primary  rounded-0 bebas-font"
              style={{
                backgroundColor: '#0C2C54',
              }}
            >
              Defever Chat Room
            </h2>
          </div>
          <ul className="" id="messageArea">
            {this.props.chatArea}
          </ul>
          <form id="messageForm" onSubmit={this.props.chatSubmit}>
            <div className="form-group clearfix">
              <input
                className="form-control rounded-0"
                id="message"
                type="text"
                name="messageContent"
                value={this.props.valueChat}
                onChange={this.props.chatChange}
              />
            </div>
            <div>
              <button className="btn btn-primary invisible" type="submit">
                Enter
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
