/** @type { import ("../../typings/phaser") } */

class LoadingMenu extends Phaser.Scene 
{
    constructor()
    {
        super('loadingMenu'); 
       
    }
    
    preload()
    {  
        this.load.image("background", "GAME/assets/interface/sky.png");
        this.load.image("Logo", "GAME/assets/interface/logoCM.png");
        this.load.image("sugarIcon", "GAME/assets/interface/sugarCube.png");
        this.load.image("fullscreen", "GAME/assets/interface/fullscreen.png");
        this.load.image("settingsBackground", "GAME/assets/menu.png");
        this.load.image("controls", "GAME/assets/controles/ControlesCookieMayhem.png");
        this.load.image("iconControls", "GAME/assets/controles/iconControls.png");

        // * MUSIC SOUNDS
        this.load.audio("MENUMUSIC", "GAME/assets/musica/Menu_JeR.mp3");
        this.load.audio("MENUSELECT", "GAME/assets/sonidos/menuSelect.mp3");
    }
    create()
    {
        this.add.text(20, 20, "loading data...");   
        this.scene.start("mainMenu");
    }
}