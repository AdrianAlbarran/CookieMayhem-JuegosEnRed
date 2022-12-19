/** @type { import ("../../typings/phaser") } */

class Economy
{
    constructor()
    {
        this.money;
        this.text;
    }

    economyIntialize(that)
    {
        this.money = 0;
    }

    setMoney(value){
        this.money -= value;
        this.text.setText("$" + this.money);
    }
}