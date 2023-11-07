package com.klasowa.webservice.main.restcontroller;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

import com.klasowa.webservice.main.additionalfunctions.CreatingToken;
import com.klasowa.webservice.main.additionalfunctions.ExtractCookieKey;
import com.klasowa.webservice.main.entities.AnnouncementsEntity;
import com.klasowa.webservice.main.entities.ChatEntity;
import com.klasowa.webservice.main.entities.GroupEntity;
import com.klasowa.webservice.main.entities.MessageEntity;
import com.klasowa.webservice.main.entities.UserEntity;
import com.klasowa.webservice.main.entities.ValidEntity;
import com.klasowa.webservice.main.repositories.chatsRepository;
import com.klasowa.webservice.main.repositories.groupsRepository;
import com.klasowa.webservice.main.repositories.messagesRepository;
import com.klasowa.webservice.main.repositories.usersRepository;
import com.klasowa.webservice.main.repositories.announcementsRepository;


@RestController
public class MainController {
	
	@Autowired
	groupsRepository grouprepository;
	@Autowired
	usersRepository userrepository;
	@Autowired
	chatsRepository chatsrepository;

	@Autowired
	messagesRepository messagesrepository;
	@PostMapping("/createGroup")
	public GroupEntity CreateGroup(HttpServletRequest req,@Valid @RequestBody GroupEntity groupentity) {
		  if (req.getCookies() != null) {
			  String key=ExtractCookieKey.getCookieKey(req);
		
			  UserEntity user=userrepository.findByUserID(key);
			  user.setUserGroup(groupentity.getGroupName());
			  final UserEntity updateUserGroup=userrepository.save(user);
			  groupentity.setGroupToken(CreatingToken.generateNewToken());
			  grouprepository.save(groupentity);
			  return groupentity;
		 }
		 return groupentity;
		 }
		
	

	@PostMapping("/validateToken")
	public GroupEntity ValidToken(@Valid @RequestBody ValidEntity validentity) {
		GroupEntity concretchat=grouprepository.findByGroupToken(validentity.getValidToken());
		if(concretchat==null) {
			return null;
		}
		UserEntity user=userrepository.findByUserID(validentity.getUserID());
		user.setUserGroup(concretchat.getGroupName());
		final UserEntity updateUserGroup=userrepository.save(user);
		return concretchat;
	}

	@PostMapping("/createUser")
	public UserEntity CreateUser(@Valid @RequestBody UserEntity userentity) {
		userrepository.save(userentity);
		
		return userentity;
	}
	@PostMapping("/createChat")
	public ChatEntity CreateChat(@Valid @RequestBody ChatEntity chatentity) {
		chatentity.setChatID(CreatingToken.generateNewToken());
		chatsrepository.save(chatentity);
		
		return chatentity;
	}
	@PostMapping("/createMessage")
	public MessageEntity CreateMessage(@Valid @RequestBody MessageEntity messageentity) {
		messagesrepository.save(messageentity);
		
		return messageentity;
	}

	@GetMapping("/getAllChats")
	public List<ChatEntity> getAllChats() {	
		return chatsrepository.findAll();
	}
	@GetMapping("/getAllGroups")
	public List<GroupEntity> getAllGroups() {	
		return grouprepository.findAll();
	}
	@GetMapping("/demoLogin")
	public String getSpecificUser(HttpServletRequest req) {
		  
		 
		  if (req.getCookies() != null) {
			  String key=ExtractCookieKey.getCookieKey(req);
			  UserEntity user=new UserEntity(); 
			  user =userrepository.findByUserID(key);
			  String username=user.getUserName();
			  JSONObject response = new JSONObject();
			  response.put("token", key);
			  response.put("username",username);
			  response.put("groupname", user.getUserGroup());
			  
		        return response.toString();
		    }
		 
		return "not logged";
	}
	@PostMapping("/createDemoUser")
	public UserEntity CreateDemoUser(HttpServletResponse res,@Valid @RequestBody UserEntity userentity) {
		String userid=CreatingToken.generateNewToken();
		userentity.setUserID(userid);
		Cookie cookie = new Cookie("userid", userid);
		cookie.setMaxAge(7 * 24 * 60 * 60); // 7 dni
		res.addCookie(cookie);
		
		
		userrepository.save(userentity);
		
		return userentity;
	}
	
	@GetMapping("/getUserChats")
	public List<ChatEntity> getUserChats(HttpServletRequest req) {
		  if (req.getCookies() != null) {
			  String key=ExtractCookieKey.getCookieKey(req);
			  UserEntity user=new UserEntity();
			  user =userrepository.findByUserID(key);
			  String groupname=user.getUserGroup();
			
				List<ChatEntity>userchats=chatsrepository.findByChatGroup(groupname);
				
				return userchats;
		  }
		  
		  return null;
	}
	@GetMapping("/deleteChats")
	public String deleteChat (@Valid @RequestBody ChatEntity chatentity){
		try {
			ChatEntity chat = chatsrepository.findByChatID(chatentity.getChatID());
			chatsrepository.delete(chat);
		}
		catch(Exception e) {
			return "cannot found chat with"+chatentity.getChatID()+"  ID";
			
		}   
            return "deleted";
        }
	
	
	
	
	
}	
