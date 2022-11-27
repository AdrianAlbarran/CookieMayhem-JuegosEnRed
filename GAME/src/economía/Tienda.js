/** @type { import ("../../typings/phaser") } */

class Tienda extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.hp = 500;

    this.setTexture("TIENDA");
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.body.immovable = true;

    this.scene = scene
    //HP Bar
    this.fullWidth = 120;
    this.xBar = this.x - 67;
    this.yBar = this.y - 70;

    this.createHPbar(scene);
  }
  //Esta función está por hacer
  openShop(player1, player2) { }

  createHPbar() {
    const leftShadowCap = this.scene.add.image(this.xBar, this.yBar, 'left-cap-shadow').setOrigin(0, 0.5);

    const middleShaddowCap = this.scene.add.image(leftShadowCap.x + leftShadowCap.width, this.yBar, "middle-shadow").setOrigin(0, 0.5);
    middleShaddowCap.displayWidth = this.scene.fullWidth;

    this.scene.add.image(middleShaddowCap.x + middleShaddowCap.displayWidth, this.yBar, "right-cap-shadow").setOrigin(0, 0.5);

    this.scene.leftCap = this.scene.add.image(this.xBar, this.yBar, "left-cap").setOrigin(0, 0.5);

    this.scene.middle = this.scene.add.image(this.scene.leftCap.x + this.scene.leftCap.width, this.yBar, "middle").setOrigin(0, 0.5);

    this.scene.rightCap = this.scene.add.image(this.scene.middle.x + this.scene.middle.displayWidth, this.yBar, "right-cap").setOrigin(0, 0.5);

    this.setMeterPercentage(1);
    this.setMeterPercentageAnimated(1, 100)
  }

  setMeterPercentage(percent) {
    const width = this.fullWidth * percent;

    this.scene.middle.displayWidth = width;
    this.scene.rightCap.x = this.scene.middle.x + this.scene.middle.displayWidth;
  }

  setMeterPercentageAnimated(percent, duration) {
    const width = this.fullWidth * percent

    this.scene.tweens.add({
      targets: this.scene.middle,
      displayWidth: width,
      duration,
      ease: Phaser.Math.Easing.Sine.Out,
      onUpdate: () => {
        this.scene.rightCap.x = this.scene.middle.x + this.scene.middle.displayWidth

        this.scene.leftCap.visible = this.scene.middle.displayWidth > 0
        this.scene.middle.visible = this.scene.middle.displayWidth > 0
        this.scene.rightCap.visible = this.scene.middle.displayWidth > 0
      }
    })
  }

  
}
