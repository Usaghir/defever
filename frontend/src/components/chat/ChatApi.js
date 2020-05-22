import React, { Component } from 'react';
import SockJsClient from 'react-stomp';

class ChatApi extends React.Component {
    
    
    render() {
      return (
        <div>
          
 <SockJsClient url='http://localhost:8080/ws'
    topics={['/topic/public']}
    onConnect={() => {
        console.log("connected");
    }}
    onDisconnect={() => {
        console.log("Disconnected");
    }}
    onMessage={(msg) => {
        console.log(msg);
    }}
    ref={(client) => {
        this.clientRef = client
}}/>

        </div>
      );
    }
  }
 
export default ChatApi;