/** @type { import ("../../typings/phaser") } */

class LoadingScene extends Phaser.Scene 
{
    constructor()
    {
        super('loadingScene'); 
    }

    preload()
    {
        // TODO: PRELOAD ALL THE NECCESARY BASE ASSETS HERE
        //Waiting to  
        
        this.load.image("ID1", "assets/sky.png");
        this.load.image("ID2", "assets/bomb.png");
        this.load.image("ID3", "assets/star.png");
        this.load.image("BACKGROUND", "assets/fondo.png");
        this.load.spritesheet('DUDE', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });

        // TEST
        this.load.image('laser', 'assets/test/laserBlue02.png');
        
        //...
        this.load.image("CHIPCOOKIE",'../../../art/galletas/cookie_idle.png');
        this.load.image("OREOCOOKIE",'../../../art/galletas/oreo_idle.png')
        this.load.image("FRUITCOOKIE",'../../../art/galletas/cookie_runL2.png')
        this.load.image("DINOCOOKIE",'../../../art/galletas/oreo_runR2.png')
        this.load.image("GINGERCOOKIE",'../../../art/galletas/oreo_runR3.png')

        this.load.image("PTIENDA","assets/PlaceHolder.png");
        this.load.image("PMENU","assets/PlaceHolderMenu.png");

    }
    create()
    {
        this.add.text(20, 20, "loading data...");
        this.scene.start("mainScene");
    }

    

}