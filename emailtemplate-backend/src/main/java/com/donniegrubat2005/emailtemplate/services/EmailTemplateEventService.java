package com.donniegrubat2005.emailtemplate.services;

import java.util.List;

import com.donniegrubat2005.emailtemplate.models.EmailTemplateEvent;

public interface EmailTemplateEventService {
	public List<EmailTemplateEvent> findAll();
	public EmailTemplateEvent findByEventName(String name);
}
