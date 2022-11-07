/** @type { import ("../../typings/phaser") } */

class MainScene extends Phaser.Scene 
{
    constructor()
    {
        super('mainScene'); 
       
    }
    
    preload()
    {
        
    }
    create()
    {
        
        //varaibles
        this.background = this.add.image(400, 300, "BACKGROUND");
        this.background.setScale(0.37);
        galleta.spawnEnemy(200,200,this);
        oreo.spawnEnemy(300,300,this);  
        fruitc.spawnEnemy(400,200,this);
        dinoc.spawnEnemy(400,300,this);
        gingerc.spawnEnemy(600,300,this);
        var star2 = this.add.image(400, 400, "ID2").setOrigin(0,0);
        var star3 = this.add.image(400, 400, "ID3").setOrigin(0,0);

        //playerIntialize(this.player1, 'PLAYER1', 100, 400);
        console.log(this);
        
        //Initialize Player1
        player1.playerIntialize(200, 400, 'DUDE', this)

    }

    update()
    {
        player1.movement(this);
    }
}