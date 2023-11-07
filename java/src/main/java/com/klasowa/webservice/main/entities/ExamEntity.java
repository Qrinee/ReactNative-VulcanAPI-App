package com.klasowa.webservice.main.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="lekcyjna_exams")
public class ExamEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
			
	@Column(name="lessonname")
	private String lessonName;
	@Column(name="examtopic")
	private String examTopic;
	@Column(name="examdate")
	private String examDate;
	@Column(name="examtype")
	private String examType;
	@Column(name="examid")
	private String examID;
	
	public ExamEntity() {
		
	}
	public ExamEntity(Long id, String lessonName, String examTopic, String examDate, String examType,String examID) {
		this.examID=examID;
		this.id = id;
		this.lessonName = lessonName;
		this.examTopic = examTopic;
		this.examDate = examDate;
		this.examType = examType;
	}
	
	public String getExamID() {
		return examID;
	}
	public void setExamID(String examID) {
		this.examID = examID;
	}
	public String getLessonName() {
		return lessonName;
	}
	public void setLessonName(String lessonName) {
		this.lessonName = lessonName;
	}
	public String getExamTopic() {
		return examTopic;
	}
	public void setExamTopic(String examTopic) {
		this.examTopic = examTopic;
	}
	public String getExamDate() {
		return examDate;
	}
	public void setExamDate(String examDate) {
		this.examDate = examDate;
	}
	public String getExamType() {
		return examType;
	}
	public void setExamType(String examType) {
		this.examType = examType;
	}
	public Long getId() {
		return id;
	}
	
			
}
