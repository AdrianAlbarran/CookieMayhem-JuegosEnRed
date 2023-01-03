
wsShoot.onopen = function () {
    console.log('Hi im the onopen ws function');
}

wsShoot.onerror = function (e) {
    console.log("WS error: " + e);
}
wsShoot.onmessage = function (msg) {
	
	var obj = JSON.parse(msg.data);	
	
	if(obj.type === 'shoot')
	{
		console.log(msg);
		console.log(msg.data);
		
		
		if(obj._player == 1 ){
			bulletsPlayer1.fireBullet(player1.x, player1.y, player1, player1.weaponID, obj.dispersion);
		}
		
		if(obj._player == 2 ){
			bulletsPlayer2.fireBullet(player2.x, player2.y, player2, player2.weaponID, obj.dispersion);
		}
	}
}

wsShoot.sendWS = function (disp, id) {

	let message = {
		type: 'shoot',	
		dispersion: disp,
		_player: id
	};
	
	var mes = JSON.stringify(message)
		
	wsShoot.send(mes);
}