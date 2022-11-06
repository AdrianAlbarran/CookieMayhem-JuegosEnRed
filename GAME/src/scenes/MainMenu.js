/** @type { import ("../../typings/phaser") } */

class MainMenu extends Phaser.Scene 
{
    constructor()
    {
        super('mainMenu'); 
       
    }
    
    preload()
    {  
        this.load.image("ID1", "assets/sky.png");
        this.load.image("Logo", "assets/interface/logoCM.png");
    }
    create()
    {
        this.background = this.add.image(400, 300, "ID1");
        this.logo = this.add.image(400,200, "Logo");
        this.logo.setScale(0.5);

        var texto = this.add.text(400, 350, 'Jugar', { 
            fontSize: '27px', fill: '#e78999', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();
        texto.on('pointerdown', () => {
            this.scene.start('loadingScene');
        });
    }

    update()
    {
    }

}