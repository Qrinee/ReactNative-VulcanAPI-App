package com.klasowa.webservice.main.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="lekcyjna_chats")
public class ChatEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="chatname")
	private String ChatName;
	@Column(name="chatdate")
	private String ChatDate;
	@Column(name="chatgroup")
	private String chatGroup;
	@Column(name="chatID")
	private String chatID;
	public ChatEntity() {
		
	}
	public ChatEntity(Long id, String chatName, String chatDate,String chatGroup,String chatID) {
		this.chatID=chatID;
		this.chatGroup=chatGroup;
		this.id = id;
		ChatName = chatName;
		ChatDate = chatDate;
	}
	
	public String getChatID() {
		return chatID;
	}
	public void setChatID(String chatID) {
		this.chatID = chatID;
	}
	public String getChatGroup() {
		return chatGroup;
	}
	public void setChatGroup(String chatGroup) {
		this.chatGroup = chatGroup;
	}
	public String getChatName() {
		return ChatName;
	}
	public void setChatName(String chatName) {
		ChatName = chatName;
	}
	public String getChatDate() {
		return ChatDate;
	}
	public void setChatDate(String chatDate) {
		ChatDate = chatDate;
	}
}
