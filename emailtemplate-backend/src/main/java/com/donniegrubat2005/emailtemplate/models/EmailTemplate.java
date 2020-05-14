package com.donniegrubat2005.emailtemplate.models;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;

import com.donniegrubat2005.emailtemplate.audits.Auditable;

@Entity
@Table(name="email_templates")
public class EmailTemplate  {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="body")
	private String body;
	
	@Column(name="variables")
	private String variables;
	
	@CreatedBy
	@Column(name = "created_by", nullable = false, updatable = false, columnDefinition = "text")
    private String createdBy;

   
    
	
	public EmailTemplate() {
		super();
		
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getBody() {
		return body;
	}


	public void setBody(String body) {
		this.body = body;
	}


	public String getVariables() {
		return variables;
	}


	public void setVariables(String variables) {
		this.variables = variables;
	}


	public String getCreatedBy() {
		return createdBy;
	}


	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}


	
	
	
}
