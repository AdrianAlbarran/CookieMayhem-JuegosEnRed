/** @type { import ("../../typings/phaser") } */

var gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MainScene],
    physics: 
    {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
   
};