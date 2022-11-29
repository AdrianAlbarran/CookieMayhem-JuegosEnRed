/** @type { import ("./typings/phaser") } */

var gameConfig = {
    mode: Phaser.Scale.FIT,
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [LoadingMenu, MainMenu, LoadingScene, MainScene, GameOver ],
    resolution: 1, //<- resolution
    pixelArt: true,
    antialias: false,
    backgroundColor: '#000000',
    zoom: 1, //<- zoom
    physics: 
    {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
   
};