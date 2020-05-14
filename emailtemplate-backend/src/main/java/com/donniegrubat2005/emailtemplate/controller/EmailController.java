package com.donniegrubat2005.emailtemplate.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.donniegrubat2005.emailtemplate.models.EmailTemplate;
import com.donniegrubat2005.emailtemplate.services.EmailTemplateService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path="/api/")

public class EmailController {

	@Autowired
	private EmailTemplateService emailService;

	@GetMapping(path="emails")
	public List<EmailTemplate> getEmailList() {
		return emailService.findAll();
	}
	
@GetMapping(path="emails/{id}")
    public ResponseEntity<EmailTemplate> getEmailListById(@PathVariable Long id) {
		 EmailTemplate email = emailService.findById(id);
		 return ResponseEntity.ok().body(email);
		 //return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@PostMapping(path = "emails")
	  public EmailTemplate create(@RequestBody EmailTemplate email) {
		emailService.save(email);
	    return email;
	}
	
	@PutMapping(path="emails/{id}")
    public ResponseEntity<EmailTemplate> update(@PathVariable(value = "id") Long id,
            @Valid @RequestBody EmailTemplate email) {
		emailService.save(email);
        return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@DeleteMapping(path="emails/{id}") 
	 public ResponseEntity<EmailTemplate> delete(@PathVariable Long id) {
		EmailTemplate email = emailService.findById(id); 
		emailService.delete(email);
	 return new ResponseEntity<>(HttpStatus.OK);
		
	 }
}
