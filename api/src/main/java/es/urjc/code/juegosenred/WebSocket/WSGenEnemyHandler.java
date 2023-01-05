package es.urjc.code.juegosenred.WebSocket;

import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class WSGenEnemyHandler extends TextWebSocketHandler {

	public Map<String, WebSocketSession> users = new ConcurrentHashMap<>();
	
	public void afterConnectionEstablished(WebSocketSession session)throws Exception{
		if(users.size() < 2)
		{
			users.put(session.getId(), session);

			users.forEach( (key, value) -> System.out.println("user: " + key + " = " + value));
		}
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

		ObjectMapper mapper = new ObjectMapper();
		JsonNode node = mapper.readTree(message.getPayload());
		int wave = node.get("wave").asInt();
		System.out.println(wave);
		
		Random aux = new Random();
		//int player1 = a.nextInt(3);
		
	}

	
	public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus)throws Exception {
		users.remove(session.getId());
		System.out.println("out" + session.getId());
	}
	
	
}