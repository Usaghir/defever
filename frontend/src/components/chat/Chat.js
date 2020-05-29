import React, { Component } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import './Chat.css';
import Online from './Online';
import ChatRoom from './ChatRoom';
import UserApi from '../../api/UserApi';
import { Button, Avatar } from '@material-ui/core';

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
    time : new Date().toLocaleString(),
   
    
  };

  componentDidMount() {
    UserApi.current()
      .then(({ data }) => this.setState({ username: data.name }))
      .catch((err) => console.error(err));
    this.connect();
  }

  handleMessage = (event) => {
    this.setState({ messageContent: event.target.value });
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
  };

  onConnected = () => {
    stompClient.subscribe('/topic/public', this.onMessageReceived);

    stompClient.send(
      '/app/chat.register',
      {},
      JSON.stringify({ sender: this.state.username, type: 'JOIN' })
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
    console.log(message.type);
    if (message.type === 'JOIN') {
      this.setState({
        messages: [...this.state.messages, message.sender + ' has joined'],
      });

      this.setState({
        users: [...this.state.users, message.sender],
      });
      console.log(this.state.messages);
    } else if (message.type === 'CHAT') {
      this.setState({
        messages: [
          ...this.state.messages,
          message.sender + '  : ' + message.content,
        ],
      });

      


      
    } else if (message.type === 'LEAVE') {
      this.setState({
        messages: [...this.state.messages, message.sender + +' Left'],
      });
      
    }
  };

  render = () => {
    return (
      <div className="row">
        <Online onlineUsers={this.state.users} />
        <ChatRoom
          chatArea={this.state.messages.map((mess, index) =>
            mess.includes('joined') ? (
              <li
                key={index}
                className="shadow-lg p-3 mb-2 text-center bg-white text-success rounded text-break"
              >
                <div className="badge badge-primary text-wrap">{mess}</div>
                  
              </li>
            ) : (
              <li
                key={index}
                className="row justify-content-between shadow-lg p-3 mb-2 bg-white  rounded text-break"
              ><div>
                <Avatar className="bg-primary mr-3">{mess[0]}</Avatar>
                  <h5>{mess}</h5>
                  </div>
                  <div className="badge text-wrap ">{this.state.time}</div>
              </li>
            )
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
