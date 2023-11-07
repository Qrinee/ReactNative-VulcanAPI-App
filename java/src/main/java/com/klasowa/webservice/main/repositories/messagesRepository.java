package com.klasowa.webservice.main.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klasowa.webservice.main.entities.MessageEntity;

public interface messagesRepository extends JpaRepository<MessageEntity,Long>{
	List<MessageEntity>findByChatName(String ChatName);
}
