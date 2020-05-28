import React, { Component } from 'react';
import './App.css';
import SockJS from 'sockjs-client';

class ChatApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }

    //create a new socket connection
    //see documentation https://github.com/sockjs/sockjs-client#getting-started
    const sock = new SockJS('http://localhost:8080/ws');

    sock.onopen = () => {
      console.log('connection to server open');
    };

    sock.onmessage = e => {
      this.setState( 'messages received:', e.data);
    };

    sock.onclose = () => {
      console.log('close');
    };

    this.state = {
      actions:sock,
      messages: []
    }

    //this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  /* handleFormSubmit(e) {
    e.preventDefault();
    this.sock.send(e.target[0].value);
  } */


  render() {
    return (
      <div className="ChatApp">
        <header className="ChatApp-header">
          
          <form onSubmit={this.handleFormSubmit}>
            <input type="text" placeholder="Type here to chat..." />
            <button type="submit">Send</button>
          </form>
          {
            this.state.messages.map((message, index) => {
              return <div key={index}>{message}</div>
            })
          }
        </header>
      </div>
    );
  }
}

export default ChatApp;