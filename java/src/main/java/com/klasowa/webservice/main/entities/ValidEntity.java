package com.klasowa.webservice.main.entities;

public class ValidEntity {
	private String ValidToken;
	private String UserID;
	
	public ValidEntity() {
		
	}
	public ValidEntity(String validToken, String userID) {
		ValidToken = validToken;
		UserID = userID;
	}
	public String getValidToken() {
		return ValidToken;
	}
	public void setValidToken(String validToken) {
		ValidToken = validToken;
	}
	public String getUserID() {
		return UserID;
	}
	public void setUserID(String userID) {
		UserID = userID;
	}
	
}
