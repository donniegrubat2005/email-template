package com.donniegrubat2005.emailtemplate.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.donniegrubat2005.emailtemplate.models.EmailTemplateEvent;

@Repository
public interface EmailTemplateEventRepository extends JpaRepository<EmailTemplateEvent, Long> {
	public EmailTemplateEvent findByEventName(String name);
}
