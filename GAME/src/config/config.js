/** @type { import ("../../typings/phaser") } */

var gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Scene1],
    physics: 
    {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
   
};