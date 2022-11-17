/** @type { import ("../../typings/phaser") } */
class chipCookie extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.hp = 100;
    this.movementSpeed = 50;
    this.dmg = 10;
    this.tipoCombate = true;
    this.setTexture("CHIPCOOKIE");
    this.value = 100;
    scene.physics.world.enable(this);
    scene.add.existing(this);
  }

}
