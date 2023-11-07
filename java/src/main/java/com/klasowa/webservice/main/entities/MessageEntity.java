package com.klasowa.webservice.main.entities;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="lekcyjna_messages")
public class MessageEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="fromuser")
	private String FromUser;
	@Column(name="content")
	private String MessageContent;
	@Column(name="date")
	private String MessageDate;
	@Column(name="chat")
	private String chatName;

	public MessageEntity() {
		
	}
	public MessageEntity(Long id, String fromUser, String messageContent, String messageDate,String chatName) {
		this.id = id;
		this.chatName=chatName;
		FromUser = fromUser;
		MessageContent = messageContent;
		MessageDate = messageDate;
	}
	
	public String getchatName() {
		return chatName;
	}
	public void setchatName(String chatName) {
		this.chatName = chatName;
	}

	public Long getId() {
		return id;
	}



	public String getFromUser() {
		return FromUser;
	}

	public void setFromUser(String fromUser) {
		FromUser = fromUser;
	}

	public String getMessageContent() {
		return MessageContent;
	}

	public void setMessageContent(String messageContent) {
		MessageContent = messageContent;
	}

	public String getMessageDate() {
		return MessageDate;
	}

	public void setMessageDate(String messageDate) {
		MessageDate = messageDate;
	}
}
