package es.urjc.code.juegosenred.WebSocket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class SocketApp implements WebSocketConfigurer{

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(wsHandler(), "/movement")
		.setAllowedOrigins("*");
		registry.addHandler(wsHandler(), "/shoot")
		.setAllowedOrigins("*");
		registry.addHandler(wsHandler(), "/genEnemies")
		registry.addHandler(wsHandler(), "/shop")
		.setAllowedOrigins("*");
	}
	
	@Bean
	public WSHandler wsHandler() {
		return new WSHandler();
	}
	public static void main(String[] args) {
		SpringApplication.run(SocketApp.class, args);
	}
}