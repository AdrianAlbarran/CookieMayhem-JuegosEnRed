/** @type { import ("../../typings/phaser") } */
class oreoCookie extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y) {
        super(scene, x, y);
    
        this.hp = 100;
        this.movementSpeed = 50;
        this.dmg = 20;
        this.tipoCombate = true;
        this.setTexture("OREOCOOKIE");
        this.value = 100;
        scene.physics.world.enable(this);
        scene.add.existing(this);
        this.setScale(0.7);

      }
    
    }
    