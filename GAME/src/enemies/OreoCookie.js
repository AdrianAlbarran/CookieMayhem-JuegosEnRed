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
        this.attackSpeed = 5;
        this.lastAttacked = false;
        scene.physics.world.enable(this);
        scene.add.existing(this);
        this.setScale(0.7);
        scene.physics.add.collider(this, tienda, this.atacar);

      }
      atacar(that, tienda) {
        if (that.lastAttacked == false) {
          tienda.hp = tienda.hp - that.dmg;
          that.setAttack(that);
          console.log(tienda.hp);
        }
      }

      animate()
      {
      }

      setAttack(aux) {
        aux.lastAttacked = true;
        aux.scene.time.delayedCall(aux.attackSpeed * 1000, function () {
          aux.lastAttacked = false;
        });
      }
    }
    