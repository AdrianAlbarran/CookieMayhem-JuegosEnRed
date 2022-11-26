
/*
* Esto de abajo es para añadir intelliCode de phaser, debe estar en cada js, con la ruta 
* relativa correcta 
*/

/** @type { import ("../typings/phaser") } */

// !GLOBALES
var economy = new Economy();
var tienda;
var enemies;

var player1;
var player2;

var game = new Phaser.Game(gameConfig);


//DISPAROS
var bulletsPlayer1;
var bulletsPlayer2;

// SONIDOS

var soundShoot;
let soundCookieDamaged;
let bcMusicMenu;
let bcMusicGame;

// OLEADAS
let wave = 1;
let somethingAlive = false;
var enemiesArray = new Array();

// TEXTOS DE MAINSCENE
var scoreText;
var score;
let helpWavesText;