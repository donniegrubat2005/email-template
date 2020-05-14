package com.donniegrubat2005.emailtemplate.audits;

import java.util.Optional;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.donniegrubat2005.emailtemplate.models.User;

@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class AuditConfiguration {

	
	 @Bean
     public AuditorAware<String> auditorProvider() {
		 return () -> Optional.ofNullable("Donnie");
	    }
}
