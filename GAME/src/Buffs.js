/** @type { import ("../../typings/phaser") } */

class Buffs {
  constructor(type) {
    this.name;
    this.percentaje;
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
  createDmg(){
    this.percentaje = Phaser.Math.Between(1, 5);
    this.name= "Damage Up " + this.percentaje + "%";
    this.id = 0;
  }
  createAttackSpeed(){
    this.percentaje = Phaser.Math.Between(1, 5);
    this.name= "Attack Speed Up " + this.percentaje + "%";
    this.id = 1;
  }
  createAmountProyectil(){
    this.percentaje = 1;
    this.name= "Proyectil Amount +1"; 
    this.id = 2;
  }
  createMoveSpeed(){
    this.percentaje = Phaser.Math.Between(1, 10);
    this.name= "MovementSpeed Up " + this.percentaje + "%";
    this.id = 3;
  }
}