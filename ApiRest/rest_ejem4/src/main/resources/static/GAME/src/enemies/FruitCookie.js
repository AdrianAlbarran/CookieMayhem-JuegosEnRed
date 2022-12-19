/** @type { import ("../../typings/phaser") } */
class fruitCookie extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y) {
        super(scene, x, y);
    
        this.hp =  60 * (1+(wave/5));;
        this.movementSpeed = 40;
        this.dmg = 15;
        this.tipoCombate = true;
        this.setTexture("FRUITCOOKIE");
        this.value = 25;
        this.attackSpeed = 5;
        this.lastAttacked = false;
        scene.physics.world.enable(this);
        scene.add.existing(this);
        scene.physics.add.collider(this, tienda, this.atacar);
        this.initializeAnimation(scene);
      }
    
      initializeAnimation(scene)
      {
        scene.anims.create({
          key: "FCMOVE",
          frames: scene.anims.generateFrameNumbers("FCANIM", { start: 0, end: 4 }),
          frameRate: 5,
          repeat: -1,
        });
      }
    
      animate()
      {
        this.anims.play("FCMOVE", true);
      }

      atacar(that, tienda) {
        if (that.lastAttacked == false) {
          tienda.hp = tienda.hp - that.dmg;
          tienda.setMeterPercentageAnimated(tienda.hp/500,100)
          that.setAttack(that);
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
    