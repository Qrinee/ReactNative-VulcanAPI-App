package com.klasowa.webservice.main.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="lekcyjna_users")
public class UserEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="username")
	private String UserName;
	@Column(name="userid")
	private String userID;
	@Column(name="usergroup")
	private String UserGroup;
	public UserEntity() {
	
	}
	public UserEntity(Long id, String userName, String userID, String userGroup) {
		this.id = id;
		UserName = userName;
		this.userID = userID;
		UserGroup = userGroup;
	}

	public Long getId() {
		return id;
	}
	
	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getUserGroup() {
		return UserGroup;
	}

	public void setUserGroup(String userGroup) {
		UserGroup = userGroup;
	}
}
