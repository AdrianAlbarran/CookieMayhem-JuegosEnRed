package es.urjc.code.juegosenred.WebSocket;

import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

import org.json.simple.JSONObject;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class WSWeaponHandler extends TextWebSocketHandler {

	public Map<String, WebSocketSession> users = new ConcurrentHashMap<>();
	public Random a = new Random();
	int player1 = a.nextInt(3);
	int player2 = a.nextInt(3);
	
	public void afterConnectionEstablished(WebSocketSession session)throws Exception{
		if(users.size() < 2)
		{
			users.put(session.getId(), session);
			users.forEach( (key, value) -> System.out.println("user: " + key + " = " + value));
		}
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

		JSONObject json = new JSONObject();
		json.put("player1", player1);
		json.put("player2",player2);
		session.sendMessage(new TextMessage(json.toJSONString()));
		
	}
	
	
	public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus)throws Exception {
		users.remove(session.getId());
	}
	

	
}