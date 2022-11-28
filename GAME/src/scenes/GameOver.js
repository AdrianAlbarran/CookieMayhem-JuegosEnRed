/** @type { import ("../../typings/phaser") } */

class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOver');
    }

    create() {
        const bcSelect = this.sound.add("MENUSELECT", 
        { 
            loop: false,
            mute: false,
            volume: 0.20
        });

       this.add.image(400, 300, "gameOver");
       let mouseSpriteMain = this.add.image(495, 200, "sugarIcon");
       let mouseSpriteRestart = this.add.image(535, 250, "sugarIcon");

       mouseSpriteMain.setVisible(false);
       mouseSpriteRestart.setVisible(false);

       let mainMenu = this.add.text(420, 200, "EXIT", {
            fontSize: '26px', fill: '#j78999', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();

        let restart = this.add.text(420, 250, "RESTART", {
            fontSize: '26px', fill: '#j78999', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();

        mainMenu.on('pointerdown', () => {
            bcSelect.play();
            wave = 1;
            this.scene.start("mainMenu");
            endGameMusic.pause();
        });
        mainMenu.on('pointerover', () => {
            mouseSpriteMain.setVisible(true);
        });
        mainMenu.on('pointerout', () => {
            mouseSpriteMain.setVisible(false);
        });

        restart.on('pointerdown', () => {
            bcSelect.play();
            wave = 1;
            this.scene.start("mainScene");
            endGameMusic.pause();
        });
        restart.on('pointerover', () => {
            mouseSpriteRestart.setVisible(true);
        });
        restart.on('pointerout', () => {
            mouseSpriteRestart.setVisible(false);
        });
    }
}