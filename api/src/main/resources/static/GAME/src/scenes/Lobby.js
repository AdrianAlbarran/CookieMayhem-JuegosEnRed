/** @type { import ("../../typings/phaser") } */

class Lobby extends Phaser.Scene 
{
    constructor()
    {
        super('lobby'); 
    }

    create()
    {
        this.add.image(400, 300, "playersOnline").setScale(0.64);
        this.add.image(400, 300, "fondoPlayerEstatus");

        var next = this.add.text(400, 400, 'CONTINUE', {
            fontSize: '26px', fill: '#e78999', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();

        this.add.text(200, 200, 'Player 1:', {
            fontSize: '26px', fill: '#AE00FF', fontFamily: 'Pixel'
        }).setOrigin(0.5);
        var estatusPlayer1 = this.add.text(200, 250, 'Connected', {
            fontSize: '20px', fill: '#27AE60', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();

        this.add.text(600, 200, 'Player 2:', {
            fontSize: '26px', fill: '#00D16C', fontFamily: 'Pixel'
        }).setOrigin(0.5);
        var estatusPlayer2 = this.add.text(600, 250, 'Connected', {
            fontSize: '20px', fill: '#27AE60', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();

        next.on('pointerdown', () => {
            this.scene.start('mainScene');
        });
        next.on('pointerover', () => {
            next.setScale(1.1);
        });
        
        next.on('pointerout', () => {
            next.setScale(1);
        });

        //PARA LIMPIAR EL TINTE ROJO USA .clearTint();
        estatusPlayer2.on('pointerdown', () => {
            estatusPlayer2.setText("Disconnected");
            estatusPlayer2.setTint(0xff0000);
        });

        estatusPlayer1.on('pointerdown', () => {
            estatusPlayer1.setText("Disconnected");
            estatusPlayer1.setTint(0xff0000);
        });
    }
}