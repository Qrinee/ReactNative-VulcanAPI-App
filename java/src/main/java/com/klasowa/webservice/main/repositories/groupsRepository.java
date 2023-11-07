package com.klasowa.webservice.main.repositories;



import org.springframework.data.jpa.repository.JpaRepository;

import com.klasowa.webservice.main.entities.GroupEntity;




public interface groupsRepository extends JpaRepository<GroupEntity,Long>{
	GroupEntity findByGroupToken(String GroupToken);
}
