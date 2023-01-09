package es.urjc.code.juegosenred;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class ServerApp implements WebSocketConfigurer{


	public static void main(String[] args) {
		SpringApplication.run(ServerApp.class, args);
	}
	
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		
		registry.addHandler(wsmoveHandler(), "/movement")
		.setAllowedOrigins("*");
		
		registry.addHandler(wsshootHandler(), "/shoot")
		.setAllowedOrigins("*");

		registry.addHandler(wsshopHandler(), "/shop")
		.setAllowedOrigins("*");
		
		registry.addHandler(wsweaponHandler(), "/weapon")
		.setAllowedOrigins("*");	
		
		registry.addHandler(wsgenenemyHandler(), "/genenemy")
		.setAllowedOrigins("*");
		
		registry.addHandler(wslobbyHandler(), "/lobby")
		.setAllowedOrigins("*");
		
		registry.addHandler(wsdsyncHandler(), "/dsync")
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
	
	@Bean
	public WSGenEnemyHandler wsgenenemyHandler() {
		return new WSGenEnemyHandler();
	}
	
	@Bean
	public WSLobbyHandler wslobbyHandler() {
		return new WSLobbyHandler();
	}
	
	@Bean
	public WSDsyncHandler wsdsyncHandler() {
		return new WSDsyncHandler();
	}
}