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
       let mouseSpriteMain = this.add.image(735, 235, "sugarIcon");
       let mouseSpriteRestart = this.add.image(535, 250, "sugarIcon");

       mouseSpriteMain.setVisible(false);
       mouseSpriteRestart.setVisible(false);

       let mainMenu = this.add.text(400, 235, "Back to Main Menu", {
            fontSize: '32px', fill: '#j78999', fontFamily: 'Pixel',
            //shadow: {offsetX: 2, offsetY: 2, color: '#FFF', stroke: true, fill: true}
        }).setOrigin(0.5).setInteractive();

        mainMenu.on('pointerdown', () => {
            bcSelect.play();
            wave = 1;
            this.scene.start("mainMenu");
            endGameMusic.pause();
        });
        
        mainMenu.on('pointerover', () => {
            mouseSpriteMain.setVisible(true);
            mainMenu.setScale(1.1);
        });
        mainMenu.on('pointerout', () => {
            mouseSpriteMain.setVisible(false);
             mainMenu.setScale(1);
        });
    }
}