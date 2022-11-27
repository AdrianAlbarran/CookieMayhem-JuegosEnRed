/** @type { import ("../../typings/phaser") } */


class MainScene extends Phaser.Scene {
    constructor() {
        super('mainScene');
        var scene = this;
    }

    preupdate() {

    }

    create() {
        bcMusicMenu.pause();
        enemies = this.physics.add.group();
        //varaibles
        this.background = this.add.image(400, 300, "BACKGROUND");
        this.background.setScale(0.37);

        // enemies.add(new chipCookie(this, 100, 100));
        // enemies.add(new oreoCookie(this, 200, 200));
        // enemies.add(new fruitCookie(this, 100, 200));
        // enemies.add(new dinoCookie(this, 200, 100));
        // enemies.add(new gingerCookie(this, 300, 200));
        tienda = new Tienda(this, 400, 300);

        //Initialize Players
        player1 = new Player(this, 300, 300, 'PLAYER1', 'PLAYER1', economy);
        player2 = new Player(this, 400, 400, 'PLAYER2', 'PLAYER2', economy);

        player1.playerIntialize(this);
        player2.playerIntialize(this);

        economy.economyIntialize(this);

        this.physics.add.collider(tienda, player1);
        this.physics.add.collider(tienda, player2);

        this.physics.add.collider(enemies, enemies);

        // * TEXTOS
        score = 0;
        scoreText = this.add.text(375, 16, '$0', { fontSize: '24px', fill: '#000', fontFamily: 'Pixel' });

        // * 
        helpWavesText = this.add.text(400 - 185, 500, '        PRESS Y \nTO SUMMON THE NEXT WAVE',
            {
                fontSize: '16px',
                fill: '#000',
                fontFamily: 'Pixel'
            })

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
        this.initializeBullets();

        // * SONIDOS
        // DISPAROS
        soundShoot = this.sound.add('SHOOT',
            {
                mute: false,
                volume: 0.15,
            });

        // Daños

        soundCookieDamaged = this.sound.add('COOKIEDAMAGED',
            {
                mute: false,
                volume: 0.15,
            });

        soundCookieDamaged = this.sound.add('COOKIEDAMAGED',
            {
                mute: false,
                volume: 0.15,
            });

        // * MUSIC BACKGROUND
        bcMusicGame = this.sound.add("GAMEMUSIC",
            {
                loop: true,
                mute: false,
                volume: 0.10
            });
        bcMusicGame.play();


    }

    update() {
        player1.movement(this);
        player2.movement(this);

        //esto será provisional, lo he añadido para ver si la función tiraba
        if (this.input.keyboard.addKey('P').isDown) {
            tienda.openShop(player1, player2);
        }

        enemiesArray = enemies.getChildren();
        this.eventHandler();
        this.checkEnemiesHP();

        this.checkSomethingAlive()
        this.wavesManager();
        this.enemiesAttack();
        this.checkShopHp();
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
        var stillDown1 = this.input.keyboard.checkDown(keyShoot1, 500);

        if (stillDown1) {
            soundShoot.play();
            bulletsPlayer1.fireBullet(player1.x, player1.y, player1, typeShootingPlayer1);
        }

        var keyShoot2 = this.input.keyboard.addKey('SPACE');
        var stillDown2 = this.input.keyboard.checkDown(keyShoot2, 200);

        if (stillDown2) {
            soundShoot.play();
            bulletsPlayer2.fireBullet(player2.x, player2.y, player2, typeShootingPlayer2);
        }

    }

    checkEnemiesHP() {
        var enemiesArray = new Array();
        enemiesArray = enemies.getChildren();

        for (let i = 0; i < enemiesArray.length; i++) {
            if (enemiesArray[i].hp <= 0 || isNaN(enemiesArray[i].hp)) {
                enemiesArray[i].setPosition(9000, 9000);
                enemiesArray[i].setActive(false);
                enemiesArray[i].setVisible(false);
                enemiesArray[i].hp = -100;
                enemiesArray.splice(i, 1);
                this.addScore();
            }
        }
    }

