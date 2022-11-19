
/*
* Esto de abajo es para añadir intelliCode de phaser, debe estar en cada js, con la ruta 
* relativa correcta 
*/

/** @type { import ("../typings/phaser") } */

// !GLOBALES
var economy = new Economy();
var tienda;

var player1;
var player2;

var game = new Phaser.Game(gameConfig);


//DISPAROS
var bulletsPlayer1;
var bulletsPlayer2;

// SONIDOS

var soundShoot;