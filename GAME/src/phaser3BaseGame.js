
/*
* Esto de abajo es para añadir intelliCode de phaser, debe estar en cada js, con la ruta 
* relativa correcta 
*/ 

/** @type { import ("../typings/phaser") } */

 //IMPORTS

var mainScene = new GameScene();
var game = new Phaser.Game(window.gameConfig);
game.scene.add('mainScene', mainScene);
game.scene.start('mainScene');
