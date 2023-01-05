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
		registry.addHandler(wsmoveHandler(), "/movement")
		.setAllowedOrigins("*");
		registry.addHandler(wsshootHandler(), "/shoot")
		.setAllowedOrigins("*");

		registry.addHandler(wsHandler(), "/genEnemies");

		registry.addHandler(wsshopHandler(), "/shop")
		.setAllowedOrigins("*");
		
		registry.addHandler(wsweaponHandler(), "/weapon")
		.setAllowedOrigins("*");
		
	}
	
	@Bean
	public WSHandler wsHandler() {
		return new WSHandler();
	}
	@Bean
	public WSMovHandler wsmoveHandler() {
		return new WSMovHandler();
	}
	@Bean
	public WSShootHandler wsshootHandler() {
		return new WSShootHandler();
	}
	@Bean
	public WSShopHandler wsshopHandler() {
		return new WSShopHandler();
	}
	@Bean
	public WSWeaponHandler wsweaponHandler() {
		return new WSWeaponHandler();
	}
	public static void main(String[] args) {
		SpringApplication.run(SocketApp.class, args);
	}
}