package com.klasowa.webservice.main.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;
@Entity
@Table(name="lekcyjna_groups")
public class GroupEntity {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		
		@Column(name="group_name")
		private String GroupName; 
		
		@Column(name="group_token")
		private String groupToken;
		public GroupEntity() {

		}
		public GroupEntity(Long id, String groupName, String groupToken) {
			this.id = id;
			this.GroupName = groupName;
			this.groupToken = groupToken;
		}
		public Long getId() {
			return id;
		}
	
		public String getGroupName() {
			return GroupName;
		}
		public void setGroupName(String groupName) {
			GroupName = groupName;
		}
		public String getGroupToken() {
			return groupToken;
		}
		public void setGroupToken(String groupToken) {
			this.groupToken = groupToken;
		}
		
		
	
	
			
			
}
