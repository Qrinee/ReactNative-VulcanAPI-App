package com.klasowa.webservice.main.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klasowa.webservice.main.entities.AnnouncementsEntity;


public interface announcementsRepository extends JpaRepository<AnnouncementsEntity,Long> {
	AnnouncementsEntity findByAnnouncementsID(String AnnouncementsID);
}