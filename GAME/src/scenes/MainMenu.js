/** @type { import ("../../typings/phaser") } */

class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainMenu');

    }

    create() {
        addEventListener('mouseover', () => { });

        this.background = this.add.image(400, 300, "background");
        this.logo = this.add.image(400, 200, "Logo");
        this.logo.setScale(0.5);

        let fullscreen = this.add.image(50, 550, "fullscreen").setScale(0.25).setInteractive();
        let mouseSpritePlay = this.add.image(500, 370, "sugarIcon");
        let mouseSpriteSettings = this.add.image(520, 430, "sugarIcon");
        let sound = 0;
        let active  = 0;

        mouseSpritePlay.setVisible(false);
        mouseSpriteSettings.setVisible(false);
        var bool = false

        fullscreen.on('pointerup', () => {
            bcSelect.play();
            if (bool)
            {
                window['game']['canvas'][this.sys.game.device.fullscreen.cancel];
                bool = false;
                console.log(bool);
            }
            else
            {
                window['game']['canvas'][this.sys.game.device.fullscreen.request]();
                bool = true;
                console.log(bool);
            }
        });

        var textoJugar = this.add.text(400, 370, 'JUGAR', {
            fontSize: '26px', fill: '#e78999', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();
        textoJugar.on('pointerdown', () => {
            bcSelect.play();
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
            settingsBackground.setVisible(true);
            textSalir.setVisible(true);
            textSonido.setVisible(true);
            bcSelect.play();
            if (active == 1) {
                mouseSpriteSound.setVisible(true);
            } else {
                mouseSpriteSound.setVisible(false);
            }
        });

        textoAjustes.on('pointerover', () => {
            mouseSpriteSettings.setVisible(true);
        });

        textoAjustes.on('pointerout', () => {
            mouseSpriteSettings.setVisible(false);
        });

        let settingsBackground = this.add.image(400, 300, "settingsBackground");
        settingsBackground.setVisible(false);

        var textSalir = this.add.text(400, 430, 'EXIT', {
            fontSize: '26px', fill: '#000', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();
        textSalir.setVisible(false);
        textSalir.on('pointerdown', () => {
            settingsBackground.setVisible(false);
            textSalir.setVisible(false);
            textSonido.setVisible(false);
            mouseSpriteSound.setVisible(false);
            bcSelect.play();
        });

        var textSonido = this.add.text(350, 200, 'MUTE SOUND', {
            fontSize: '26px', fill: '#000', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();
        textSonido.setVisible(false);
        textSonido.on('pointerdown', () => {
            switch (sound)
            {
                case 0:
                    game.sound.mute = true;
                    mouseSpriteSound.setVisible(true);
                    sound = 1;
                    active = 1;
                    break;
                case 1:
                    game.sound.mute = false;
                    mouseSpriteSound.setVisible(false);
                    sound = 0;
                    active = 0;
                    break;
            }
            bcSelect.play();
        });

        const bcSelect = this.sound.add("MENUSELECT", 
        { 
            loop: false,
            mute: false,
            volume: 0.20
        });

        // * MUSICA
        bcMusicMenu = this.sound.add("MENUMUSIC", 
        { 
            loop: true,
            mute: false,
            volume: 0.10
        });

        let mouseSpriteSound = this.add.image(530, 200, "sugarIcon").setScale(2);
        mouseSpriteSound.setVisible(false);
        bcMusicMenu.play();
    }
}