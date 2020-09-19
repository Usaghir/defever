package se.kth.sda.defever.Chat;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;


@Controller
public class ChatController {

	@Autowired
	private ChatService chatService;


	/*-------------------- Group (Public) chat--------------------*/


	@MessageMapping("/chat.register")
	@SendTo("/topic/public")
	public ChatMessage register(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
		System.out.println(chatMessage.getContent());
		System.out.println(chatMessage.getDateTime());
		System.out.println(chatMessage.getId());
		System.out.println(chatMessage.getSender());
		System.out.println(chatMessage.getReceiver());
		System.out.println(chatMessage.getType());
		return chatService.create(chatMessage);
	}

	@MessageMapping("/chat.send")
	@SendTo("/topic/public")
	public ChatMessage sendMessage(@Payload ChatMessage chatMessage) {
		System.out.println(chatMessage.getContent());
		System.out.println(chatMessage.getDateTime());
		System.out.println(chatMessage.getId());
		System.out.println(chatMessage.getSender());
		System.out.println(chatMessage.getReceiver());
		System.out.println(chatMessage.getType());

		return chatService.create(chatMessage);
	}


}





/*--------------------Private chat--------------------*/
	/*@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;
	@MessageMapping("/sendPrivateMessage")
	//@SendTo("/queue/reply")
	public void sendPrivateMessage(@Payload ChatMessage chatMessage) {
		simpMessagingTemplate.convertAndSendToUser(
				chatMessage.getReceiver().trim(), "/reply", chatMessage);
		//return chatMessage;
	}
	@MessageMapping("/addPrivateUser")
	@SendTo("/queue/reply")
	public ChatMessage addPrivateUser(@Payload ChatMessage chatMessage,
									  SimpMessageHeaderAccessor headerAccessor) {
		// Add user in web socket session
		headerAccessor.getSessionAttributes().put("private-username", chatMessage.getSender());
		return chatMessage;
	}*/
