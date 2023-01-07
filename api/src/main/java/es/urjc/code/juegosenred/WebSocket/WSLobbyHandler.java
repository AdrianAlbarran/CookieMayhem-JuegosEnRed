package es.urjc.code.juegosenred.WebSocket;

import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ThreadLocalRandom;

import org.json.simple.JSONObject;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class WSLobbyHandler extends TextWebSocketHandler {

	public Map<String, WebSocketSession> users = new ConcurrentHashMap<>();
	
	public void afterConnectionEstablished(WebSocketSession session)throws Exception{
		if(users.size() < 2)
		{
			users.put(session.getId(), session);
			if(users.size()==1) {
				JSONObject json = new JSONObject();
				json.put("player", 1);
				session.sendMessage(new TextMessage(json.toJSONString()));
			}else {
				JSONObject json = new JSONObject();
				json.put("player", 2);
				session.sendMessage(new TextMessage(json.toJSONString()));	
			}
			if(users.size() == 2) {
				for(WebSocketSession user : users.values()) {
					JSONObject json = new JSONObject();
					json.put("player", 0);
					user.sendMessage(new TextMessage(json.toJSONString()));
				}
			}

		}
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

		
	}

	
	public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus)throws Exception {
		users.remove(session.getId());
		
	}
	
	
}