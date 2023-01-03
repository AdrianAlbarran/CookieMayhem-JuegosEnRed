
wsShoot.onopen = function () {
    console.log('Hi im the onopen ws function');
}

wsShoot.onerror = function (e) {
    console.log("WS error: " + e);
}
wsShoot.onmessage = function (msg) {
	/*
	console.log(msg);
	console.log(msg.data);
	var obj = JSON.parse(msg.data);
	
	if(obj._player == 1 ){
		player1.movement(obj.dir);
	}
	
	if(obj._player == 2 ){
		player2.movement(obj.dir);
	}
	*/
}

wsShoot.sendWS = function (x, y, dire, id) {

	/*
		let message = {
			p_x: x,
			p_y: y,
			dir: dire,
			_player: id,
	};
	
	var mes = JSON.stringify(message)
		
	wsShoot.send(mes);
	*/
}