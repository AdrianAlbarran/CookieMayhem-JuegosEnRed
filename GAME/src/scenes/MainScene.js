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

        var star2 = this.add.image(400, 400, "ID2").setOrigin(0,0);
        var star3 = this.add.image(400, 400, "ID3").setOrigin(0,0);
        
        //Initialize Player1
        player1.playerIntialize(200, 400, 'DUDE', this);
        player2.playerIntialize(400, 400, 'DUDE', this);

    }

    update()
    {
        player1.movement(this);
        player2.movement(this);
        
    }

}