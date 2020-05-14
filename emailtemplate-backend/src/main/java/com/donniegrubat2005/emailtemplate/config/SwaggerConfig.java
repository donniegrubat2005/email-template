package com.donniegrubat2005.emailtemplate.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import static springfox.documentation.builders.PathSelectors.regex;

@EnableSwagger2
@Configuration

public class SwaggerConfig {

	@Bean
	public Docket SwaggerApi() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.paths(regex("/api/.*"))
				.apis(RequestHandlerSelectors.basePackage("com.donniegrubat2005.emailtemplate"))
				.build();
	}
}
