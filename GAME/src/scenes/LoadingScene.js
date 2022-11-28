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
        this.load.image("FRUITCOOKIE",'./assets/enemigos/fruta/fruta.png');
        this.load.image("DINOCOOKIE",'assets/enemigos/dino/dino.png');
        this.load.image("GINGERCOOKIE",'assets/enemigos/ginger/ginger.png');

        this.load.image("PMENU","assets/menu.png");

        //GAMEOVER
        this.load.image("gameOver", "assets/gameover.png")

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
        // * Daño a Jugador
        this.load.audio("PLAYERDAMAGE", "./assets/sonidos/Daño_Tazas.mp3");
        // * Pasos Jugador
        this.load.audio("PLAYERSTEPS", "assets/sonidos/Pasos.mp3");
        // * Dinero
        this.load.audio("MONEYSOUND", "./assets/sonidos/CogerDinero.mp3");

        // * Background music
        this.load.audio("GAMEMUSIC", "./assets/musica/Cancion_JeR_1.mp3");
        this.load.audio("GAMEOVERMUSIC", "assets/musica/Cancion_Derrota.mp3");

        // * UI Health Bar
        this.load.image('left-cap', 'assets/interface/Barra Izquierda.png');
        this.load.image('middle', 'assets/interface/Barra Medio.png');
        this.load.image('right-cap', 'assets/interface/Barra Derecha.png');
    
        this.load.image('left-cap-shadow', 'assets/interface/barHorizontal_shadow_left.png');
        this.load.image('middle-shadow', 'assets/interface/barHorizontal_shadow_mid.png');
        this.load.image('right-cap-shadow', 'assets/interface/barHorizontal_shadow_right.png');;

        
    }
    create()
    {
        this.add.text(20, 20, "loading data...");
        this.scene.start("mainScene");
    }

    

}