/** @type { import ("../../typings/phaser") } */

class Buffs {
  constructor(type) {
    this.name;
    this.percentage;
    this.id;
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
  createDmg() {
    this.percentage = Phaser.Math.Between(1, 5) / 100;
    this.name = "Damage Up " + this.percentage * 100 + "%";
    this.id = 0;
  }
  createAttackSpeed() {
    this.percentage = Phaser.Math.Between(1, 5) / 100;
    this.name = "Attack Speed Up " + this.percentage * 100 + "%";
    this.id = 1;
  }
  createAmountProyectil() {
    this.percentage = 1;
    this.name = "Proyectil Amount +1";
    this.id = 2;
  }
  createMoveSpeed() {
    this.percentage = Phaser.Math.Between(1, 10) / 100;
    this.name = "MovementSpeed Up " + this.percentage * 100 + "%";
    this.id = 3;
  }
}
