
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

var game = new Phaser.Game(gameConfig);


//DISPAROS
var bulletsPlayer1;
var bulletsPlayer2;

// OLEADAS
let wave = 1;
let somethingAlive = false;
var enemiesArray = new Array();

// TEXTOS DE MAINSCENE
var scoreText;
var score;
let helpWavesText;
let openShopText;


