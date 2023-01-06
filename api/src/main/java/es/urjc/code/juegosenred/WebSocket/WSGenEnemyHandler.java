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

public class WSGenEnemyHandler extends TextWebSocketHandler {

	public int currentWave = 1;
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
		
		int wave = node.get("_wave").asInt();
		if(currentWave == wave)
		{
			int numEnemies = ThreadLocalRandom.current().nextInt((10*wave - 5*wave)+1) + 5*wave;
			
			for(int i = 0; i < numEnemies; i++)
			{
				int enemyType = 0, dir, x = 0, y = 0;
				
				float randNum = (float)Math.random();
				
				// enemyType
	            if (randNum <= (float) 1 / 20) {
	                enemyType = 4;
	            }
	            else if (randNum <= (float)3 / 20) {
	                enemyType = 3;
	            }
	            else if (randNum <= (float)6 / 20) {
	                enemyType = 2;
	            }
	            else if (randNum <= (float)12 / 20) {
	                enemyType = 1;
	            }
	            else if (randNum <= (float)20 / 20) {
	                enemyType = 0;
	            }
	            
	            // enemy direction
	            Random rnd = new Random();
	            dir = rnd.nextInt(4);
	            
	            // enemy exact position
	            switch (dir) {
	            case 0:
	                x = ThreadLocalRandom.current().nextInt(1000 - (-200) + 1) - 200;
	                y = ThreadLocalRandom.current().nextInt(101) - 200;
	                break;
	            case 1:
	            	
	                x = ThreadLocalRandom.current().nextInt(201) + 800;
	                y = ThreadLocalRandom.current().nextInt(1001) - 200;
	                break;
	            case 2:
	            	
	                x = ThreadLocalRandom.current().nextInt(1201) - 200;
	                y = ThreadLocalRandom.current().nextInt(100) + 700;
	                break;
	            case 3:
	                x = ThreadLocalRandom.current().nextInt(101) - 200;
	                y = ThreadLocalRandom.current().nextInt(1001) - 200;
	                break;
	            }
	            
	            JSONObject json = new JSONObject();
	            json.put("numEnemies", numEnemies);
	    		json.put("enemyType", enemyType);
	    		json.put("x", x);
	    		json.put("y", y);
	
	    		for(WebSocketSession user : users.values()) {
	    			user.sendMessage(new TextMessage(json.toJSONString()));
	    		}
	    		
	    		
			} // fin del for
			currentWave++;
		}
	}

	
	public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus)throws Exception {
		users.remove(session.getId());
		System.out.println("out" + session.getId());
	}
	
	
}