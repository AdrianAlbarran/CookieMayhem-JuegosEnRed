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
	public String user1ID = null;
	public String user2ID = null;
	@SuppressWarnings("unchecked")
	public void afterConnectionEstablished(WebSocketSession session)throws Exception{
		if(users.size() < 2)
		{
			users.put(session.getId(), session);
			if(user1ID == null) {
				user1ID = session.getId();
				JSONObject json = new JSONObject();
				json.put("player", 1);
				json.put("type", "playerID");
				session.sendMessage(new TextMessage(json.toJSONString()));
			}else if(user2ID == null){
				user2ID = session.getId();
				JSONObject json = new JSONObject();
				json.put("player", 2);
				json.put("type", "playerID");
				session.sendMessage(new TextMessage(json.toJSONString()));	
			}
			if(users.size() == 2) {
				for(WebSocketSession user : users.values()) {
					JSONObject json = new JSONObject();
					json.put("player", 0);
					json.put("type", "playerID");
					user.sendMessage(new TextMessage(json.toJSONString()));
				}
			}

		}
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		
		ObjectMapper mapper = new ObjectMapper();
		JsonNode node = mapper.readTree(message.getPayload());
		
		if(node.get("type").asText().equals("play"))
		{
			for(WebSocketSession user : users.values()) {
				JSONObject json = new JSONObject();
				json.put("type", "play");
				user.sendMessage(new TextMessage(json.toJSONString()));
			}
		}
		if(node.get("type").asText().equals("gameOver"))
		{
			for(WebSocketSession user : users.values()) {
				System.out.println("asdasd");
				JSONObject json = new JSONObject();
				json.put("type", "gameOver");
				user.sendMessage(new TextMessage(json.toJSONString()));
			}
		}
		
	}

	
	public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus)throws Exception {
		
		
		if(session.getId() == user1ID)
		{
			user1ID = null;
		}
		if(session.getId() == user2ID)
		{
			
			user2ID = null;
		}
		users.remove(session.getId());
		for(WebSocketSession user : users.values()) {
			JSONObject json = new JSONObject();
			json.put("type", "playerGone");
			user.sendMessage(new TextMessage(json.toJSONString()));
		}
	}
	
	
}