    addScore() {
        score += 10;
        scoreText.setText("$" + score);
    }

    checkShopHp() {
        if (tienda.hp <= 0) {
            //! DO SOMETHING HERE (PAUSE THIS SCENE AND START A GAME OVER ONE)
            this.scene.pause();

        }
    }

    checkSomethingAlive() {
        for (let i = 0; i < enemiesArray.length; i++) {
            if (enemiesArray[i].hp > 0 && enemiesArray.length > 0) {
                somethingAlive = true;
                break;
            }
        }
        if (enemiesArray.length == 0) {
            somethingAlive = false;
            helpWavesText.setVisible(true);
        } else {
            helpWavesText.setVisible(false);
        }
    }

    wavesManager() {
        var newWaveKey = this.input.keyboard.addKey('Y');

        if (newWaveKey.isDown) {
            if (!somethingAlive) {
                enemies.clear(true, true);
                this.fillEnemiesGroup();
                wave++;
            }
        }

    }

    fillEnemiesGroup() {
        /* 
         * 0 : chipCookie   // comun = 0.4
         * 1 : oreoCookie   // comun = 0.3
         * 2 : fruitCookie  // comun = 0.15
         * 3 : dinoCookie   // comun = 0.1
         * 4 : gingerCookie // comun = 0.05
        */

        let enemyType;
        let numEnemies = (Math.random() * 10 * wave);

        if (numEnemies < 5 * wave) {
            numEnemies = 5 * wave;
        }

        for (let index = 0; index < numEnemies; index++) {
            // ? PROBABILITIES IT CAN BE BETTER FOR SURE
            let randNum = Math.random();
            if (randNum <= 1 / 20) {
                enemyType = 4;
            }
            else if (randNum <= 3 / 20) {
                enemyType = 3;
            }
            else if (randNum <= 6 / 20) {
                enemyType = 2;
            }
            else if (randNum <= 12 / 20) {
                enemyType = 1;
            }
            else if (randNum <= 20 / 20) {
                enemyType = 0;
            }

            // * GENERATE RANDOM POSITION OUTSIDE THE SCREEN
            /*
             * 0 : up
             * 1 : right
             * 2 : down
             * 3 : left
            */
            let enemyDirection = Math.ceil(Math.random() * 3);
            let xPosEnemy;
            let yPosEnemy;

            switch (enemyDirection) {
                case 0:
                    xPosEnemy = (Math.random() * 1200) - 200;
                    yPosEnemy = (Math.random() * 100) - 200;
                    break;
                case 1:
                    xPosEnemy = (Math.random() * 200) + 800;
                    yPosEnemy = (Math.random() * 1000) - 200;
                    break;
                case 2:
                    xPosEnemy = (Math.random() * 1200) - 200;
                    yPosEnemy = (Math.random() * 100) + 700;
                    break;
                case 3:
                    xPosEnemy = (Math.random() * 100) - 200;
                    yPosEnemy = (Math.random() * 1000) - 200;
                    break;
            }
            // From -200 to 1000
            (Math.random() * 1200) - 200;
            // From -200 to 800
            (Math.random() * 1000) - 200;

            switch (enemyType) {
                case 0:
                    enemies.add(new chipCookie(this, xPosEnemy, yPosEnemy));
                    break;
                case 1:
                    enemies.add(new oreoCookie(this, xPosEnemy, yPosEnemy));
                    break;
                case 2:
                    enemies.add(new fruitCookie(this, xPosEnemy, yPosEnemy));
                    break;
                case 3:
                    enemies.add(new dinoCookie(this, xPosEnemy, yPosEnemy));
                    break;
                case 4:
                    enemies.add(new gingerCookie(this, xPosEnemy, yPosEnemy));
                    break;
            }
        }
    }

    enemiesAttack() {
        var enemiesArray = new Array();
        enemiesArray = enemies.getChildren();
        for (let i = 0; i < enemiesArray.length; i++) {
            this.physics.moveToObject(enemiesArray[i], tienda, 30);
            enemiesArray[i].animate();
        }

    }

}   