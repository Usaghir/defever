package com.app.defever;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class DefeverApplication {

	public static void main(String[] args) {
		SpringApplication.run(DefeverApplication.class, args);
	}



@Bean
public WebMvcConfigurer configure() {

		return new WebMvcConfigurer() {
		@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry
						.addMapping("/**")
						.allowedOrigins("http://localhost:3000");



			}
		};
	}

}
