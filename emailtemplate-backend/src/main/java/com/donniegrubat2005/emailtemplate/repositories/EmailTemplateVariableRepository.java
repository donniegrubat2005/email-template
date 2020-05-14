package com.donniegrubat2005.emailtemplate.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.donniegrubat2005.emailtemplate.models.EmailTemplateVariable;

@Repository
public interface EmailTemplateVariableRepository extends JpaRepository<EmailTemplateVariable, Long> {

}
