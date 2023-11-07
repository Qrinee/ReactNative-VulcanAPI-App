package com.klasowa.webservice.main.websocket;

public class UserScheme {
	private String MessageChat;
	private String MessageFrom;
	private String MessageDate;
	private String MessageContent;
	public UserScheme() {

	}
	public UserScheme(String messageFrom, String messageDate,String messageContent,String messageChat) {
		MessageFrom = messageFrom;
		MessageDate = messageDate;
		MessageContent=messageContent;
		MessageChat=messageChat;
	}
	public String getMessageFrom() {
		return MessageFrom;
	}
	public void setMessageFrom(String messageFrom) {
		MessageFrom = messageFrom;
	}
	public String getMessageDate() {
		return MessageDate;
	}
	public void setMessageDate(String messageDate) {
		MessageDate = messageDate;
	}
	public String getMessageContent() {
		return MessageContent;
	}
	public void setMessageContent(String messageContent) {
		MessageContent = messageContent;
	}
	public String getMessageChat() {
		return MessageChat;
	}
	public void setMessageChat(String messageChat) {
		MessageChat = messageChat;
	}
	

}
