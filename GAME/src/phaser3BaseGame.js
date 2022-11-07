
/*
* Esto de abajo es para añadir intelliCode de phaser, debe estar en cada js, con la ruta 
* relativa correcta 
*/ 

/** @type { import ("../typings/phaser") } */

//GLOBALES
var player1 = new Player('PLAYER1');
var galleta = new ChipCookie('ChipG',100,50,10,'Melee');
var oreo = new OreoCookie('OreoG',100,50,10,'Melee');
var fruitc = new FruitCookie('FruitG',100,50,10,'Melee');
var dinoc = new DinoCookie('DinoG',100,50,10,'Melee');
var gingerc = new GingerCookie('GingerG',100,50,10,'Melee');


var game = new Phaser.Game(gameConfig);

