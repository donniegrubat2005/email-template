package com.donniegrubat2005.emailtemplate.services;

import java.util.List;

import com.donniegrubat2005.emailtemplate.models.EmailTemplate;

public interface EmailTemplateService {
	
	public List<EmailTemplate> findAll();
	public void save(EmailTemplate emailTemp);
	public EmailTemplate findById(Long id);
	public void delete(EmailTemplate emailTemp);

}
