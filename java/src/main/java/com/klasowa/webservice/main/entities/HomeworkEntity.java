package com.klasowa.webservice.main.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="lekcyjna_homeworks")
public class HomeworkEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="lessonname")
	private String homeworkLessonName;
	@Column(name="homeworktopic")
	private String homeworkTopic;
	@Column(name="homeworkdate")
	private String homeworkDate;
	@Column(name="homeworkid")
	private String homeworkID;
	
	
	public HomeworkEntity() {
	}
	public HomeworkEntity(Long id, String homeworkLessonName, String homeworkTopic, String homeworkDate,String homeworkID) {
		this.homeworkID=homeworkID;
		this.id = id;
		this.homeworkLessonName = homeworkLessonName;
		this.homeworkTopic = homeworkTopic;
		this.homeworkDate = homeworkDate;
	}
	
	public String getHomeworkID() {
		return homeworkID;
	}
	public void setHomeworkID(String homeworkID) {
		this.homeworkID = homeworkID;
	}
	public String getHomeworkLessonName() {
		return homeworkLessonName;
	}
	public void setHomeworkLessonName(String homeworkLessonName) {
		this.homeworkLessonName = homeworkLessonName;
	}
	public String getHomeworkTopic() {
		return homeworkTopic;
	}
	public void setHomeworkTopic(String homeworkTopic) {
		this.homeworkTopic = homeworkTopic;
	}
	public String getHomeworkDate() {
		return homeworkDate;
	}
	public void setHomeworkDate(String homeworkDate) {
		this.homeworkDate = homeworkDate;
	}
	public Long getId() {
		return id;
	}
	
	

}
