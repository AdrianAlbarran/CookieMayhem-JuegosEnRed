
wsLobby.onopen = function () {
}

wsLobby.onerror = function (e) {
    console.log("WS error: " + e);
    
}
wsLobby.onmessage = function (msg) {
	
	var data = JSON.parse(msg.data);
	
	if(data.player == 1){
		p1Connected = true;
		currentPlayer = 1;
	}else if (data.player == 2){
		p2Connected = true;
		currentPlayer = 2;
	}else if(data.player == 0){
		p1Connected = true;
		p2Connected = true;
	}


}

wsLobby.sendWS = function () {

	let message = {
		_wave: wave
	};
	
	var mes = JSON.stringify(message);
	wsLobby.send(mes);
}