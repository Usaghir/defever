package com.app.defever.Chat;


import jakarta.persistence.*;


import java.time.LocalDateTime;

@Entity
@Table(name = "ChatMessage")
public class ChatMessage {



    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "MessageType")
    private MessageType messageType;

    @Column(name = "content")
    private String content;

    @Column(name = "sender")
    private String sender;

    @Column(name = "receiver")
    private String receiver;

    @Column(name = "dateTime")
	private LocalDateTime dateTime=LocalDateTime.now();;




    public enum MessageType {
        CHAT,
        JOIN,
        LEAVE,
        TYPING
    }

    public ChatMessage() {}

    public ChatMessage(MessageType messageType, String content, String sender, String receiver) {
        this.messageType=messageType;
        this.content = content;
        this.sender = sender;
        this.receiver = receiver;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public MessageType getType() {
        return messageType;
    }

    public void setType(MessageType type) {
        this.messageType = type;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReceiver() {
		return receiver;
	}

	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}

    public LocalDateTime getDateTime() {
		return dateTime;
	}

	public void setDateTime(LocalDateTime dateTime) {
		this.dateTime = dateTime;
	}


}


