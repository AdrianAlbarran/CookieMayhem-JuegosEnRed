// SOCKET PARA MOVEMENT
var aux = window.location.href;
console.log('ws:'+window.location.href+'movement');
var movIP = 'ws:'+window.location.href+'movement';
var wsMov = new WebSocket(movIP);

// SOCKET PARA DISPAROS
var shootIP = 'ws:'+window.location.href+'shoot';
var wsShoot = new WebSocket(shootIP);

// SOCKET PARA GENERAR ENEMIGOS
var genEnemIP = 'ws://'+window.location.href+'genenemy';
var wsGenEnem = new WebSocket(genEnemIP);

// SOCKET PARA COMPRARS EN LA TIENDA Y UPDATE DEL SCORE
var shopIP = 'ws://'+window.location.href+'shop';
var wsShop = new WebSocket(shopIP); 

// SOCKET PARA LAS ARMAS
var weaponIP = 'ws://'+window.location.href+'weapon';
var wsWeapon = new WebSocket(weaponIP); 

// SOCKET PARA EL LOBBY
var lobbyIP = 'ws://'+window.location.href+'lobby';
var wsLobby; // Inicializada al darle al boton "play"

// SOCKET PARA EL DSYNC
var dsyncIP ='ws://'+window.location.href+'dsync';
var wsDsync = new WebSocket(dsyncIP);  // Inicializada al darle al boton "play"