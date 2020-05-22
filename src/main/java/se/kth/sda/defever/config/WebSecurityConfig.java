package se.kth.sda.defever.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import se.kth.sda.defever.auth.CustomUserDetailsService;
import se.kth.sda.defever.auth.JWTAuthFilter;
import se.kth.sda.defever.auth.JWTEncoderDecoder;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private JWTAuthFilter jwtAuthFilter;

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Scope("singleton")
    public JWTEncoderDecoder jwtEncoderDecoder() throws JWTEncoderDecoder.InitializationException {
        return new JWTEncoderDecoder();
    }

 /*   @Override
    protected void configure(HttpSecurity http) throws Exception {
        // Disable cors, csrf for Stateless service handling
        http
            .cors().disable()
            .csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // Whitelist
        http
            .authorizeRequests().antMatchers("/authenticate", "/register").permitAll()
            .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
            .anyRequest().authenticated();

        // Register filters
        http.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
    }*/

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .csrf()
                .disable()
                .authorizeRequests()
                .antMatchers("/**").permitAll()
                .anyRequest().authenticated();
    }

    @Bean
    public AuthenticationManager customAuthenticationManager() throws Exception {
        return authenticationManager();
    }

    @Autowired
    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder
                .userDetailsService(userDetailsService)
                .passwordEncoder(bCryptPasswordEncoder());
    }

}
