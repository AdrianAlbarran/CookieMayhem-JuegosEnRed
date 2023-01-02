package es.urjc.code.juegosenred.WebSocket;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class WSHandler extends TextWebSocketHandler {

	public Map<String, WebSocketSession> users = new ConcurrentHashMap<>();
	
	public void afterConnectionEstablished(WebSocketSession session)throws Exception{
		if(users.size() <= 2)
		{
			users.put(session.getId(), session);
			System.out.println(session.getId());
		}
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

		for(WebSocketSession user : users.values()) {
			if(!user.getId().equals(session.getId())){
				String msg = message.getPayload();
				user.sendMessage(new TextMessage(msg));
			}
		}
		
	}
	
protected void sendOther(WebSocketSession session, String message) throws Exception {
		
		
		for(WebSocketSession user : users.values()) {
			if(user.getId().equals(session.getId())){
				user.sendMessage(new TextMessage(message));
			}
		}
		
	}
	
	
}
