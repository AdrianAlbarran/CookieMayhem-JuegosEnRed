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
        
        this.load.image("BACKGROUND", "GAME/assets/fondo.png");
        // * BALAS
        this.load.image('cafe', 'GAME/assets/balas/cafe.png');
        
        //...
        this.load.image("CHIPCOOKIE",'GAME/assets/enemigos/cookie/cookie.png');
        this.load.image("OREOCOOKIE",'GAME/assets/enemigos/oreo/oreo.png');
        this.load.image("FRUITCOOKIE",'GAME/assets/enemigos/fruta/fruta.png');
        this.load.image("DINOCOOKIE",'GAME/assets/enemigos/dino/dino.png');
        this.load.image("GINGERCOOKIE",'GAME/assets/enemigos/ginger/ginger.png');

        this.load.image("PMENU","GAME/assets/menu.png");

        //GAMEOVER
        this.load.image("gameOver", "GAME/assets/gameover.png")

        // * JUGADOR
        this.load.spritesheet("PLAYER1", "GAME/assets/jugadores/Jugador_1/spriteP1Corriendo.png", {frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("PLAYER2", "GAME/assets/jugadores/Jugador_2/spriteSCorriendoP2.png", {frameWidth: 64, frameHeight: 64 });

        //CORAZON PLAYER
        this.load.image("HP", "GAME/assets/interface/CorazonNuevoP1.png");
        this.load.image("HPH", "GAME/assets/interface/CorazonPartidoNuevoP1.png");
        this.load.image("HP1", "GAME/assets/interface/CorazonNuevoP2.png");
        this.load.image("HPH1", "GAME/assets/interface/CorazonPartidoNuevoP2.png");

        // * ENEMIGOS
        this.load.spritesheet("CCANIM", "GAME/assets/enemigos/cookie/cookie_spritesheet.png", {frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("OCANIM", "GAME/assets/enemigos/oreo/oreo_sprittesheet.png", {frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("FCANIM", "GAME/assets/enemigos/fruta/fruta_sprittesheet.png", {frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("DCANIM", "GAME/assets/enemigos/dino/dinoSprite.png", {frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet("GCANIM", "GAME/assets/enemigos/ginger/GingerSprite.png", {frameWidth: 64, frameHeight: 64 });
        
        // * TIENDA
        this.load.image("TIENDA", "GAME/assets/tetera.png");
        this.load.image("BMENU","GAME/assets/iconos/botonLuisChiquito.png");
        this.load.image("BMENU1","GAME/assets/iconos/botonLuisChiquito1.png");
        this.load.image("BMENU2","GAME/assets/iconos/botonLuisChiquito2.png");
        this.load.image("IDMG","GAME/assets/iconos/iconoMasDaño.png");
        this.load.image("IMB","GAME/assets/iconos/iconoMasBalas.png");
        this.load.image("IVA","GAME/assets/iconos/iconoMasVelDeAtq.png");
        this.load.image("IVM","GAME/assets/iconos/iconoMasVelDeMovimiento.png");
        // * SONIDOS
        // ? Disparar
        this.load.audio("SHOOT", "GAME/assets/sonidos/Pasos.mp3");
        // * Daño a enemigos
        this.load.audio("COOKIEDAMAGED", "GAME/assets/sonidos/Daño_Galletas.mp3");
        // * Daño a Jugador
        this.load.audio("PLAYERDAMAGE", "GAME/assets/sonidos/Daño_Tazas.mp3");
        // * Pasos Jugador
        this.load.audio("PLAYERSTEPS", "GAME/assets/sonidos/Pasos.mp3");
        // * Dinero
        this.load.audio("MONEYSOUND", "GAME/assets/sonidos/CogerDinero.mp3");
        // * Comprar Tienda
        this.load.audio("BUYSHOP", "GAME/assets/sonidos/Coger_Tienda.mp3");
        this.load.audio("FAILSHOP", "GAME/assets/sonidos/Fallar_Tienda.mp3");

        // * Background music
        this.load.audio("GAMEMUSIC", "GAME/assets/musica/Cancion_JeR_1.mp3");
        this.load.audio("GAMEOVERMUSIC", "GAME/assets/musica/Cancion_Derrota.mp3");

        // * UI Health Bar
        this.load.image('left-cap', 'GAME/assets/interface/Barra Izquierda.png');
        this.load.image('middle', 'GAME/assets/interface/Barra Medio.png');
        this.load.image('right-cap', 'GAME/assets/interface/Barra Derecha.png');
    
        this.load.image('left-cap-shadow', 'GAME/assets/interface/barHorizontal_shadow_left.png');
        this.load.image('middle-shadow', 'GAME/assets/interface/barHorizontal_shadow_mid.png');
        this.load.image('right-cap-shadow', 'GAME/assets/interface/barHorizontal_shadow_right.png');;

        // * UI Armas
        this.load.image('ICONOESCOPETA', 'GAME/assets/iconos/iconoEscopeta.png');
        this.load.image('ICONOREVOLVER', 'GAME/assets/iconos/iconoRevolver.png');
        this.load.image('ICONOSUBFUSIL', 'GAME/assets/iconos/iconoSubfusil.png');
        
		// * ESTATUS PLAYER
    	this.load.image("playersOnline", "GAME/assets/playersOnline.png");
    	this.load.image("fondoPlayerEstatus", "GAME/assets/fondoPlayerEstatus.png");
        
    }
    create()
    {
        this.add.text(20, 20, "loading data...");
        //this.scene.start("mainScene");
        this.scene.start("lobby");
    }

    

}