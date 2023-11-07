package com.klasowa.webservice.main.additionalfunctions;

import java.security.SecureRandom;
import java.util.Base64;

public class CreatingToken {
	
	
	private static final SecureRandom secureRandom = new SecureRandom();
	private static final Base64.Encoder base64Encoder = Base64.getUrlEncoder();

	public static String generateNewToken() {
	    byte[] randomBytes = new byte[6];
	    secureRandom.nextBytes(randomBytes);
	    return base64Encoder.encodeToString(randomBytes);
	}
}
