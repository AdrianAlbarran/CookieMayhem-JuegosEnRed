/** @type { import ("./typings/phaser") } */

var gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [LoadingMenu, MainMenu, LoadingScene, MainScene ],
    physics: 
    {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
   
};