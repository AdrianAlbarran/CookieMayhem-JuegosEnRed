wsMov.onopen = function () {
}

wsMov.onerror = function (e) {
    console.log("WS error: " + e);
}
wsMov.onmessage = function (msg) {
	var obj = JSON.parse(msg.data);
	if(obj._player == 1 ){
		directionVPlayer1 = obj._dirV;
		directionHPlayer1 = obj._dirH;
	}
	
	if(obj._player == 2 ){
		directionVPlayer2 = obj._dirV;
		directionHPlayer2 = obj._dirH;
	}
	
}

wsMov.sendWS = function (x, y, dirV, dirH, id) {
	let message = {
			p_x: x,
			p_y: y,
			_dirV: dirV,
			_dirH: dirH,
			_player: id
	};
	
	var mes = JSON.stringify(message)
		
	wsMov.send(mes);
}

// Añadir funcion que cuando se puse x tecla se envie el movimiento del personaje correspondiente.
// WASD JUG1 
// FLECHAS JUG2 


// Poner id en los mensajes para saber a que jugador va dirigido.

// Al abrir la conexion comprobar los jugadores que hay, si hay 0, devolver un mensaje con que se asigna el jug1 
// (como una echoApp)

// Los generadores de numeros aleatorios se envian en los mensajes, como las balas o los enemigos.

// Mirar esto del score. Jugadores comprando al mismo tiempo y tal.