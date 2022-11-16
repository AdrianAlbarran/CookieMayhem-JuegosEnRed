/** @type { import ("../../typings/phaser") } */

class MainScene extends Phaser.Scene 
{
    constructor()
    {
        super('mainScene');

        // ? poner en otro lado
        var bullets;
    }

    create()
    {
        // test
        var bala = this.add.image(400, 300, "laser");
        bala.depth = 3;
        //variables
        this.background = this.add.image(400, 300, "BACKGROUND");
        this.background.setScale(0.37);

        var star2 = this.add.image(400, 400, "ID2").setOrigin(0,0);
        var star3 = this.add.image(400, 400, "ID3").setOrigin(0,0);
        
        //Initialize Player1
        player1.playerIntialize(200, 400, 'DUDE', this);
        player2.playerIntialize(400, 400, 'DUDE', this);

        economy.economyIntialize(this);
        tienda.shopIntialize();

        // This should be a function 
       this.bullets = new Bullets(this);

       this.input.on('pointerdown', (pointer) => {
        this.bullets.fireBullet(player1.player.x, player1.player.y, )
       })
    }

    update()
        {
            player1.movement(this);
            player2.movement(this);
            
            //esto será provisional, lo he añadido para ver si la función tiraba
            if(this.input.keyboard.addKey('P').isDown) {
                tienda.openShop(this);
            }

            this.input.on('pointerDown', function(event) {
                //start shooting
                this.shootLaser();
                console.log('aaa');
            })
    }
    
}