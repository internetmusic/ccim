package com.copyrightregister.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;

@Configuration
@Profile("PROD")
@PropertySource("classpath:${configfile.path}/prod.properties")
public class ProdConfig {
	
	protected final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Bean
	public ModelMapper modelMapper() {
	    return new ModelMapper();
	}

}
