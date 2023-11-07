package com.klasowa.webservice.main.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klasowa.webservice.main.entities.TargetEntity;



public interface targetRepository extends JpaRepository<TargetEntity,Long>{
	List<TargetEntity>findByUserID(String UserID);
	TargetEntity findByUserIDAndSubjectName(String UserID,String SubjectName);
}
