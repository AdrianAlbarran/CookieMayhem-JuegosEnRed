/** @type { import ("../../typings/phaser") } */

class Buffs {
  constructor(type) {
    this.name;
    this.percentage;
    this.id;
    this.value
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
    this.value = this.percentage *100 * wave * 20;
    console.log(this.value);
  }
  createAttackSpeed() {
    this.percentage = Phaser.Math.Between(1, 5) / 100;
    this.name = "Attack Speed Up " + this.percentage * 100 + "%";
    this.id = 1;
    this.value = this.percentage *100 * wave * 20;
    console.log(this.value);
  }
  createAmountProyectil() {
    this.percentage = 1;
    this.name = "Proyectil Amount +1";
    this.id = 2;
    this.value = wave*90;
    console.log(this.value);
  }
  createMoveSpeed() {
    this.percentage = Phaser.Math.Between(1, 10) / 100;
    this.name = "MovementSpeed Up " + this.percentage * 100 + "%";
    this.id = 3;
    this.value = this.percentage *100 * wave * 15;
    console.log(this.value);
  }
}
