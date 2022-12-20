/** @type { import ("../typings/phaser") } */

class Bullet extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'cafe');
        var _hitShop = scene.physics.add.collider(this, tienda, this.hitShop);
        var _hitEnemy = scene.physics.add.overlap(this, enemies, this.hitEnemy);
        var lastEnemyHitted = undefined;
        var damage = 10;
        var maxTraverse = 1;

    }

    fireConfig(x, y, player, type) {
        this.body.reset(x, y);

        var direction = player.lastDirectionInput;
        if (direction == 10)
            direction = 12;
        /*
        * 11: UP
        * 12: DOWN
        * 13: LEFT
        * 14: RIGHT 
 
        * TYPE OF GUN
        * 0 - SHOTGUN
        * 1 - REVOLVER
        * 2 - SUBMACHINE GUN
        */
        switch (type) {
            case 0:
                this.damage = 20 * player.extraDmg;
                this.maxTraverse = 0;
                this.fire(direction, 700, 300);
                break;
            case 1:
                //CONFIG BULLETS FOR REVOLVER
                this.damage = 80 * player.extraDmg;
                this.maxTraverse = 2;
                this.fire(direction, 1800, 50);
                break;
            case 2:
                //CONFIG BULLETS FOR SUBMACHINE GUN
                this.damage = 20 * player.extraDmg;
                this.maxTraverse = 0;
                this.fire(direction, 700, 133);
                break;
        }

    }


    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        if (this.y <= -32 || this.y >= 632 || this.x >= 832 || this.x <= -32) {
            this.setVelocity(0, 0);
            this.setActive(false);
            this.setVisible(false);
        }
    }

    fire(direction, speed, maxDispersion) {
        var randomDispersion = (Math.random() - 0.5) * maxDispersion;
        var rotation = Math.atan(randomDispersion / speed) * 180 / Math.PI

        switch (direction) {
            case 11:
                this.setVelocity(randomDispersion, -speed);
                this.angle = 0 + rotation;
                break;
            case 12:
                this.setVelocity(randomDispersion, speed);
                this.angle = 180 - rotation;
                break;
            case 13:
                this.setVelocity(-speed, randomDispersion);
                this.angle = 270 - rotation;
                break;
            case 14:
                this.setVelocity(speed, randomDispersion);
                this.angle = 90 + rotation;
                break;
        }
        this.setActive(true);
        this.setVisible(true);
    }

    hitShop(bullet, tienda) {
        //Pre update se encarga de que la bala desaparezca
        bullet.setPosition(999, 999);

    }
    
    hitEnemy(bullet, enemy) {
        console.log("Last enemy hitted:" + bullet.lastEnemyHitted);
        if (bullet.lastEnemyHitted != enemy) {
            //sonido de golpe
            soundCookieDamaged.play();
            enemy.hp = enemy.hp - bullet.damage;
            enemy.setScale(enemy.getScale * 0.85); //escala modificada cuando son golpeados
            enemy.animateHit();
            enemy.setTint(0xff0000);
            setInterval(normal, 150); //escala normal despues de ser golpeados
            //Pre update se encarga de que la bala desaparezca
            bullet.maxTraverse = bullet.maxTraverse - 1;
            console.log(bullet.maxTraverse);
            if (bullet.maxTraverse <= 0) {
                bullet.setPosition(999, 999);
            }
            function normal() {
                enemy.setScale(enemy.getScale);
                enemy.clearTint();
            }
        }
        bullet.lastEnemyHitted = enemy;
    }
}

class Bullets extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);
        this.createMultiple({
            frameQuantity: 40,
            key: 'bullet',
            active: false,
            visible: false,
            classType: Bullet
        })
    }

    fireBullet(x, y, player, type) {

        if(type != 0)
        {
            for (let aux = 0; aux <= player.extraBullets; aux++) {
                if (player.hp > 0) {
                    let bullet = this.getFirstDead(false);
                    if (bullet) {
                        soundShoot.play();
                        bullet.fireConfig(x, y, player, type);
                        bullet.lastEnemyHitted = undefined;
                    }
                }
            }
        } else {
            // ? Se podria cambiar el for de arriba para no tener que duplicarlo, 
            // ? no se que manera seria mas eficiente
            for (let aux = 0; aux <= 8 + player.extraBullets * 3; aux++) {
                if (player.hp > 0) {
                    let bullet = this.getFirstDead(false);
                    if (bullet) {
                        soundShoot.play();
                        bullet.fireConfig(x, y, player, type);
                        bullet.lastEnemyHitted = undefined;
                    }
                }
            }
        }


    }
}

