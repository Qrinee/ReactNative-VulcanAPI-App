package com.klasowa.webservice.main.additionalfunctions;

import java.time.LocalDate;


public class ComparingDates {

	public static boolean compareDates(String examDay){
		LocalDate currentDay = LocalDate.now();
		LocalDate examDayConverted=LocalDate.parse(examDay);
	
			if(currentDay.compareTo(examDayConverted)<=0) {
				return true;
				
			}
		
		return false;
	}
}
