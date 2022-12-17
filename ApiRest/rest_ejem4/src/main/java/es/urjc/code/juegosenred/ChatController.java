package es.urjc.code.juegosenred;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/messages")
public class ChatController {

	Map<Long, Message> messages = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	
	@GetMapping
	public Collection<Message> AJAXGETmessages() {
		return messages.values();
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Message AJAXPOST_newMessage(@RequestBody Message message) {

		long id = nextId.incrementAndGet();
		message.setId(id);
		messages.put(id, message);

		return message;
	}


}
