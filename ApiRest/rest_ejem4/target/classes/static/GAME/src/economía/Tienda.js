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
    this.open = true ;
    this.scene = scene;
    this.onMenu = false;
    this.first = false;
    //HP Bar
    this.fullWidth = 120;
    this.xBar = this.x - 67;
    this.yBar = this.y - 70;

    //Interface Stuff
    this.backgroundShop;
    this.item1;
    this.item2;
    this.item3;
    this.price1;
    this.price2;
    this.price3;
    this.text1;
    this.text2;
    this.text3;
    this.priceText1;
    this.priceText2;
    this.priceText3;
    this.icono1;
    this.icono2;
    this.icono3;

    this.iconoStats1;
    this.iconoStats2;
    this.iconoStats3;
    this.iconoStats4;
    this.statText1;
    this.statText2;
    this.statText3;
    this.statText4;

    this.exit;
 
    this.createHPbar(scene);
  }

  openShop() {

    if ((wave % 3) == 0) {
      this.openShopNormal();
    } else {
      this.openShopNormal();
    }
    
    if(!this.first){
      this.createInterface();

      this.first = true;
    }else{
      this.updateInterface();
    }
  }

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
    var style = { fontFamily: "Pixel",fontSize:"14px", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle",align: "center",lineSpacing: 10};
    var style2 = { fontFamily: "Pixel",fontSize:"13px", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle",align: "center",lineSpacing: 10};
    this.backgroundShop = this.scene.add.image(400, 300, "PMENU").setDepth(2);

    this.item1 = this.scene.add.image(400, 300, "BMENU1").setInteractive().setDepth(3).setScale(1.5);
    this.item1.on('pointerdown', () => {
      this.buffManager(this.shop1);
      this.item1.setScale(1.45);
      var that = this.item1;
      this.scene.time.delayedCall(750, function () {that.setScale(1.5);});
    });
    this.item1.on('pointerover', () => {
      this.item1.setScale(1.6);
    });
    this.item1.on('pointerout', () => {
      this.item1.setScale(1.5);
    });
    this.text1 = this.scene.add.text(this.item1.x+7, this.item1.y, this.shop1.name,style).setDepth(3).setOrigin(0.5,0.5);
    this.price1 = this.scene.add.image(this.item1.x+75, this.item1.y+30, "BMENU2").setInteractive().setDepth(3).setScale(0.5);
    this.priceText1 = this.scene.add.text(this.price1.x, this.price1.y, "$"+this.shop1.value,style2).setDepth(3).setOrigin(0.5,0.5);
    this.icono1 = this.scene.add.image(this.item1.x-50,this.item1.y+15,this.shop1.sprite).setDepth(3).setScale(0.75);

    this.item2 = this.scene.add.image(400, 200, "BMENU1").setInteractive().setDepth(3).setScale(1.5);
    this.item2.on('pointerdown', () => {
      this.buffManager(this.shop2);
      this.item2.setScale(1.45);
      var that = this.item2;
      this.scene.time.delayedCall(750, function () {that.setScale(1.5);});
    });
    this.item2.on('pointerover', () => {
      this.item2.setScale(1.6);
    });
    this.item2.on('pointerout', () => {
      this.item2.setScale(1.5);
    });
    this.text2 = this.scene.add.text(this.item2.x+7, this.item2.y, this.shop2.name,style).setDepth(3).setOrigin(0.5,0.5);
    this.price2 =this.scene.add.image(this.item2.x-75, this.item2.y+30, "BMENU2").setInteractive().setDepth(3).setScale(0.5);
    this.priceText2 = this.scene.add.text(this.price2.x, this.price2.y, "$"+this.shop2.value,style2).setDepth(3).setOrigin(0.5,0.5);
    this.icono2 = this.scene.add.image(this.item2.x+50,this.item2.y+15,this.shop2.sprite).setDepth(3).setScale(0.75);

    this.item3 = this.scene.add.image(400, 400, "BMENU1").setInteractive().setDepth(3).setScale(1.5);
    this.item3.on('pointerdown', () => {  
      this.buffManager(this.shop3);
      this.item3.setScale(1.45);
      var that = this.item3;
      this.scene.time.delayedCall(750, function () {that.setScale(1.5);});
    });
    this.item3.on('pointerover', () => {
      this.item3.setScale(1.6);
    });
    this.item3.on('pointerout', () => {
      this.item3.setScale(1.5);
    });
    this.text3 = this.scene.add.text(this.item3.x+7 ,this.item3.y, this.shop3.name,style).setDepth(3).setOrigin(0.5,0.5);
    this.price3 =this.scene.add.image(this.item3.x-75, this.item3.y+30, "BMENU2").setInteractive().setDepth(3).setScale(0.5);
    this.priceText3 = this.scene.add.text(this.price3.x, this.price3.y, "$"+this.shop3.value,style2).setDepth(3).setOrigin(0.5,0.5);
    this.icono3 = this.scene.add.image(this.item3.x+50,this.item3.y+15,this.shop3.sprite).setDepth(3).setScale(0.75);

    this.statText1 = this.scene.add.text(40, 295, cont1, style2).setDepth(3);
    this.statText2 = this.scene.add.text(40, 345, cont2, style2).setDepth(3);
    this.statText3 = this.scene.add.text(40, 395, cont3, style2).setDepth(3);
    this.statText4 = this.scene.add.text(40, 445, cont4, style2).setDepth(3);

    this.iconoStats1 = this.scene.add.image(20, 300, "IDMG");
    this.iconoStats2 = this.scene.add.image(20, 350, "IMB");
    this.iconoStats3 = this.scene.add.image(20, 400, "IVA");
    this.iconoStats4 = this.scene.add.image(20, 450, "IVM");


    this.backgroundShop.setVisible(false);
    this.text1.setVisible(false);
    this.text2.setVisible(false);
    this.text3.setVisible(false);
    this.item1.setVisible(false);
    this.item2.setVisible(false);
    this.item3.setVisible(false);
    this.price1.setVisible(false);
    this.price2.setVisible(false);
    this.price3.setVisible(false);
    this.priceText1.setVisible(false);
    this.priceText2.setVisible(false);
    this.priceText3.setVisible(false);
    this.icono1.setVisible(false);
    this.icono2.setVisible(false);
    this.icono3.setVisible(false);
    this.iconoStats1.setVisible(false);
    this.iconoStats2.setVisible(false);
    this.iconoStats3.setVisible(false);
    this.iconoStats4.setVisible(false);
    this.statText1.setVisible(false);
    this.statText2.setVisible(false);
    this.statText3.setVisible(false);
    this.statText4.setVisible(false);

  }

  updateInterface(){
    // ! Falta añadir los iconos de items para que se actualicen

    this.text1.setText(this.shop1.name);
    this.text2.setText(this.shop2.name);
    this.text3.setText(this.shop3.name);
    this.priceText1.setText(this.shop1.value);
    this.priceText2.setText(this.shop2.value);
    this.priceText3.setText(this.shop3.value);
    var aux = false
    if(this.icono1.visible){
      aux = true;
    }
    this.icono1.setVisible(false);
    this.icono1 = this.scene.add.image(this.item1.x-50,this.item1.y+15,this.shop1.sprite).setDepth(3).setScale(0.75);
    this.icono1.setVisible(aux);
    this.icono2.setVisible(false);
    this.icono2 = this.scene.add.image(this.item2.x+50,this.item2.y+15,this.shop2.sprite).setDepth(3).setScale(0.75);
    this.icono2.setVisible(aux);
    this.icono3.setVisible(false);
    this.icono3 = this.scene.add.image(this.item3.x+50,this.item3.y+15,this.shop3.sprite).setDepth(3).setScale(0.75);
    this.icono3.setVisible(aux);

    
  }

  interfaceManager() {
      this.backgroundShop.setVisible(this.open);
      this.item1.setVisible(this.open);
      this.item2.setVisible(this.open);
      this.item3.setVisible(this.open);
      this.text1.setVisible(this.open);
      this.text2.setVisible(this.open);
      this.text3.setVisible(this.open);
      this.price1.setVisible(this.open);
      this.price2.setVisible(this.open);
      this.price3.setVisible(this.open);
      this.priceText1.setVisible(this.open);
      this.priceText2.setVisible(this.open);
      this.priceText3.setVisible(this.open);
      this.icono1.setVisible(this.open);
      this.icono2.setVisible(this.open);
      this.icono3.setVisible(this.open);
      this.iconoStats1.setVisible(this.open);
      this.iconoStats2.setVisible(this.open);
      this.iconoStats3.setVisible(this.open);
      this.iconoStats4.setVisible(this.open);
      this.statText1.setVisible(this.open);
      this.statText2.setVisible(this.open);
      this.statText3.setVisible(this.open);
      this.statText4.setVisible(this.open);

      this.onMenu = this.open;
      this.open = !this.open;
  }

  buffManager(buff){
    switch(buff.id){
      case 0:
        if(player1.economy.money>= buff.value){
        player1.setBuffs(buff.percentage, buff.id);
        player2.setBuffs(buff.percentage, buff.id);
        player1.economy.setMoney(buff.value);
        cont1 +=1;
        this.statText1.setText(cont1);
        buyshop.play();
        } else {
          failshop.play();
        }
      break;
      case 1:
        if(player1.economy.money>= buff.value){
        player1.setBuffs(buff.percentage, buff.id);
        player2.setBuffs(buff.percentage, buff.id);
        player1.economy.setMoney(buff.value);
        cont2 +=1;
        this.statText3.setText(cont2);
        buyshop.play();
        } else {
          failshop.play();
        }
      break;
      case 2:
        if(player1.economy.money>= buff.value){
        player1.setBuffs(buff.percentage, buff.id);
        player2.setBuffs(buff.percentage, buff.id);
        player1.economy.setMoney(buff.value);
        cont3 +=1;
        this.statText2.setText(cont3);
        buyshop.play();
        } else {
          failshop.play();
        }
      break;
      case 3:
        if(player1.economy.money>= buff.value){
        player1.setBuffs(buff.percentage, buff.id);
        player2.setBuffs(buff.percentage, buff.id);
        player1.economy.setMoney(buff.value);
        cont4 +=1;
        this.statText4.setText(cont4);
        buyshop.play();
        } else {
          failshop.play();
        }
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
