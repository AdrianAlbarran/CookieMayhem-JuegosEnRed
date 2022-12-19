package es.urjc.code.juegosenred;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Iterator;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

@SuppressWarnings("unchecked")
public class CreateJson {
	
	static FileWriter file;
	static FileReader fileR;


	static JSONObject jsonfile = new JSONObject();
	
	public static void main(Message message){
		
		
		jsonfile.put("id",message.getId());
		jsonfile.put("userName",message.getUserName());
		jsonfile.put("content",message.getContent());
		jsonfile.put("type",message.getType());

		
		try{
			file = new FileWriter("messages.json",true);
			file.write(jsonfile.toJSONString() + "\n");

			file.flush();
		}catch(IOException e ) {
			
			e.printStackTrace();
		}
		
	}
	
}
