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
        
        this.load.image("BACKGROUND", "assets/fondo.png");
        // * BALAS
        this.load.image('cafe', 'assets/balas/cafe.png');
        
        //...
        this.load.image("CHIPCOOKIE",'assets/enemigos/cookie/cookie.png');
        this.load.image("OREOCOOKIE",'assets/enemigos/oreo/oreo.png');
        this.load.image("FRUITCOOKIE",'../../../art/galletas/cookie_runL2.png');
        this.load.image("DINOCOOKIE",'assets/enemigos/dino.png');
        this.load.image("GINGERCOOKIE",'assets/enemigos/ginger.png');

        this.load.image("PMENU","assets/PlaceHolderMenu.png");

        // * JUGADOR
        this.load.spritesheet("PLAYER1", "./assets/jugadores/Jugador_1/spriteP1Corriendo.png", {frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("PLAYER2", "./assets/jugadores/Jugador_2/spriteSCorriendoP2.png", {frameWidth: 64, frameHeight: 64 });

        // * ENEMIGOS
        this.load.spritesheet("CCANIM", "./assets/enemigos/cookie/cookie_spritesheet.png", {frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("OCANIM", "./assets/enemigos/oreo/oreo_sprittesheet.png", {frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("FCANIM", "./assets/enemigos/fruta/fruta_sprittesheet.png", {frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("DCANIM", "./assets/enemigos/dino/dinoSprite.png", {frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("GCANIM", "./assets/enemigos/ginger/GingerSprite.png", {frameWidth: 64, frameHeight: 64 });
        
        // * TIENDA
        this.load.image("TIENDA", "./assets/tetera.png");
        // * SONIDOS
        // ? Disparar
        this.load.audio("SHOOT", "./assets/sonidos/Pasos.mp3");
        // * Daño a enemigos
        this.load.audio("COOKIEDAMAGED", "./assets/sonidos/Daño_Galletas.mp3");

        // * Background music
        this.load.audio("GAMEMUSIC", "./assets/musica/Cancion_JeR_1.mp3");

        
    }
    create()
    {
        this.add.text(20, 20, "loading data...");
        this.scene.start("mainScene");
    }

    

}