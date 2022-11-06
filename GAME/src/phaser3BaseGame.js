
/*
* Esto de abajo es para añadir intelliCode de phaser, debe estar en cada js, con la ruta 
* relativa correcta 
*/ 

/** @type { import ("../typings/phaser") } */

//GLOBALES
var player1 = new Player('PLAYER1');
var galleta = new ChipCookie('Galleta',100,50,10,'Melee');


var game = new Phaser.Game(gameConfig);

