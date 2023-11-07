package com.klasowa.webservice.main.websocket;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;
import com.google.gson.Gson;
import com.klasowa.webservice.main.entities.MessageEntity;
import com.klasowa.webservice.main.repositories.messagesRepository;

@Controller
public class WebsocketController  {
	@Autowired
	messagesRepository messagesrepository;
	List<UserScheme> essowniczka=new ArrayList<UserScheme>();
	@MessageMapping("/Message/{chatname}")
	@SendTo("/chat/messages/{chatname}")
	public MessageEntity greeting(@DestinationVariable String chatname,MessageEntity message) throws Exception {	
		
	
		message.setchatName(chatname);
		messagesrepository.save(message);
		

		return message;
	}
	
	
	@SubscribeMapping("/chat/messages/{chatname}")
	public String initialReply(@DestinationVariable String chatname) throws Exception {
		
		List<MessageEntity>LastMessages=messagesrepository.findByChatName(chatname);
		if(LastMessages.isEmpty()==false) {
			
			
			String json = new Gson().toJson(LastMessages);
			return json;
			
		}
	    return "Welcome to the "+chatname+" room.";
	}



}
