import React, { Component } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import './Chattest.css';
import ChatUser from './ChatUser';
import ChatRoom from './ChatRoom';

let stompClient = null;
export class Chat extends Component {
  state = {
    username: '',
    ChatPageDisplay: 'hidden',
    UserPageDisplay: '',
    messageContent: '',
    messages: [],
    users: [''],
  };

  constructor(props) {
    super(props);
    this.handleUser = this.handleUser.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleChatSubmit = this.handleChatSubmit.bind(this);
    this.connect = this.connect.bind(this);
    this.send = this.send.bind(this);
    this.onConnected = this.onConnected.bind(this);
    this.onMessageReceived = this.onMessageReceived.bind(this);
  }

  handleUser = (event) => {
    this.setState({ username: event.target.value });
    event.preventDefault();
  };

  handleUserSubmit = (event) => {
    if (this.state.username) {
      this.connect();
    } event.preventDefault();
  };

  handleMessage = (event) => {
    this.setState({ messageContent: event.target.value });
    event.preventDefault();
  };

  handleChatSubmit = (event) => {
    this.setState({ messageContent: event.target.value });
    this.send(event);
    event.preventDefault();
  };

  connect = (event) => {
    let socket = new SockJS('http://localhost:8080/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, this.onConnected, this.onError);
    this.setState({ ChatPageDisplay: '' });
    this.setState({ UserPageDisplay: 'hidden' }); //'hidden'
  };

  onConnected = () => {
    stompClient.subscribe('/topic/public', this.onMessageReceived);

    // Tell your username to the server
    stompClient.send(
      '/app/chat.register',
      {},
      JSON.stringify({ sender: this.state.username, type: 'JOIN' })
    );
  };

  send = (event) => {
    if (this.state.messageContent) {
      let chatMessage = {
        sender: this.state.username,
        content: this.state.messageContent,
        type: 'CHAT',
      };

      stompClient.send('/app/chat.send', {}, JSON.stringify(chatMessage));
      this.setState({ messageContent: '' });
    }
    event.preventDefault();
  };

  onError = (error) => {
    console.log(error);
  };

  onMessageReceived = (payload) => {
    console.log('message received ');
    var message = JSON.parse(payload.body);

    if (message.type === 'JOIN') {
      this.setState((state) => {
        const messages = state.messages.push(message.sender + ' joined');
      });
      this.setState((state) => {
        const users = state.users.push(message.sender);
      });
    } else if (message.type === 'CHAT') {
      this.setState((state) => {
        const messages = state.messages.push(
          message.sender + ' ' + message.content
        );
      });
    } else if (message.type === 'LEAVE') {
      this.setState((state) => {
        const messages = state.messages.push(message.sender + ' Left');
      });
    }
  };

  render = () => {
    return (
      <div id="username-page">
        <ChatUser
          userPageDisplay={this.state.UserPageDisplay}
          formSubmit={this.handleUserSubmit}
          valueUserName={this.state.username}
          userChangeHandle={this.handleUser}
        />

        <ChatRoom
          chatDisplay={this.state.ChatPageDisplay}
          chatArea={this.state.messages.map((mess, index) => (
            <li key={index}>{mess}</li>
          ))}
          chatSubmit={this.handleChatSubmit}
          valueChat={this.state.messageContent}
          chatChange={this.handleMessage}
        />

        <div id="username-page">
          {this.state.users.map((use, index) => (
            <li key={index}>{use}</li>
          ))}
        </div>
      </div>
    );
  };
}

export default Chat;
