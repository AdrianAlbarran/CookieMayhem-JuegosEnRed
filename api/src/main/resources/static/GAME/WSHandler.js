

// WEBSOCKETS
var serverIP = 'ws://127.0.0.1:8080/app';
var connection = new WebSocket(serverIP, "http/1.1");

connection.onopen = function () {
    console.log('Hi im the onopen ws function')
    connection.send('Hi');
}

connection.onerror = function (e) {
    console.log("WS error: " + e);
}
connection.onmessage = function (msg) {
    console.log("WS message: " + msg.data);
}

$(document).ready(function () {
    connection.send('estoy ready');
});
