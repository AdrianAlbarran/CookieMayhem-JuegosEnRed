/** @type { import ("../../typings/phaser") } */
class GingerCookie extends Enemy{

    constructor(id,hp,movementSpeed,dmg,tipoCombate){

        super(id,hp,movementSpeed,dmg,tipoCombate);
        this.sprite = "GINGERCOOKIE";
        this.value = 50;
        this.foe;
    }

    spawnEnemy(positionX,positionY,that){
        this.foe = super.spawnEnemy(positionX,positionY,this.sprite,that,this);
        this.foe.setScale(2);
    }
}