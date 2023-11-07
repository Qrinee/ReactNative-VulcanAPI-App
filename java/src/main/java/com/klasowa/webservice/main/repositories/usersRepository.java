package com.klasowa.webservice.main.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.klasowa.webservice.main.entities.UserEntity;

public interface usersRepository extends JpaRepository<UserEntity,Long> {
	UserEntity findByUserID(String UserID);
}
