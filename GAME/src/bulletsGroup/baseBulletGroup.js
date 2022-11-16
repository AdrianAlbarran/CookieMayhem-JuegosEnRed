/** @type { import ("../typings/phaser") } */

class BaseBulletGroup extends Phaser.Physics.Arcade.Group
{
    constructor(scene)
    {
        super(scene.physics.world, scene);

        // initialize the group
        this.createMultiple({
            classType: BaseBullet,
            frameQuantity: 30,
            active: false,
            visible: false,
            key: 'bullet'
        })
    }

    fireBullet(x, y)
    {
        // get this first available sprite on the group
        const bullet = this.getFirstDead(false);
        
        if(bullet) 
        {
            bullet.fire(x, y);
        }
    }
}

class BaseBullet extends Phaser.Physics.Arcade.Sprite 
{
    constructor(scene, x, y)
    {
        super(scene, x, y, 'bullet');
    }

    fire(x, y)
    {
        this.body.reset(x, y);
        
        this.setActive(true);
        this.setVisible(true);

        this.setVelocityY(-900);
    }
}