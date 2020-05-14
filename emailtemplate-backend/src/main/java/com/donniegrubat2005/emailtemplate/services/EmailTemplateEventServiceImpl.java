package com.donniegrubat2005.emailtemplate.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.donniegrubat2005.emailtemplate.models.EmailTemplateEvent;
import com.donniegrubat2005.emailtemplate.repositories.EmailTemplateEventRepository;

@Service(value="eventService")
@Transactional
public class EmailTemplateEventServiceImpl implements EmailTemplateEventService {

	@Autowired
	private EmailTemplateEventRepository eventRepository;
	
	@Override
	public List<EmailTemplateEvent> findAll() {
		return eventRepository.findAll();
	}

	@Override
	public EmailTemplateEvent findByEventName(String name) {
		return eventRepository.findByEventName(name);
	}

}
