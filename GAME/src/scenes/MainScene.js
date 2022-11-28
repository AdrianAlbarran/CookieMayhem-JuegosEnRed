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

        //Interface health player 1
        this.healthPlayer1Low = this.add.image(30, 30, "HP");
        this.healthPlayer1Medium = this.add.image(60, 30, "HP");
        this.healthPlayer1Full = this.add.image(90, 30, "HP");
        this.healthPlayer1LowHalf = this.add.image(30, 30, "HPH");
        this.healthPlayer1MediumHalf = this.add.image(60, 30, "HPH");
        this.healthPlayer1FullHalf = this.add.image(90, 30, "HPH");

        //Interface health player 2
        this.healthPlayer2Low = this.add.image(30, 60, "HP1");
        this.healthPlayer2Medium = this.add.image(60, 60, "HP1");
        this.healthPlayer2Full = this.add.image(90, 60, "HP1");
        this.healthPlayer2LowHalf = this.add.image(30, 60, "HPH1");
        this.healthPlayer2MediumHalf = this.add.image(60, 60, "HPH1");
        this.healthPlayer2FullHalf = this.add.image(90, 60, "HPH1"); 

        economy.economyIntialize(this);
        tienda.openShop();

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

        openShopText = this.add.text(400 - 185, 550, '        PRESS P \nTO OPEN THE PLAYERS SHOP',
            {
                fontSize: '16px',
                fill: '#000',
                fontFamily: 'Pixel'
            })



        this.input.keyboard.on('keydown-P', function(event){
            tienda.interfaceManager();
        })



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

        soundPlayerDamage = this.sound.add('PLAYERDAMAGE',
            {
                mute: false,
                volume: 0.15,
            });

        soundPlayerSteps = this.sound.add('PLAYERSTEPS',
            {
                mute: false,
                volume: 0.15,
            });

        soundMoney = this.sound.add('MONEYSOUND',
            {
                mute: false,
                volume: 0.075,
            });

        // * MUSIC BACKGROUND
        bcMusicGame = this.sound.add("GAMEMUSIC",
            {
                loop: true,
                mute: false,
                volume: 0.10
            });
        bcMusicGame.play();

        
        endGameMusic = this.sound.add("GAMEOVERMUSIC",
        {
            loop: true,
            mute: false,
            volume: 0.10
        });
        


    }

    update() {
        player1.movement(this);
        player2.movement(this);

        //esto será provisional, lo he añadido para ver si la función tiraba
        //if (this.input.keyboard.addKey('P').isDown) {
         //   tienda.openShop(player1, player2);
        //}

        enemiesArray = enemies.getChildren();
        this.eventHandler();
        this.checkEnemiesHP();

        this.checkSomethingAlive()
        this.wavesManager();
        this.enemiesAttack();
        this.checkShopHp();
        this.playersAlive();
        this.playersHealth();
        console.log(player1);
        console.log(player2);
    }

    initializeBullets() {
        // This should be a function 
        bulletsPlayer1 = new Bullets(this);
        bulletsPlayer2 = new Bullets(this);
    }

    eventHandler() {

        /*
        * TYPE OF GUN
        * 0 - SHOTGUN         - Fire Rate: 800
        * 1 - REVOLVER        - Fire Rate: 500
        * 2 - SUBMACHINE GUN  - Fire Rate: 200
        */
        player1.weaponType = 1;
        player1.baseFireRate = 500;
        player1.actualFireRate = player1.baseFireRate * player1.extraFireRate;

        player2.weaponType = 2;
        player2.baseFireRate = 200;
        player2.actualFireRate = player2.baseFireRate * player2.extraFireRate;

        var keyShoot1 = this.input.keyboard.addKey('ENTER');
        var stillDown1 = this.input.keyboard.checkDown(keyShoot1, player1.actualFireRate);

        if (stillDown1) {
            soundShoot.play();
            bulletsPlayer1.fireBullet(player1.x, player1.y, player1, player1.weaponType);
        }

        var keyShoot2 = this.input.keyboard.addKey('SPACE');
        var stillDown2 = this.input.keyboard.checkDown(keyShoot2, player2.actualFireRate);

        if (stillDown2) {
            soundShoot.play();
            bulletsPlayer2.fireBullet(player2.x, player2.y, player2, player2.weaponType);
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
                this.addScore(enemiesArray[i].value);
                enemiesArray.splice(i, 1);
                soundMoney.play();
            }
        }
    }

    addScore(enemyValue) {
        score += enemyValue;
        scoreText.setText("$" + score);
    }

    playersAlive() {
        if(player1.hp <= 0){
            player1.setPosition(9000,9000);
            player1.setActive(false);
            player1.setVisible(false);
        }
        if(player2.hp <= 0){
            player2.setPosition(9000,9000);
            player2.setActive(false);
            player2.setVisible(false);
        }

        if(player1.hp <= 0 && player2.hp <= 0){
            this.scene.pause();
            bcMusicGame.pause();
            endGameMusic.play();
            this.scene.start("gameOver");
        }
    }

    playersHealth() {
        //PLAYER 1
        if(player1.hp <= 85 && player1.hp > 70) {
            this.healthPlayer1Full.setVisible(false);
        } else if(player1.hp <= 70 && player1.hp > 55) {
            this.healthPlayer1FullHalf.setVisible(false);
        } else if(player1.hp <= 60 && player1.hp > 45) {
            this.healthPlayer1Medium.setVisible(false);
        } else if(player1.hp <= 45 && player1.hp > 30) {
            this.healthPlayer1MediumHalf.setVisible(false);
        } else if(player1.hp <= 30 && player1.hp > 15) {
            this.healthPlayer1Low.setVisible(false);
        } else if(player1.hp <= 15) {
            this.healthPlayer1LowHalf.setVisible(false);
        }

        //PLAYER 2
        if(player2.hp <= 85 && player2.hp > 70) {
            this.healthPlayer2Full.setVisible(false);
        } else if(player2.hp <= 70 && player2.hp > 55) {
            this.healthPlayer2FullHalf.setVisible(false);
        } else if(player2.hp <= 60 && player2.hp > 45) {
            this.healthPlayer2Medium.setVisible(false);
        } else if(player2.hp <= 45 && player2.hp > 30) {
            this.healthPlayer2MediumHalf.setVisible(false);
        } else if(player2.hp <= 30 && player2.hp > 15) {
            this.healthPlayer2Low.setVisible(false);
        } else if(player2.hp <= 15) {
            this.healthPlayer2LowHalf.setVisible(false);
        }
    }

    checkShopHp() {
        if (tienda.hp <= 0) {
            //! DO SOMETHING HERE (PAUSE THIS SCENE AND START A GAME OVER ONE)
            this.scene.pause();
            bcMusicGame.pause();
            endGameMusic.play();
            this.scene.start("gameOver");
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
            openShopText.setVisible(true);
        } else {
            helpWavesText.setVisible(false);
            openShopText.setVisible(false);
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