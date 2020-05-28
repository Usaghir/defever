import React, { useState, useEffect } from "react";

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import "./Chat.css";


let stompClient = null;
const username = 'raja';
const Chat = (event) => { 
    
  
    if (username){
        let socket = new SockJS('http://localhost:8080/ws');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, onConnected, onError);
       

    }
   
function onConnected(){
    console.log('connected');

    stompClient.subscribe('/topic/public', onMessageReceived);

    // Tell your username to the server
    stompClient.send("/app/chat.register",
        {},
        JSON.stringify({sender: username, type: 'JOIN'})
    )
}

function onError(){
    console.log('error');
}

function onMessageReceived(){
    console.log('message recived ');
}
function send(event) {
    var messageContent = messageInput.value.trim();

    if(messageContent && stompClient) {
        var chatMessage = {
            sender: username,
            content: messageInput.value,
            type: 'CHAT'
        };

        stompClient.send("/app/chat.send", {}, JSON.stringify(chatMessage));
        messageInput.value = '';
    }
    event.preventDefault();
}
	
    return (
  
			
        <div id="chat-page" className="hidden">
		<div className="chat-container">
			<div className="chat-header">
				<h2>Defever Global Chat Box</h2>
			</div>
			<div className="connecting">Connecting...</div>
			<ul id="messageArea">

			</ul>
			<form id="messageForm" name="messageForm" >
				<div className="form-group">
					<div className="input-group clearfix">
						<input type="text" id="message" placeholder="Type a message..."
							autoComplete="off" className="form-control" />
						<button type="submit" className="primary">Send</button>
					</div>
				</div>
			</form>
		</div>
	</div>
		
    )
  
}

export default Chat;
