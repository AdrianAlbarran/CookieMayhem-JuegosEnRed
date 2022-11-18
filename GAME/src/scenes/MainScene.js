/** @type { import ("../../typings/phaser") } */

class MainScene extends Phaser.Scene {
    constructor() {
        super('mainScene');

    }

    create() {
        var enemies = this.physics.add.group();
        //varaibles
        this.background = this.add.image(400, 300, "BACKGROUND");
        this.background.setScale(0.37);

        enemies.add(new chipCookie(this, 100, 100));
        enemies.add(new oreoCookie(this, 200, 200));
        enemies.add(new fruitCookie(this, 100, 200));
        enemies.add(new dinoCookie(this, 200, 100));
        enemies.add(new gingerCookie(this, 300, 200));

        console.log(this);

        //Initialize Player1
        player1 = new Player(this, 300, 300, 'DUDE', 'PLAYER1', economy);
        player2 = new Player(this, 400, 400, 'DUDE', 'PLAYER2', economy);

        player1.playerIntialize(this);
        player2.playerIntialize(this);


        economy.economyIntialize(this);

        tienda = new Tienda(this, 400, 300);

        this.physics.add.collider(tienda, player1);
        this.physics.add.collider(tienda, player2);


        this.physics.add.collider(enemies, player1)
        this.physics.add.collider(enemies, enemies);

        //TIENDA HUD
        let backgroundShop = this.add.image(400, 300, "PMENU");
        let item1 = this.add.image(400, 200, "PTIENDA");
        let item2 = this.add.image(600, 225, "PTIENDA");
        let item3 = this.add.image(200, 225, "PTIENDA");
        var exit = this.add.text(400, 400, "EXIT", {
            fontSize: '26px', fill: '#e0000', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();

        backgroundShop.setVisible(false);
        item1.setVisible(false);
        item2.setVisible(false);
        item3.setVisible(false);
        exit.setVisible(false);

        this.input.keyboard.on('keydown-P', function (event) {
            backgroundShop.setVisible(true);
            item1.setVisible(true);
            item2.setVisible(true);
            item3.setVisible(true);
            exit.setVisible(true);
        });

        exit.on('pointerdown', () => {
            backgroundShop.setVisible(false);
            item1.setVisible(false);
            item2.setVisible(false);
            item3.setVisible(false);
            exit.setVisible(false);
        });


        //BALAS
        this.eventHandler();
        this.initializeBullets();

    }

    update() {
        player1.movement(this);
        player2.movement(this);

        //esto será provisional, lo he añadido para ver si la función tiraba
        if (this.input.keyboard.addKey('P').isDown) {
            tienda.openShop(player1, player2);
        }

        this.input.on('pointerDown', function (event) {
            //start shooting
            this.shootLaser();
        })

    }

    initializeBullets() {
        // This should be a function 
        bulletsPlayer1 = new Bullets(this);
        bulletsPlayer2 = new Bullets(this);
    }

    eventHandler() {

        /*
        * TYPE OF GUN
        * 0 - SHOTGUN
        * 1 - REVOLVER
        * 2 - SUBMACHINE GUN
        */
        var typeShootingPlayer1 = 1;
        var typeShootingPlayer2 = 2;

        var keyShoot1 = this.input.keyboard.addKey('ENTER');
        keyShoot1.on('down', function (event) {
            bulletsPlayer1.fireBullet(player1.x, player1.y, player1, typeShootingPlayer1);
        });

        var keyShoot2 = this.input.keyboard.addKey('SPACE');
        keyShoot2.on('down', function (event) {
            bulletsPlayer2.fireBullet(player2.x, player2.y, player2, typeShootingPlayer2);
        });

        // ! LA ESCOPETA NO TENGO NI IDEA DE COMO HACERLA MALDITO SEAS JS
        /*
        if(type == 0)
        {
            var displacement = -1/3;
            for (let i = 0; i < 3; i++) {
                console.log(displacement);
                bullets.fireBullet(player1.x, player1.y, player1, type, displacement);
                displacement += 1/3
            }
        }   
        else
        { 
        
        }
        */
    }
}   