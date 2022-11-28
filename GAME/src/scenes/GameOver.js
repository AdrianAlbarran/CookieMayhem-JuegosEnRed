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

        let restart = this.add.text(400, 250, "RESTART", {
            fontSize: '26px', fill: '#j78999', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();

        mainMenu.on('pointerdown', () => {
            wave = 1;
            this.scene.start("mainMenu");
            endGameMusic.pause();
        });

        restart.on('pointerdown', () => {
            wave = 1;
            this.scene.start("mainScene");
            endGameMusic.pause();
        });
    }
}