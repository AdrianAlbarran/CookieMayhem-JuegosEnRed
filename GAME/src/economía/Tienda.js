/** @type { import ("../../typings/phaser") } */

class Tienda
{
    constructor(dineroJ)
    {
        this.dineroJ = dineroJ;
        this.tienda;
        this.item1;
        this.item2;
        this.item3;
        //Añadir interfaz de la tienda
        //Añadir armas que se podrán comprar
    }

    shopIntialize()
    {
        this.tienda = [this.item1, this.item2, this.item3];
        this.item1 = "Esto es el objeto 1";
        this.item2 = "Esto es el objeto 2";
        this.item3 = "Esto es el objeto 3";
    }

    //Esta función está por hacer
    openShop(that){
        console.log(this.item1);
        console.log(this.item2);
        console.log(this.item3);
    }

}