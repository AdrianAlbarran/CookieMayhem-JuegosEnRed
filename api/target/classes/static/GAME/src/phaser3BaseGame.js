
/*
* Esto de abajo es para añadir intelliCode de phaser, debe estar en cada js, con la ruta 
* relativa correcta 
*/

/** @type { import ("../typings/phaser") } */

// !GLOBALES
var economy = new Economy();
var tienda;
var enemies;

// SONIDOS
var soundShoot;
let soundCookieDamaged;
let soundPlayerDamage;
let soundPlayerSteps;
let soundMoney;
let bcMusicMenu;
let bcMusicGame;
let endGameMusic;
let buyshop;
let failshop;

// JUGADORES
var player1;
var player2;
var cont1 = 0;
var cont2 = 0;
var cont3 = 0;
var cont4 = 0;

var auxPlayer1;
var auxPlayer2;


var game = new Phaser.Game(gameConfig);


//DISPAROS
var bulletsPlayer1;
var bulletsPlayer2;

// OLEADAS
let wave = 0;
let somethingAlive = false;
var enemiesArray = new Array();
var genEnem;
var pauseGen = false;

// TEXTOS DE MAINSCENE
var scoreText;
var score;
let helpWavesText;
let openShopText;

// ANIMACIONES WS
var directionVPlayer1;
var directionHPlayer1;

var directionVPlayer2;
var directionHPlayer2;

// LOBBY WS
var p1Connected = false;
var p2Connected = false;
var currentPlayer = 0;
var lobbyThis;
var openLobby;
var statusPlayer1;
var statusPlayer2;

