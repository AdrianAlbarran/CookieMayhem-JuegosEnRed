/** @type { import ("../../typings/phaser") } */

class LoadingMenu extends Phaser.Scene 
{
    constructor()
    {
        super('loadingMenu'); 
       
    }
    
    preload()
    {  
        this.load.image("background", "assets/interface/sky.png");
        this.load.image("Logo", "assets/interface/logoCM.png");
        this.load.image("sugarIcon", "assets/interface/sugarCube.png");
        this.load.image("fullscreen", "assets/interface/fullscreen.png");
        this.load.image("settingsBackground", "assets/menu.png");
        this.load.image("controls", "assets/controles/ControlesCookieMayhem.png");
        this.load.image("iconControls", "assets/controles/iconControls.png");

        // * MUSIC SOUNDS
        this.load.audio("MENUMUSIC", "assets/musica/Menu_JeR.mp3");
        this.load.audio("MENUSELECT", "assets/sonidos/menuSelect.mp3");
    }
    create()
    {
        this.add.text(20, 20, "loading data...");   
        this.scene.start("mainMenu");
    }
}