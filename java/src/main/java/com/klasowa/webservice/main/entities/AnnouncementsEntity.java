package com.klasowa.webservice.main.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="lekcyjna_announcements")
public class AnnouncementsEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="announcementstitle")
	private String announcementsTitle;
	@Column(name="announcementstcontent")
	private String announcementstContent;
	@Column(name="announcementsdate")
	private String announcementsDate;
	@Column(name="announcementsauthor")
	private String announcementsAuthor;
	@Column(name="announcementsID")
	private String announcementsID;
	public AnnouncementsEntity() {
	
	}
	
	public AnnouncementsEntity(Long id, String announcementsTitle, String announcementstContent,
			String announcementsDate, String announcementsAuthor, String announcementsID) {
		this.id = id;
		this.announcementsTitle = announcementsTitle;
		this.announcementstContent = announcementstContent;
		this.announcementsDate = announcementsDate;
		this.announcementsAuthor = announcementsAuthor;
		this.announcementsID = announcementsID;
	}
	public String getAnnouncementsTitle() {
		return announcementsTitle;
	}
	public void setAnnouncementsTitle(String announcementsTitle) {
		this.announcementsTitle = announcementsTitle;
	}
	public String getAnnouncementstContent() {
		return announcementstContent;
	}
	public void setAnnouncementstContent(String announcementstContent) {
		this.announcementstContent = announcementstContent;
	}
	public String getAnnouncementsDate() {
		return announcementsDate;
	}
	public void setAnnouncementsDate(String announcementsDate) {
		this.announcementsDate = announcementsDate;
	}
	public String getAnnouncementsAuthor() {
		return announcementsAuthor;
	}
	public void setAnnouncementsAuthor(String announcementsAuthor) {
		this.announcementsAuthor = announcementsAuthor;
	}
	public String getAnnouncementsID() {
		return announcementsID;
	}
	public void setAnnouncementsID(String announcementsID) {
		this.announcementsID = announcementsID;
	}
	public Long getId() {
		return id;
	}
	
	
	

}
