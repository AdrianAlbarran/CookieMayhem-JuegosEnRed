/** @type { import ("../../typings/phaser") } */
class enemy{

    constructor(id,hp,movementSpeed,dmg,tipoCombate){
        this.id =id;
        this.player;
        this.hp =hp;
        this.movementSpeed=movementSpeed;
        this.dmg = dmg;
        this.tipoCombate =tipoCombate;
    }

    spawnEnemy(positionX,positionY,spriteID,that){
        that.enemy = that.physics.add.image(positionX,positionY,spriteID,this)
        that.enemy.setCollideWorldBounds(true);
        that.enemy.body.setGravity(0);
        that.enemy.onWorldBounds = true;

    }
}