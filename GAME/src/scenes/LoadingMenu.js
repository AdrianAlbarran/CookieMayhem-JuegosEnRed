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

        // * MUSIC SOUNDS
        this.load.audio("MENUMUSIC", "./assets/musica/Menu_JeR.mp3");
    }
    create()
    {
        this.add.text(20, 20, "loading data...");   
        this.scene.start("mainMenu");
    }
}