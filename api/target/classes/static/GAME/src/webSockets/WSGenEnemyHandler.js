
wsGenEnem.onopen = function () {
    console.log('Hi im the GenEnemy onopen ws function');
}

wsGenEnem.onerror = function (e) {
    console.log("WS error: " + e);
}
wsGenEnem.onmessage = function (msg) {
	
	//var obj = JSON.parse(msg.data);	
	
}

wsGenEnem.sendWS = function (disp, id) {

	let message = {
		type: 'shoot',	
		dispersion: disp,
		_player: id
	};
	
	var mes = JSON.stringify(message)
		
	wsGenEnem.send(mes);
}