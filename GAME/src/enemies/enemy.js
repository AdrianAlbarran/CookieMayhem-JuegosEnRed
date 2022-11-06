/** @type { import ("../../typings/phaser") } */
class Enemy{

    constructor(id,hp,movementSpeed,dmg,tipoCombate){
        this.id =id;
        this.player;
        this.hp =hp;
        this.movementSpeed=movementSpeed;
        this.dmg = dmg;
        this.tipoCombate =tipoCombate;
    }

    spawnEnemy(positionX,positionY,spriteID,that,those){
        those = that.physics.add.image(positionX,positionY,spriteID,this)
        those.setCollideWorldBounds(true);
        those.body.setGravity(0);
        those.onWorldBounds = true;
        return those;

    }
}