package com.donniegrubat2005.emailtemplate.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.donniegrubat2005.emailtemplate.models.EmailTemplateVariable;
import com.donniegrubat2005.emailtemplate.repositories.EmailTemplateEventRepository;
import com.donniegrubat2005.emailtemplate.repositories.EmailTemplateVariableRepository;

@Service(value="emailTemplateVariableService")
@Transactional
public class EmailTemplateVariableServiceImpl implements EmailTemplateVariableService {

	@Autowired
	private EmailTemplateVariableRepository emailTemplateVariableRepository;
	
	@Override
	public List<EmailTemplateVariable> findAll() {
		return emailTemplateVariableRepository.findAll();
	}

}
