package com.donniegrubat2005.emailtemplate.services;

import java.text.SimpleDateFormat;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.donniegrubat2005.emailtemplate.models.EmailTemplate;
import com.donniegrubat2005.emailtemplate.models.User;
import com.donniegrubat2005.emailtemplate.repositories.EmailTemplateRepository;

@Service(value="emailService")
@Transactional
public class EmailTemplateServiceImpl implements EmailTemplateService {

	@Autowired
	private EmailTemplateRepository emailRepository;
	
	@Override
	public List<EmailTemplate> findAll() {
		return emailRepository.findAll();
	}

	@Override
	public void save(EmailTemplate emailTemp) {
		//SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		//EmailTemplate email =new EmailTemplate();
		
		
		//email = emailRepository.save(emailTemp);
		emailRepository.save(emailTemp);

	}

	@Override
	public EmailTemplate findById(Long id) {
		//return emailRepository.getOne(id);
		 return emailRepository.findById(id).orElse(null);
	}

	@Override
	public void delete(EmailTemplate emailTemp) {
		 emailRepository.delete(emailTemp);

	}

	

}
