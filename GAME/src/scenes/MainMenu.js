/** @type { import ("../../typings/phaser") } */

class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainMenu');

    }

    create() {
        addEventListener('mouseover', () => { });

        this.background = this.add.image(400, 300, "background");
        this.logo = this.add.image(400, 200, "Logo");
        let mouseSpritePlay = this.add.image(500, 370, "sugarIcon");
        let mouseSpriteSettings = this.add.image(520, 430, "sugarIcon");
        this.logo.setScale(0.5);
        let settings = this.add.text(500, 500, 'UwU');

        mouseSpritePlay.setVisible(false);
        settings.setVisible(false);
        mouseSpriteSettings.setVisible(false);

        var textoJugar = this.add.text(400, 370, 'JUGAR', {
            fontSize: '26px', fill: '#e78999', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();
        textoJugar.on('pointerdown', () => {
            this.cameras.main.fadeOut(400, 0, 0, 0);
        });

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
            this.scene.start('loadingScene');
        });

        textoJugar.on('pointerover', () => {
            mouseSpritePlay.setVisible(true);
        });
        
        textoJugar.on('pointerout', () => {
            mouseSpritePlay.setVisible(false);
        });

        var textoAjustes = this.add.text(400, 430, 'AJUSTES', {
            fontSize: '26px', fill: '#e78999', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();
        textoAjustes.on('pointerdown', () => {
            settings.setVisible(true);
        });

        textoAjustes.on('pointerover', () => {
            mouseSpriteSettings.setVisible(true);
        });

        textoAjustes.on('pointerout', () => {
            mouseSpriteSettings.setVisible(false);
        });

        // * MUSICA
        bcMusicMenu = this.sound.add("MENUMUSIC", 
        { 
            loop: true,
            mute: false,
            volume: 0.10
        });

        bcMusicMenu.play();
    }

    update() {
    }

}