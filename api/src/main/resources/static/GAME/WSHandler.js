

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
	var obj = JSON.parse(msg.data);
    player2.x =obj.p_x;
}

