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
        this.load.image("BACKGROUND", "assets/fondo.png");
        this.load.spritesheet('DUDE', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });

        // * BALAS
        this.load.image('cafe', 'assets/balas/cafe.png');
        
        //...
        this.load.image("CHIPCOOKIE",'assets/enemigos/cookie/cookie.png');
        this.load.image("OREOCOOKIE",'assets/enemigos/oreo/oreo.png')
        this.load.image("FRUITCOOKIE",'../../../art/galletas/cookie_runL2.png')
        this.load.image("DINOCOOKIE",'assets/enemigos/dino.png')
        this.load.image("GINGERCOOKIE",'assets/enemigos/ginger.png')

        this.load.image("PTIENDA","assets/PlaceHolder.png");
        this.load.image("PMENU","assets/PlaceHolderMenu.png");

        // * JUGADOR
        //this.load.spritesheet("PLAYER1", "./assets/jugadores/Jugador_1/SpritesDeCorrerP1.png", {frameWidth: 64, frameHeight: 64 });
        
        // * SONIDOS
        // ? Disparar
        this.load.audio("SHOOT", "./assets/sonidos/Pasos.mp3");

    }
    create()
    {
        this.add.text(20, 20, "loading data...");
        this.scene.start("mainScene");
    }

    

}