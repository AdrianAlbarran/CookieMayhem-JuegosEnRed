/** @type { import ("../../typings/phaser") } */
class chipCookie extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.hp = 100;
    this.movementSpeed = 5;
    this.dmg = 10;
    this.tipoCombate = true;
    this.attackSpeed = 5;
    this.lastAttacked = false;
    this.setTexture("CHIPCOOKIE");
    this.value = 100;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.setScale(0.7);
    scene.physics.add.collider(this, tienda, this.atacar);
    this.initializeAnimation(scene);
  }

  initializeAnimation(scene)
  {
    scene.anims.create({
      key: "CCMOVE",
      frames: scene.anims.generateFrameNumbers("CCANIM", { start: 0, end: 0 }),
      frameRate: 20,
      repeat: -1,
    });
  }

  animate()
  {
    this.anims.play("CCMOVE", true);
  }

  atacar(that, tienda) {
    if (that.lastAttacked == false) {
      tienda.hp = tienda.hp - that.dmg;
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
