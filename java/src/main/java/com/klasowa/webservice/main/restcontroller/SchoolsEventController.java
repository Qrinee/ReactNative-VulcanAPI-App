package com.klasowa.webservice.main.restcontroller;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.klasowa.webservice.main.additionalfunctions.ComparingDates;
import com.klasowa.webservice.main.additionalfunctions.CreatingToken;
import com.klasowa.webservice.main.additionalfunctions.ExtractCookieKey;
import com.klasowa.webservice.main.entities.AnnouncementsEntity;
import com.klasowa.webservice.main.entities.ExamEntity;
import com.klasowa.webservice.main.entities.HomeworkEntity;
import com.klasowa.webservice.main.entities.TargetEntity;
import com.klasowa.webservice.main.repositories.announcementsRepository;
import com.klasowa.webservice.main.repositories.examsRepository;
import com.klasowa.webservice.main.repositories.homeworkRepository;
import com.klasowa.webservice.main.repositories.targetRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
public class SchoolsEventController {
	@Autowired
	announcementsRepository announcementsrepository;
	@Autowired
	examsRepository examsrepository;
	@Autowired
	homeworkRepository homeworkrepository;
	@Autowired
	targetRepository targetrepository;
	@PostMapping("/createTarget")
	public TargetEntity CreateTarget(HttpServletRequest req,@Valid @RequestBody TargetEntity targetentity) {
		if (req.getCookies() != null) {
			String key=ExtractCookieKey.getCookieKey(req);
			targetentity.setUserid(key);
			targetrepository.save(targetentity);
			return targetentity;
		}
		return null;
	}
	@GetMapping("/getUserTargets")
	public List<TargetEntity> SelectTargets(HttpServletRequest req) {
		String key=ExtractCookieKey.getCookieKey(req);
		return targetrepository.findByUserID(key);
		
	}

	
	
	@PostMapping("/createExam")
	public ExamEntity CreateExam(@Valid @RequestBody ExamEntity examsentity) {
		examsentity.setExamID(CreatingToken.generateNewToken());
		examsrepository.save(examsentity);
		
		return examsentity;
	}
	@PostMapping("/createAnnouncements")
	public AnnouncementsEntity CreateAnnouncements(@Valid @RequestBody AnnouncementsEntity announcementsentity) {
		announcementsentity.setAnnouncementsID(CreatingToken.generateNewToken());
		announcementsrepository.save(announcementsentity);
		
		return announcementsentity;
	}
	@PostMapping("/createHomework")
	public HomeworkEntity CreateHomework(@Valid @RequestBody HomeworkEntity homeworkentity) {
		homeworkentity.setHomeworkID(CreatingToken.generateNewToken());
		homeworkrepository.save(homeworkentity);
		
		return homeworkentity;
	}
	@GetMapping("/getAllCustomHomeworks")
	public List<HomeworkEntity> GetAllHomeworks() {

		return homeworkrepository.findAll();
	}
//pozdrawiam pana co to czyta :DDDDD
	@GetMapping("/getAllAnnouncements")
	public List<AnnouncementsEntity> getAllAnnouncements() {	
		return announcementsrepository.findAll();
	}
	
	@GetMapping("/getAllNextCustomHomeworks")
	public List<HomeworkEntity> GetAllNextHomeworks() {
		List<HomeworkEntity> datelist=homeworkrepository.findAll();
		List<HomeworkEntity>nexthomeworks=new ArrayList<HomeworkEntity>();
		for(HomeworkEntity homeworkhandler:datelist) {
			
			if(ComparingDates.compareDates(homeworkhandler.getHomeworkDate())) {
				nexthomeworks.add(homeworkhandler);
			}
		}
		
		
		return nexthomeworks;
	}
	@GetMapping("/getAllNextAnnouncements")
	public List<AnnouncementsEntity> GetAllNextAnnouncements() {
		List<AnnouncementsEntity> datelist=announcementsrepository.findAll();
		List<AnnouncementsEntity>nextannouncements=new ArrayList<AnnouncementsEntity>();
		for(AnnouncementsEntity announcementshandler:datelist) {
			if(ComparingDates.compareDates(announcementshandler.getAnnouncementsDate())) {
				nextannouncements.add(announcementshandler);
			}
		}
		
		
		return nextannouncements;
	}
	@GetMapping("/getAllCustomExams")
	public List<ExamEntity> GetAllExams() {
		
		List<ExamEntity> datelist=examsrepository.findAll();
		

		return datelist;
	}
	@GetMapping("/getAllNextCustomExams")
	public List<ExamEntity> GetAllNextExams() {
		
		List<ExamEntity> datelist=examsrepository.findAll();
		List<ExamEntity> nextexams=new ArrayList<ExamEntity>();
		for(ExamEntity examhandler:datelist) {
			
			if(ComparingDates.compareDates(examhandler.getExamDate())) {
				nextexams.add(examhandler);
			}
		}
	
		return nextexams;
	}
	@GetMapping("/DeleteUserTargets")
	public String DeleteTarget(HttpServletRequest req,@Valid @RequestBody TargetEntity targetentity) {
		try {
			String key=ExtractCookieKey.getCookieKey(req);
			TargetEntity target=targetrepository.findByUserIDAndSubjectName(key, targetentity.getSubjectName());
				targetrepository.delete(target);
				return "deleted";
			}
		catch(Exception e) {
			
			return "cannot found target with";
		}
	
	}
	@GetMapping("/deleteCustomExams")
	public String deleteExams(@Valid @RequestBody ExamEntity examsentity){
		try {
		ExamEntity exam = examsrepository.findByExamID(examsentity.getExamID());
			examsrepository.delete(exam);
		}
		catch(Exception e) {
			return "cannot found exam with"+examsentity.getExamID()+"  ID";
			
		}   
            return "deleted";
        }
	@GetMapping("/deleteCustomHomework")
	public String deleteHomework(@Valid @RequestBody HomeworkEntity homeworkentity){
		try {
			HomeworkEntity homework = homeworkrepository.findByHomeworkID(homeworkentity.getHomeworkID());
			homeworkrepository.delete(homework);
		}
		catch(Exception e) {
			return "cannot found homework with"+homeworkentity.getHomeworkID()+"  ID";
			
		}   
            return "deleted";
        }
	@GetMapping("/deleteAnnouncements")
	public String deleteAnnouncements(@Valid @RequestBody AnnouncementsEntity announcementsentity){
		try {
			AnnouncementsEntity announcements = announcementsrepository.findByAnnouncementsID(announcementsentity.getAnnouncementsID());
			announcementsrepository.delete(announcements);
		}
		catch(Exception e) {
			return "cannot found announcements with"+announcementsentity.getAnnouncementsID()+"  ID";
			
		}   
            return "deleted";
        }

}
