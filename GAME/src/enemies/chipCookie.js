/** @type { import ("../../typings/phaser") } */
class ChipCookie extends Enemy{

    constructor(id,hp,movementSpeed,dmg,tipoCombate){
        super(id,hp,movementSpeed,dmg,tipoCombate);
    }

    spawnEnemy(positionX,positionY,spriteID,that){
        return super.spawnEnemy(positionX,positionY,spriteID,that,this);
    }
}