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
        
        //Initialize Player1
        player1.playerIntialize(200, 400, 'DUDE', this);
        player2.playerIntialize(400, 400, 'DUDE', this);

        economy.economyIntialize(this);

        tienda = new Tienda(this, 400, 300);

        this.physics.add.collider(tienda, player1.player);
        this.physics.add.collider(tienda, player2.player);

    }

    update()
    {
        player1.movement(this);
        player2.movement(this);
        
        //esto será provisional, lo he añadido para ver si la función tiraba
        if(this.input.keyboard.addKey('P').isDown) {
            tienda.openShop(player1, player2);
        }
    }

}