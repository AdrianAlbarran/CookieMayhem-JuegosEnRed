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

        var enemies = this.physics.add.group();
        //varaibles
        this.background = this.add.image(400, 300, "BACKGROUND");
        this.background.setScale(0.37);

        
         enemies.add(new chipCookie(this, 100, 100));
         enemies.add(new oreoCookie(this,200,200));
         enemies.add(new fruitCookie(this,100,200));
         enemies.add(new dinoCookie(this,200,100));
         enemies.add(new gingerCookie(this,300,200));

        console.log(this);  

        //Initialize Player1
        player1.playerIntialize(200, 400, 'DUDE', this);

        this.physics.add.collider(enemies,player1.player)
        this.physics.add.collider(enemies,enemies);
    }

    update()
    {
        player1.movement(this);
    }
}