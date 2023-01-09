// SOCKET PARA MOVEMENT
var aux = window.location.href;
console.log(aux);
var movIP = 'ws://127.0.0.1:8080/movement';
var wsMov = new WebSocket(movIP);

// SOCKET PARA DISPAROS
var shootIP = 'ws://127.0.0.1:8080/shoot';
var wsShoot = new WebSocket(shootIP);

// SOCKET PARA GENERAR ENEMIGOS
var genEnemIP = 'ws://127.0.0.1:8080/genenemy';
var wsGenEnem = new WebSocket(genEnemIP);

// SOCKET PARA COMPRARS EN LA TIENDA Y UPDATE DEL SCORE
var shopIP = 'ws://127.0.0.1:8080/shop';
var wsShop = new WebSocket(shopIP); 

// SOCKET PARA LAS ARMAS
var weaponIP = 'ws://127.0.0.1:8080/weapon';
var wsWeapon = new WebSocket(weaponIP); 

// SOCKET PARA EL LOBBY
var lobbyIP = 'ws://127.0.0.1:8080/lobby';
var wsLobby; // Inicializada al darle al boton "play"

// SOCKET PARA EL DSYNC
var dsyncIP = 'ws://127.0.0.1:8080/dsync';
var wsDsync = new WebSocket(dsyncIP);  // Inicializada al darle al boton "play"