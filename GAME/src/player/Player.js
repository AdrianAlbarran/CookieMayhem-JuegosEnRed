/** @type { import ("../../typings/phaser") } */

class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, sprite, id, economy) {
    super(scene, x, y, sprite);
    this.id = id;
    this.hp = 100;
    this.economy = economy;
    scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    scene.physics.add.collider(this, enemies, this.enemyHit);
    this.invulnerability = false;
  }

  playerIntialize(scene) {
    this.body.setGravity(0);
    this.body.collideWorldBounds = true;

    //CREATING MOVEMENT ANIMATIONS
    scene.anims.create({
      key: "left",
      frames: scene.anims.generateFrameNumbers("DUDE", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    scene.anims.create({
      key: "turn",
      frames: [{ key: "DUDE", frame: 4 }],
      frameRate: 20,
    });

    scene.anims.create({
      key: "right",
      frames: scene.anims.generateFrameNumbers("DUDE", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    // AÑADIR COLLIDERS CON LOS OBJETOS QUE CONVENGAN
  }

  movement(scene) {
    var those = this;
    var cursors = scene.input.keyboard.createCursorKeys();

    if (this.id == "PLAYER1") {
      if (cursors.left.isDown && cursors.right.isUp) {
        this.body.setVelocityX(-160);
        this.anims.play("left", true);
      } else if (cursors.right.isDown && cursors.left.isUp) {
        this.body.setVelocityX(160);
        this.anims.play("right", true);
      } else if (cursors.up.isDown && cursors.down.isUp) {
        this.body.setVelocityY(-160);
      } else if (cursors.down.isDown && cursors.up.isUp) {
        this.body.setVelocityY(160);
      } else {
        this.body.setVelocityX(0);
        this.body.setVelocityY(0);
        this.anims.play("turn");
      }
    } else if (this.id == "PLAYER2") {
      var keydown_W = scene.input.keyboard.addKey("W");
      var keydown_D = scene.input.keyboard.addKey("D");
      var keydown_S = scene.input.keyboard.addKey("S");
      var keydown_A = scene.input.keyboard.addKey("A");

      if (keydown_W.isDown && keydown_S.isUp) {
        those.body.setVelocityY(-150);
      } else if (keydown_S.isDown && keydown_W.isUp) {
        those.body.setVelocityY(150);
      } else if (keydown_D.isDown && keydown_A.isUp) {
        those.body.setVelocityX(150);
        those.anims.play("right", true);
      } else if (keydown_A.isDown && keydown_D.isUp) {
        those.body.setVelocityX(-150);
        those.anims.play("left", true);
      } else {
        those.body.setVelocity(0, 0);
        those.anims.play("turn");
      }
    }
  }

  enemyHit(player, enemy) {
    enemy.body.immovable = true;
    enemy.body.setVelocity(0);

    if (player.invulnerability == false) {
      player.hp = player.hp - enemy.dmg;
      player.setInvulnerability(player);
    }
    console.log(player.hp);
    enemy.body.immovable = false;
  }

  setInvulnerability(aux) {
    
      aux.invulnerability = true;
      aux.scene.time.delayedCall(1000, function()
      {
        aux.invulnerability = false;
      });
      
  }
}
