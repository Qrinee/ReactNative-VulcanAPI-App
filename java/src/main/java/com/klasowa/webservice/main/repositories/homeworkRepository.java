package com.klasowa.webservice.main.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klasowa.webservice.main.entities.HomeworkEntity;

public interface homeworkRepository extends JpaRepository<HomeworkEntity,Long> {
	HomeworkEntity findByHomeworkID(String HomeworkID);
}
