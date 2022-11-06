/** @type { import ("../../typings/phaser") } */
class ChipCookie extends Enemy{

    constructor(id,hp,movementSpeed,dmg,tipoCombate){
        super(id,hp,movementSpeed,dmg,tipoCombate);
        this.foe;
    }

    spawnEnemy(positionX,positionY,spriteID,that){
        this.foe = super.spawnEnemy(positionX,positionY,spriteID,that,this);
        this.foe.setScale(2);
    }
}