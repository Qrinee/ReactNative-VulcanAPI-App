package com.klasowa.webservice.main.additionalfunctions;

import java.util.Arrays;
import java.util.stream.Collectors;

import com.klasowa.webservice.main.entities.UserEntity;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

public class ExtractCookieKey {

		public static String getCookieKey(HttpServletRequest req) {
			  Cookie[] cookies = req.getCookies();
			  
			  String key=Arrays.stream(cookies).map(c ->c.getValue()).collect(Collectors.joining(", "));
			return key;	 
			
		}
}
