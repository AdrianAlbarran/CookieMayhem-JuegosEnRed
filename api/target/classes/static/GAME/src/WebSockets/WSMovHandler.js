wsMov.onopen = function () {
    console.log('Hi im the onopen ws function');
}

wsMov.onerror = function (e) {
    console.log("WS error: " + e);
}
wsMov.onmessage = function (msg) {
	var obj = JSON.parse(msg.data);
	console.log(obj._player);
	if(obj._player == 1 ){
		directionPlayer1 = obj._dir;
		//player1.movement(obj._dir);
	}
	
	if(obj._player == 2 ){
		directionPlayer2 = obj._dir;
		//player2.movement(obj._dir);
	}
	
}

wsMov.sendWS = function (x, y, dire, id) {
	let message = {
			p_x: x,
			p_y: y,
			_dir: dire,
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