package co.simplon.eventparadise;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {
	DataSourceAutoConfiguration.class })
public class EventparadiseApiApplication {

    public static void main(String[] args) {
	SpringApplication.run(
		EventparadiseApiApplication.class, args);
    }

}
