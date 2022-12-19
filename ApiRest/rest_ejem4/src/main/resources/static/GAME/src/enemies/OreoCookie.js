/** @type { import ("../../typings/phaser") } */
class oreoCookie extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y) {
        super(scene, x, y);
    
        this.hp = 20 * (1+(wave/5));;
        this.movementSpeed = 70;
        this.dmg = 5;
        this.tipoCombate = true;
        this.setTexture("OREOCOOKIE");
        this.value = 15;
        this.attackSpeed = 5;
        this.lastAttacked = false;
        scene.physics.world.enable(this);
        scene.add.existing(this);
        this.setScale(0.7);
        this.getScale = 0.7;
        scene.physics.add.collider(this, tienda, this.atacar);
        this.initializeAnimation(scene);
      }
    
      initializeAnimation(scene)
      {
        scene.anims.create({
          key: "OCMOVE",
          frames: scene.anims.generateFrameNumbers("OCANIM", { start: 0, end: 4 }),
          frameRate: 10,
          repeat: -1,
        });
      }
      
    
      animate()
      {
        this.anims.play("OCMOVE", true);
      }

      atacar(that, tienda) {
        if (that.lastAttacked == false) {
          tienda.hp = tienda.hp - that.dmg;
          that.setAttack(that);
          tienda.setMeterPercentageAnimated(tienda.hp/500,100)
          console.log(tienda.hp);
        }
      }

      setAttack(aux) {
        aux.lastAttacked = true;
        aux.scene.time.delayedCall(aux.attackSpeed * 1000, function () {
          aux.lastAttacked = false;
        });
      }
    }
    