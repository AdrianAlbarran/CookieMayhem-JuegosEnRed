/** @type { import ("../../typings/phaser") } */

class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOver');
    }

    create() {
       this.add.image(400, 300, "gameOver");

       let mainMenu = this.add.text(400, 200, "EXIT", {
            fontSize: '26px', fill: '#j78999', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();

        mainMenu.on('pointerdown', () => {
            this.scene.start("mainMenu");
            endGameMusic.pause();
        });
    }
}