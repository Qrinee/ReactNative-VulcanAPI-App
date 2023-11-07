package com.klasowa.webservice.main.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="lekcyjna_targets")
public class TargetEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="subjectname")
	private String subjectName;
	@Column(name="gradetarget")
	private float gradeTarget;
	@Column(name="userid")
	private String userID;
	
	public TargetEntity() {
	
	}
	public TargetEntity(Long id, String subjectName, float gradetarget,String userid) {
		this.id = id;
		this.subjectName = subjectName;
		this.gradeTarget = gradetarget;
		this.userID=userid;
	}
	
	public String getUserid() {
		return userID;
	}
	public void setUserid(String userid) {
		this.userID = userid;
	}
	public String getSubjectName() {
		return subjectName;
	}
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	public float getGradetarget() {
		return gradeTarget;
	}
	public void setGradetarget(float gradetarget) {
		this.gradeTarget = gradetarget;
	}
	public Long getId() {
		return id;
	}
	
	
}
