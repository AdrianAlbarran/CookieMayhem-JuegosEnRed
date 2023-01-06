
wsGenEnem.onopen = function () {
}

wsGenEnem.onerror = function (e) {
    console.log("WS error: " + e);
}
wsGenEnem.onmessage = function (msg) {
	
	var data = JSON.parse(msg.data);	
	
	genEnem.fillEnemiesGroup(data);
	pauseGen = false;
}

wsGenEnem.sendWS = function () {

	let message = {
		_wave: wave
	};
	
	var mes = JSON.stringify(message);
	wsGenEnem.send(mes);
}