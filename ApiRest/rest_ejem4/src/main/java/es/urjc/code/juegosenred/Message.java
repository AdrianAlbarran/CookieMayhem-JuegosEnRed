package es.urjc.code.juegosenred;

public class Message {

	private long id;
	private String userName;
	private String content;
	private int type;

	public Message() {
	}

	public long getId() {
		return id;
	}

	public void setId(long _id) {
		this.id = _id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String _userName) {
		this.content = _userName;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String _content) {
		this.content = _content;
	}

	public int getType() {
		return this.type;
	}

	public void setType(int _type) {
		this.type = _type;
	}
	
	@Override
	public String toString() {
		return "Message [id=" + this.id + ", userName=" + this.userName+ 
				", content=" + this.content + ", type=" + this.type+ "]";
	}

}
