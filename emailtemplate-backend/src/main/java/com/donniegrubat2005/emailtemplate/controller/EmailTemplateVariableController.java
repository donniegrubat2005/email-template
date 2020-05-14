package com.donniegrubat2005.emailtemplate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.donniegrubat2005.emailtemplate.models.EmailTemplateVariable;
import com.donniegrubat2005.emailtemplate.services.EmailTemplateVariableService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path="/api/")
public class EmailTemplateVariableController {

	@Autowired
	private EmailTemplateVariableService emailTemplateVariableService;

	@GetMapping(path="emailvariables")
	public List<EmailTemplateVariable> getEmailTemplateVariables() {
		return emailTemplateVariableService.findAll();
	}
}
