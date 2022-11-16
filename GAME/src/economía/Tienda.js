/** @type { import ("../../typings/phaser") } */

class Tienda extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y)
    {
        super(scene,x,y);
        this.setTexture("PTIENDA");
        scene.physics.world.enable(this);
        scene.add.existing(this);
        this.body.immovable = true;

    }
    //Esta función está por hacer
    openShop(player1, player2)
    {
        
    }

}