
openLobby = function()
{
	 wsLobby = new WebSocket(lobbyIP);
	 
	 wsLobby.onopen = function () {
  	 }

	wsLobby.onerror = function (e) {
	    console.log("WS error: " + e);
	    
	}
	
	wsLobby.onmessage = function (msg) {
			
		var data = JSON.parse(msg.data);
		
		if(data.type === "playerID")
		{
			if(data.player == 1){
				p1Connected = true;
				currentPlayer = 1;
				//lobbyThis.setPlayer1State('Connected');
			}else if (data.player == 2){
				p2Connected = true;
				currentPlayer = 2;
				//lobbyThis.setPlayer2State('Connected');
			}else if(data.player == 0){
				p1Connected = true;
				p2Connected = true;
			}
		}
		if(data.type === "playerGone")
		{
			switch(currentPlayer)
			{
				default:
					break;
				case 1:
					p2Connected = false;
					break;
				case 2:
					p1Connected = false;
					break;
			}
			
		}
	
		if(data.type === "play")
		{
			if(p1Connected && p2Connected)
			{
				lobbyThis.scene.start('mainScene');
			}
		}
		
		if(data.type === "gameOver")
		{
			if(genEnem.scene.isActive('gameOver') == false)
			{
				genEnem.scene.stop();
            	bcMusicGame.pause();
				genEnem.scene.start('gameOver');
			}
			wsLobby.close();
			switch(currentPlayer)
			{
				default:
					break;
				case 1:
					p2Connected = false;
					break;
				case 2:
					p1Connected = false;
					break;
			}
		}

	}
	
	wsLobby.sendWS = function (dataType) {
	
		let message = {
			type: dataType
		};
		
		var mes = JSON.stringify(message);
		wsLobby.send(mes);
	}
}
