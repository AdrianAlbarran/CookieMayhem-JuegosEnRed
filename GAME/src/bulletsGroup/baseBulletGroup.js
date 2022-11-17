/** @type { import ("../typings/phaser") } */

class Bullet extends Phaser.Physics.Arcade.Sprite
{

    constructor (scene, x, y)
    {
        super(scene, x, y, 'laser');
    }

    fire (x, y, player)
    {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

        this.setVelocityY(-300);
        
        var direction = player.body.facing;
        /*
        * 11: UP
        * 12: DOWN
        * 13: LEFT
        * 14: RIGHT 
        */

        console.log(direction);
        switch(direction)
        {
            case 11:
                this.setVelocity(0, -300);
                this.angle = 0;
                break;
            case 12:
                this.setVelocity(0, 300);
                this.angle = 0;
                break;
            case 13:
                this.setVelocity(-300, 0);
                this.angle = 90;
                break;
            case 14:
                this.setVelocity(300, 0);
                this.angle = 90;
                break;
        }
        
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        if(this.y <= -32 || this.y >= 632 || this.x >= 832 ||this.x <= -32)
        {
            this.setActive(false);
            this.setVisible(false);
        } //else if ( this.x >= )
    }

}
class Bullets extends Phaser.Physics.Arcade.Group
{
    constructor (scene)
    {
        super(scene.physics.world, scene);
        this.createMultiple({
            frameQuantity: 5,
            key: 'bullet',
            active: false,
            visible: false,
            classType: Bullet
        })
    }

    fireBullet(x, y, player)
    {
        console.log(this);
        let bullet = this.getFirstDead(false);

        if(bullet)
        {
            bullet.fire(x, y, player);
        }
    }
}