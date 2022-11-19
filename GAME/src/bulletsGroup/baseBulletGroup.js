/** @type { import ("../typings/phaser") } */

class Bullet extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'cafe');
        var _hitShop = scene.physics.add.collider(this, tienda, this.hitShop);
    }

    fireConfig(x, y, player, type) {
        this.body.reset(x, y);

        var direction = player.body.facing;
        if(direction==10)
            direction=12;
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
        // ! BUG: Si no te has movido y disparas, la velocidad del proyectil es 0, 300 por alguna razon de dios
        switch (type) {
            case 0:
                // !FIX: this.fireShotgun(direction, 700, 50, shotgunDisplacement);
                break;
            case 1:
                this.fireRevolver(direction, 1800, 50);
                break;
            case 2:
                //CONFIG BULLETS FOR SUBMACHINE GUN
                this.fireSubMachine(direction, 700, 133);
                break;
        }

    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        if (this.y <= -32 || this.y >= 632 || this.x >= 832 || this.x <= -32) {
            this.setActive(false);
            this.setVisible(false);
        }
    }

    fireSubMachine(direction, speed, maxDispersion) {
        var randomDispersion = (Math.random() - 0.5) * maxDispersion;
        var rotation = Math.atan(randomDispersion / speed) * 180 / Math.PI

        switch (direction) {
            case 11:
                this.setVelocity(randomDispersion, -speed);
                this.angle = 0 + rotation;
                break;
            case 12:
                this.setVelocity(randomDispersion, speed);
                this.angle = 0 - rotation;
                break;
            case 13:
                this.setVelocity(-speed, randomDispersion);
                this.angle = 90 - rotation;
                break;
            case 14:
                this.setVelocity(speed, randomDispersion);
                this.angle = 90 + rotation;
                break;
        }
        this.setActive(true);
        this.setVisible(true);
    }

    fireRevolver(direction, speed, maxDispersion) {
        var randomDispersion = (Math.random() - 0.5) * maxDispersion;
        var rotation = Math.atan(randomDispersion / speed) * 180 / Math.PI

        switch (direction) {
            case 11:
                this.setVelocity(randomDispersion, -speed);
                this.angle = 0 + rotation;
                break;
            case 12:
                this.setVelocity(randomDispersion, speed);
                this.angle = 0 - rotation;
                break;
            case 13:
                this.setVelocity(-speed, randomDispersion);
                this.angle = 90 - rotation;
                break;
            case 14:
                this.setVelocity(speed, randomDispersion);
                this.angle = 90 + rotation;
                break;
        }
        this.setActive(true);
        this.setVisible(true);

    }

    fireShotgun(direction, speed, maxDispersion) {

        // ! ARREGLAR ESTO DE ALGUNA MANERA

        var randomDispersion = (Math.random() - 0.5) * maxDispersion;
        var rotation = Math.atan(randomDispersion / speed) * 180 / Math.PI

        var aux = shotgunDisplacement * speed;

  
        switch (direction) {
            case 11:
                this.setVelocity(randomDispersion + aux, -speed);
                this.angle = 0 + rotation;
                break;
            case 12:
                this.setVelocity(randomDispersion + aux, speed);
                this.angle = 0 - rotation;
                break;
            case 13:
                this.setVelocity(-speed, randomDispersion + aux);
                this.angle = 90 - rotation;
                break;
            case 14:
                this.setVelocity(speed, randomDispersion + aux);
                this.angle = 90 + rotation;
                break;
        }
        this.setActive(true);
        this.setVisible(true);
    }

    hitShop(bullet, tienda) {
        bullet.setVisible(false);
        bullet.setActive(false);
    }

}
class Bullets extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);
        this.createMultiple({
            frameQuantity: 20,
            key: 'bullet',
            active: false,
            visible: false,
            classType: Bullet
        })
    }

    fireBullet(x, y, player, type) {

        let bullet = this.getFirstDead(false);

        if (bullet) {

            bullet.fireConfig(x, y, player, type);

        }
    }
}

