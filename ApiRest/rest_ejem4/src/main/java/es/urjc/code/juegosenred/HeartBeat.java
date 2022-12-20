package es.urjc.code.juegosenred;

import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/heartbeat")
public class HeartBeat {
	
	static Map<String, Timer> clientTimers = new ConcurrentHashMap<>();
	 boolean aux = false;
	@PostMapping
	public ResponseEntity<String> handleHeartbeat(@RequestBody String requestBody) {
			aux = false;
		  String clientId = requestBody;

		  Timer timer = clientTimers.get(clientId);
		  if (timer != null) {
		    timer.cancel();
		  }
		  timer = new Timer();
		  timer.schedule(new TimerTask() {
		    public void run() {
		      System.out.println("Client " + clientId + " has disconnected");
		      aux = true;
		    }
		  }, 10000);
		  clientTimers.put(clientId, timer);
		  if(aux == true) {
			  return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		  }
		  return ResponseEntity.ok("Heartbeat received");
		}
}
