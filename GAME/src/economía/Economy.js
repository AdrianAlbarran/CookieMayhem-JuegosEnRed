/** @type { import ("../../typings/phaser") } */

class Economy
{
    constructor()
    {
        this.money;
        this.text;
        this.item1;
    }

    economyIntialize(that)
    {
        this.money = 0;
        this.text = that.add.text(16, 16, 'score: ' + this.money, { fontSize: '24px', fill: '#000', fontFamily: 'Pixel' });
    }
}