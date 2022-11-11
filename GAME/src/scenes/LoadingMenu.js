/** @type { import ("../../typings/phaser") } */

class LoadingMenu extends Phaser.Scene 
{
    constructor()
    {
        super('loadingMenu'); 
       
    }
    
    preload()
    {  
        this.load.image("background", "assets/sky.png");
        this.load.image("Logo", "assets/interface/logoCM.png");
        this.load.image("sugarIcon", "assets/interface/sugarCube.png");
    }
    create()
    {
        this.add.text(20, 20, "loading data...");   
        this.scene.start("mainMenu");
    }
}