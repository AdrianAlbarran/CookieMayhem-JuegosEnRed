/** @type { import ("../../typings/phaser") } */

class Buffs {
  constructor(type) {
    this.name;
    this.percentage;
    this.id;
    this.value
    this.sprite
    switch (type) {
      case 1: this.createDmg();
        break;
      case 2: this.createAttackSpeed();
        break;
      case 3: this.createAmountProyectil();
        break;
      case 4: this.createMoveSpeed();
        break;
    }
  }
  // ! Existe una probabilidad que el between devuelve un valor con decimales ¿?
  createDmg() {
    this.percentage = Phaser.Math.Between(1, 5) / 100;
    this.name = "Damage Up \n" + Math.floor(this.percentage * 100) + "%";
    this.id = 0;
    this.value = Math.floor(this.percentage *100 * (wave+1)* 20);
    this.sprite="IDMG";

  }
  createAttackSpeed() {
    this.percentage = Phaser.Math.Between(1, 5) / 100;
    this.name = "Att.Speed Up \n" + Math.floor(this.percentage * 100) + "%";
    this.id = 1;
    this.value = Math.floor(this.percentage *100 * (wave+1) * 20);
    this.sprite = "IVA";
  }
  createAmountProyectil() {
    this.percentage = 1;
    this.name = "Am.Proyectil \n+1";
    this.id = 2;
    this.value = Math.floor((wave+1)*90);
    this.sprite = "IMB";

  }
  createMoveSpeed() {
    this.percentage = Phaser.Math.Between(1, 10) / 100;
    this.name = "Mov.Speed Up \n" + Math.floor(this.percentage * 100) + "%";
    this.id = 3;
    this.value = Math.floor(this.percentage *100 * (wave+1) * 15);
    this.sprite = "IVM";

  }
}
