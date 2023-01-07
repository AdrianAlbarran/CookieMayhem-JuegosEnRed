
wsGenEnem.onopen = function (msg) {
}

wsGenEnem.onerror = function (e) {
    console.log("WS error: " + e);
}
wsGenEnem.onmessage = function (msg) {
	
	var data = JSON.parse(msg.data);
	if(data._type == "onConnection")
	{
		wave = data._wave;
	}
	else
	{
		genEnem.fillEnemiesGroup(data);
		wave = data._wave;
		pauseGen = false;
	}
}

wsGenEnem.sendWS = function () {

	let message = {
		_wave: wave
	};
	
	var mes = JSON.stringify(message);
	wsGenEnem.send(mes);
}