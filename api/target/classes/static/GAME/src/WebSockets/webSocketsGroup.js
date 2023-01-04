// SOCKET PARA MOVEMENT
var movIP = 'ws://127.0.0.1:8080/movement';
var wsMov = new WebSocket(movIP);

// SOCKET PARA DISPAROS
var shootIP = 'ws://127.0.0.1:8080/shoot';
var wsShoot = new WebSocket(shootIP);

// SOCKET PARA GENERAR ENEMIGOS
var genEnemIP = 'ws://127.0.0.1:8080/genEnemies';
var wsGenEnem = new WebSocket(genEnemIP);

// SOCKET PARA COMPRARS EN LA TIENDA Y UPDATE DEL SCORE
var shopIP = 'ws://127.0.0.1:8080/shop';
var wsShop = new WebSocket(shopIP); 
