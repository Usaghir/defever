import React, { Component } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import './Chat.css';
import Online from './Online';
import ChatRoom from './ChatRoom';
import UserApi from '../../api/UserApi';
import ChatApi from '../../api/ChatApi';
import { Avatar } from '@material-ui/core';
import '../Components.css';

let stompClient = null;
class Chat extends Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleChatSubmit = this.handleChatSubmit.bind(this);
    this.connect = this.connect.bind(this);
    this.send = this.send.bind(this);
    this.onConnected = this.onConnected.bind(this);
    this.onMessageReceived = this.onMessageReceived.bind(this);
  }

  state = {
    username: '',
    messageContent: '',
    messages: [],
    users: [],
    chats: [],
    time: new Date().toLocaleString(),
  };

  componentDidMount() {
    ChatApi.getAllChats()
      .then(({ data }) => {
        data.map((dat) => {
          if (dat.type === 'CHAT') {
            this.setState({
              messages: [...this.state.messages, dat.sender + '  : ' + dat.content],
            });
          }
        });
      })
      .catch((err) => console.error(err));

    UserApi.current()
      .then(({ data }) => {
        this.setState({ username: data.name });
      })
      .catch((err) => console.error(err));
    this.connect();
  }

  handleMessage = (event) => {
    this.setState({ messageContent: event.target.value });
  };

  handleChatSubmit = (event) => {
    this.send(event);
    event.preventDefault();
  };

  connect = (event) => {
    let socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, this.onConnected, this.onError);
  };

  onConnected = () => {
    stompClient.subscribe('/topic/public', this.onMessageReceived);

    stompClient.send(
      '/app/chat.register',
      {},
      JSON.stringify({ sender: this.state.username, type: 'JOIN' }),
    );
  };
  onError = (error) => {
    console.log(error);
  };

  send = (event) => {
    if (this.state.messageContent && stompClient) {
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

  onMessageReceived = (payload) => {
    var message = JSON.parse(payload.body);

    if (
      message.type ===
      'JOIN' /* &&
      !this.state.messages.includes(message.sender + ' has joined') */
    ) {
      this.setState({
        messages: [...this.state.messages, message.sender + ' has joined'],
      });
      this.setState({
        users: [...this.state.users, message.sender],
      });
    } else if (message.type === 'CHAT') {
      this.setState({
        messages: [...this.state.messages, message.sender.toUpperCase() + '  : ' + message.content],
      });
      this.setState({
        users: [...this.state.users, message.sender],
      });
    } else if (message.type === 'LEAVE') {
      this.setState({
        messages: [...this.state.messages, message.sender + ' Left'],
      });
    }
  };

  render = () => {
    return (
      <div className="chat-grid-container">
        <Online
          onlineUsers={[...new Set(this.state.users)].filter(function (el) {
            return el != null;
          })}
        />

        <ChatRoom
          chatArea={this.state.messages.map((mess, index) =>
            mess.includes('joined') ? (
              <li
                key={index}
                className="shadow-lg p-3 mb-2 text-center bg-white text-success  text-break"
              >
                <div className="badge badge-success text-wrap bebas-font">{mess}</div>
              </li>
            ) : (
              <li
                key={index}
                className="row justify-content-between shadow-lg p-3 mb-2 bg-white   text-break"
              >
                <div>
                  <Avatar className="bg-primary"></Avatar>
                  <h5 className="font-weight-bold">{mess}</h5>
                </div>
                <em className="mr-4 mt-2" style={{ color: '#3a3b3c', fontSize: '10px' }}>
                  {this.state.time}
                </em>
              </li>
            ),
          )}
          chatSubmit={this.handleChatSubmit}
          valueChat={this.state.messageContent}
          chatChange={this.handleMessage}
        />
      </div>
    );
  };
}

export default Chat;
