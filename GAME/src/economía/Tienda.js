/** @type { import ("../../typings/phaser") } */

class Tienda extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.hp = 500;

    this.setTexture("TIENDA");
    scene.physics.world.enable(this);
    scene.add.existing(this);
    this.body.immovable = true;
    //Shop Inventary
    this.shop1;
    this.shop2;
    this.shop3;
    this.open = false ;
    this.scene = scene;
    //HP Bar
    this.fullWidth = 120;
    this.xBar = this.x - 67;
    this.yBar = this.y - 70;

    //Interface Stuff
    this.backgroundShop;
    this.item1;
    this.item2;
    this.item3;
    this.text1;
    this.text2;
    this.text3;
    this.exit;

    this.createHPbar(scene);
  }

  openShop() {
    if ((wave % 3) == 0) {
      this.openShopNormal();
    } else {
      this.openShopNormal();
      console.log("help");
    }
    this.createInterface();
  }

  //Esta función está por hacer
  openShopNormal() {
    var buffos = new Array();
    var dmg = new Buffs(1);
    var as = new Buffs(2);
    var amountProyectil = new Buffs(3);
    var ms = new Buffs(4);
    buffos.push(dmg);
    buffos.push(as);
    buffos.push(amountProyectil);
    buffos.push(ms);
    var visited = new Array(4);
    for (let i = 0; i < 3; i++) {
      do {
        var value = Phaser.Math.Between(0, 3);
      } while (visited[0] == value || visited[1] == value);
      visited[i] = value;
      switch (i) {
        case 0:
          this.shop1 = buffos[value];
          break;
        case 1:
          this.shop2 = buffos[value];
          break;
        case 2:
          this.shop3 = buffos[value];
          break;
      }
    }
    console.log(buffos);
    console.log(this.shop1);
    console.log(this.shop2);
    console.log(this.shop3);
  }

  createInterface() {
    this.backgroundShop = this.scene.add.image(400, 300, "PMENU");
    this.item1 = this.scene.add.image(400, 200, "PTIENDA").setInteractive();
    this.item1.on('pointerdown', () => {
      this.buffManager(this.shop1);
  });
    this.text1 = this.scene.add.text(400, 200, tienda.shop1.name);
    this.item2 = this.scene.add.image(600, 225, "PTIENDA").setInteractive();
    this.item2.on('pointerdown', () => {
      this.buffManager(this.shop2);
  });
    this.text2 = this.scene.add.text(600, 225, tienda.shop2.name);
    this.item3 = this.scene.add.image(200, 225, "PTIENDA").setInteractive();
    this.item3.on('pointerdown', () => {
      this.buffManager(this.shop3);
  });
    this.text3 = this.scene.add.text(200, 225, tienda.shop3.name);
    this.exit = this.scene.add
      .text(400, 400, "EXIT", {
        fontSize: "26px",
        fill: "#e0000",
        fontFamily: "Pixel",
      })
      .setOrigin(0.5)
      .setInteractive();

    this.backgroundShop.setVisible(false);
    this.text1.setVisible(false);
    this.text2.setVisible(false);
    this.text3.setVisible(false);
    this.item1.setVisible(false);
    this.item2.setVisible(false);
    this.item3.setVisible(false);
    this.exit.setVisible(false);
  }

  interfaceManager() {
    if (this.open == false) {
      this.backgroundShop.setVisible(true);
      this.item1.setVisible(true);
      this.item2.setVisible(true);
      this.item3.setVisible(true);
      this.text1.setVisible(true);
      this.text2.setVisible(true);
      this.text3.setVisible(true);
      this.exit.setVisible(true);
      this.open = true;
    } else {
      this.backgroundShop.setVisible(false);
      this.item1.setVisible(false);
      this.item2.setVisible(false);
      this.item3.setVisible(false);
      this.text1.setVisible(false);
      this.text2.setVisible(false);
      this.text3.setVisible(false);
      this.exit.setVisible(false);
      this.open= false;
    }
  }

  buffManager(buff){
    switch(buff.id){
      case 0:
        console.log("dmg");
        // ! Esto deberia ser con una funcion que modifique x jugador dependiendo del boton que pulsas 
        // ! (mirar GDD)
        player1.setBuffs(buff.percentage, buff.id);
        player2.setBuffs(buff.percentage, buff.id);
      break;
      case 1:
        console.log("as");
        player1.setBuffs(buff.percentage, buff.id);
        player2.setBuffs(buff.percentage, buff.id);
      break;
      case 2:
        console.log("ap");
        player1.setBuffs(buff.percentage, buff.id);
        player2.setBuffs(buff.percentage, buff.id);
      break;
      case 3:
        console.log("ms");
        player1.setBuffs(buff.percentage, buff.id);
        player2.setBuffs(buff.percentage, buff.id);
      break;
    }
  }

  createHPbar() {
    const leftShadowCap = this.scene.add
      .image(this.xBar, this.yBar, "left-cap-shadow")
      .setOrigin(0, 0.5);

    const middleShaddowCap = this.scene.add
      .image(leftShadowCap.x + leftShadowCap.width, this.yBar, "middle-shadow")
      .setOrigin(0, 0.5);
    middleShaddowCap.displayWidth = this.scene.fullWidth;

    this.scene.add
      .image(
        middleShaddowCap.x + middleShaddowCap.displayWidth,
        this.yBar,
        "right-cap-shadow"
      )
      .setOrigin(0, 0.5);

    this.scene.leftCap = this.scene.add
      .image(this.xBar, this.yBar, "left-cap")
      .setOrigin(0, 0.5);

    this.scene.middle = this.scene.add
      .image(
        this.scene.leftCap.x + this.scene.leftCap.width,
        this.yBar,
        "middle"
      )
      .setOrigin(0, 0.5);

    this.scene.rightCap = this.scene.add
      .image(
        this.scene.middle.x + this.scene.middle.displayWidth,
        this.yBar,
        "right-cap"
      )
      .setOrigin(0, 0.5);

    this.setMeterPercentage(1);
    this.setMeterPercentageAnimated(1, 100);
  }

  setMeterPercentage(percent) {
    const width = this.fullWidth * percent;

    this.scene.middle.displayWidth = width;
    this.scene.rightCap.x =
      this.scene.middle.x + this.scene.middle.displayWidth;
  }

  setMeterPercentageAnimated(percent, duration) {
    const width = this.fullWidth * percent;

    this.scene.tweens.add({
      targets: this.scene.middle,
      displayWidth: width,
      duration,
      ease: Phaser.Math.Easing.Sine.Out,
      onUpdate: () => {
        this.scene.rightCap.x =
          this.scene.middle.x + this.scene.middle.displayWidth;

        this.scene.leftCap.visible = this.scene.middle.displayWidth > 0;
        this.scene.middle.visible = this.scene.middle.displayWidth > 0;
        this.scene.rightCap.visible = this.scene.middle.displayWidth > 0;
      },
    });
  }
}
