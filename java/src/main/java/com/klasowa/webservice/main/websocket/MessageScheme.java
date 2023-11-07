package com.klasowa.webservice.main.websocket;

public class MessageScheme {
	private String MessageText;
	public MessageScheme() {
	
	}
	public MessageScheme(String messageText) {
		MessageText = messageText;
	}

	public String getMessageText() {
		return MessageText;
	}

	public void setMessageText(String messageText) {
		MessageText = messageText;
	}
}
