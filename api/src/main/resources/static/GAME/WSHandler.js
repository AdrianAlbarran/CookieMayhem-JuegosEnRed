

// WEBSOCKETS
var serverIP = 'ws://127.0.0.1:8080/app';
var connection = new WebSocket(serverIP);

connection.onopen = function () {
    console.log('Hi im the onopen ws function');
}

connection.onerror = function (e) {
    console.log("WS error: " + e);
}
connection.onmessage = function (msg) {
	console.log(msg);
	console.log(msg.data);
	var obj = JSON.parse(msg.data);
	
	player2.movement(obj.dir);
}

// Añadir funcion que cuando se puse x tecla se envie el movimiento del personaje correspondiente.
// WASD JUG1 
// FLECHAS JUG2 


// Poner id en los mensajes para saber a que jugador va dirigido.

// Al abrir la conexion comprobar los jugadores que hay, si hay 0, devolver un mensaje con que se asigna el jug1 
// (como una echoApp)

// Los generadores de numeros aleatorios se envian en los mensajes, como las balas o los enemigos.

// Mirar esto del score. Jugadores comprando al mismo tiempo y tal.