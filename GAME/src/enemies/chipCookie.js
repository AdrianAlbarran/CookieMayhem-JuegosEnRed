/** @type { import ("../../typings/phaser") } */
class chipCookie extends enemy{

    constructor(id,hp,movementSpeed,dmg,tipoCombate){
        super(id,hp,movementSpeed,dmg,tipoCombate);
    }

    spawnEnemy(positionX,positionY,spriteID,that){
        return super.spawnEnemy(positionX,positionY,spriteID,that);
    }
}