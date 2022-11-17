
/*
* Esto de abajo es para añadir intelliCode de phaser, debe estar en cada js, con la ruta 
* relativa correcta 
*/ 

/** @type { import ("../typings/phaser") } */

//GLOBALES

var player1 = new Player('PLAYER1');


var economy = new Economy();
var tienda;

var player1 = new Player('PLAYER1', economy);
var player2 = new Player('PLAYER2', economy);



var game = new Phaser.Game(gameConfig);

 