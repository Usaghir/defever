import React, { Component } from 'react';
import './Chattest.css';

export class ChatUser extends Component {
  render() {
    return (
      <div className={this.props.userPageDisplay}>
        <h1 className="title">Type your username</h1>
        <form onSubmit={this.props.formSubmit}>
          <div className="form-group">
            <label>username</label>
            <input
              id="name"
              type="text"
              name="username"
              value={this.props.valueUserName}
              onChange={this.props.userChangeHandle}
              className="accent username-submit"
            />
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              EnterChatRoom
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ChatUser;
