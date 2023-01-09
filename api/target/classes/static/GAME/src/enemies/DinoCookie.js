/** @type { import ("../../typings/phaser") } */
class dinoCookie extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.hp =  80 * (1+(wave/5));;
    this.movementSpeed = 30;
    this.dmg = 15;
    this.tipoCombate = true;
    this.attackSpeed = 6;
    this.lastAttacked = false;
    this.setTexture("DINOCOOKIE");
    this.value = 50;
    this.setScale(1.5);
    this.getScale = 1.5;
    scene.physics.world.enable(this);
    scene.add.existing(this);
    scene.physics.add.collider(this, tienda, this.atacar);
    this.initializeAnimation(scene);
  }

  initializeAnimation(scene)
  {
    scene.anims.create({
      key: "DCMOVE",
      frames: scene.anims.generateFrameNumbers("DCANIM", { start: 0, end: 4 }),
      frameRate: 5,
      repeat: -1,
    });
  }

  animate()
  {
    this.anims.play("DCMOVE", true);
  }

  animateHit()
  {
    this.anims.play("DCMOVE", false);
  }

  atacar(that, tienda) {
    if (that.lastAttacked == false) {
      tienda.hp = tienda.hp - that.dmg;
      tienda.setMeterPercentageAnimated(tienda.hp/500,100)
      that.setAttack(that);
    }
  }

  setAttack(aux) {
    aux.lastAttacked = true;
    aux.scene.time.delayedCall(aux.attackSpeed * 1000, function () {
      aux.lastAttacked = false;
    });
  }
}
