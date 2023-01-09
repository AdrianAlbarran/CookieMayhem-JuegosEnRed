
wsDsync.onopen = function (msg) {
}

wsDsync.onerror = function (e) {
    console.log("WS error: " + e);
}
wsDsync.onmessage = function (msg) {
	
	var data = JSON.parse(msg.data);
	
	if(currentPlayer == 2)
	{
		player1.setPosition(data.pos1.x, data.pos1.y);
		player2.setPosition(data.pos2.x, data.pos2.y);
	}
}

wsDsync.sendWS = function () {

	if(currentPlayer == 1 && player1.hp > 0)
	{
		let message = 
		{
			pos1: player1.getCenter(),
			pos2: player2.getCenter(),
		};
	
	var mes = JSON.stringify(message);
	wsDsync.send(mes);
	}
	
}