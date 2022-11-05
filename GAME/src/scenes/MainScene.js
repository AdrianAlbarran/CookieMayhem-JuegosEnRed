class MainScene extends Phaser.Scene 
{
    constructor()
    {
        super('mainScene'); 
    }

    preload()
    {
         this.load.image("id1", "assets/sky.png");
         this.load.image("id2", "assets/bomb.png");
         this.load.image("id3", "assets/star.png");
    }
    create()
    {
        var star1 = this.add.image(0, 0, "id1").setOrigin(0,0);
        var star2 = this.add.image(400, 400, "id2").setOrigin(0,0);
        var star3 = this.add.image(400, 400, "id3").setOrigin(0,0);

        this.add.text(20, 20, "Loading game...");

    }
}