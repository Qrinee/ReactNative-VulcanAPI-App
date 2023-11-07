package com.klasowa.webservice.main.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klasowa.webservice.main.entities.ChatEntity;
import com.klasowa.webservice.main.entities.ExamEntity;



public interface examsRepository extends JpaRepository<ExamEntity,Long>{
	ExamEntity findByExamID(String ExamID);
}
