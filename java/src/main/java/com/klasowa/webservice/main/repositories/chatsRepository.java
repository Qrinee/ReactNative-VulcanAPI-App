package com.klasowa.webservice.main.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klasowa.webservice.main.entities.ChatEntity;



public interface chatsRepository extends JpaRepository<ChatEntity,Long> {
	List<ChatEntity>findByChatGroup(String ChatGroup);
	ChatEntity findByChatID(String ChatID);
}
