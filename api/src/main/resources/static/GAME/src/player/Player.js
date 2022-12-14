	/** @type { import ("../../typings/phaser") } */

class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, sprite, id, economy) {
    super(scene, x, y, sprite);
    this.id = id;
    this.hp = 100;
    this.setDepth(2);
    this.economy = economy;
    scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    scene.physics.add.collider(this, enemies, this.enemyHit);
    this.invulnerability = false;
    this.lastDirection = 0;
    this.lastDirectionInput = 11;
    this.sceneOn = scene;

    //VARIABLES BUFFOS
    this.extraDmg = 1;
    this.extraFireRate = 1;
    this.extraBullets = 0;
    this.extraMS = 1;

    //PLAYER FIRE RATE, WEAPON AND MS
    this.weaponID;
    this.changeWeapon(Math.floor(Math.random() * 3 - 0.1));
    this.baseFireRate;
    this.actualFireRate = this.baseFireRate * this.extraFireRate;
    this.baseMS = 160;
    this.actualMS = this.baseMS * this.extraMS;
  }

  playerIntialize() {
    this.body.setGravity(0);
    this.body.collideWorldBounds = true;

    // * CREATING MOVEMENT ANIMATIONS
    // * JUGADOR 1
    this.scene.anims.create({
      key: "left1",
      frames: this.scene.anims.generateFrameNumbers("PLAYER1", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "turn1",
      frames: [{ key: "PLAYER1", frame: 4 }],
      frameRate: 20,
    });

    this.scene.anims.create({
      key: "right1",
      frames: this.scene.anims.generateFrameNumbers("PLAYER1", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    // Añadir animacion de arriba (derecha) y abajo (izquierda)

    // * JUGADOR 2
    this.scene.anims.create({
      key: "left2",
      frames: this.scene.anims.generateFrameNumbers("PLAYER2", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "turn2",
      frames: [{ key: "PLAYER2", frame: 4 }],
      frameRate: 20,
    });

    this.scene.anims.create({
      key: "right2",
      frames: this.scene.anims.generateFrameNumbers("PLAYER2", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    // AÑADIR COLLIDERS CON LOS OBJETOS QUE CONVENGAN
  }

  movement(direction) {
    var those = this;
    var cursors = this.scene.input.keyboard.createCursorKeys();
	var keydown_W = this.scene.input.keyboard.addKey("W");
    var keydown_D = this.scene.input.keyboard.addKey("D");
    var keydown_S = this.scene.input.keyboard.addKey("S");
    var keydown_A = this.scene.input.keyboard.addKey("A");
    
    if(currentPlayer == 1){
		
    
    cursors.left.isDown = false;
    cursors.right.isDown = false;
    cursors.up.isDown = false;
    cursors.down.isDown = false;
    }
    if(currentPlayer ==2){
			keydown_W.isDown = false;
			keydown_D.isDown = false;
			keydown_S.isDown = false;
			keydown_A.isDown = false;
			
			keydown_W.isUp = true;
			keydown_D.isUp = true;
			keydown_S.isUp = true;
			keydown_A.isUp = true;
		}
    
    let dirV = null;
    let dirH = null;
    /*
	let message ={
		p_x:this.x,
		p_y:this.y,
		dir:
	};
      connection.send(JSON.stringify(message));
	*/
	
    if (this.id == "PLAYER1") {



      if (keydown_W.isDown || directionVPlayer1 == 'up') {
        those.body.setVelocityY(-this.actualMS);
        if (this.lastDirection == 1) {
          this.anims.play("right1", true);

        } else {
          this.anims.play("left1", true);
        }
        those.lastDirectionInput = 11;
        soundPlayerSteps.play();
        if(directionVPlayer1 != 'up'){
		  dirV = 'up';
		}
		
		
      } else if (keydown_S.isDown || directionVPlayer1 == 'down') {
        those.body.setVelocityY(this.actualMS);
        if (this.lastDirection == 1) {
          this.anims.play("right1", true);

        } else {
          this.anims.play("left1", true);
        }
        those.lastDirectionInput = 12;
        soundPlayerSteps.play();
        if(directionVPlayer1 != 'down'){
		  dirV = 'down';
		}

      } else {
        those.body.setVelocityY(0);
      }
      
      if (keydown_D.isDown || directionHPlayer1 == 'right') {
        those.body.setVelocityX(this.actualMS);
        those.anims.play("right1", true);
        those.lastDirection = 1;
        those.lastDirectionInput = 14;
        soundPlayerSteps.play();
        if(directionHPlayer1 != 'right'){
		  dirH = 'right';
		}

      } else if (keydown_A.isDown || directionHPlayer1 == 'left') {
        those.body.setVelocityX(-this.actualMS);
        those.anims.play("left1", true);
        those.lastDirection = 2;
        those.lastDirectionInput = 13;
        soundPlayerSteps.play();
        if(directionHPlayer1 != 'left'){
		  dirH = 'left';
		}

      } else {
        those.body.setVelocityX(0);
      }

      if (keydown_D.isUp && keydown_A.isUp && keydown_W.isUp && keydown_S.isUp 
      &&(directionHPlayer1 != 'left'&& directionHPlayer1 !='right'&&directionVPlayer1 != 'down'&&directionVPlayer1 !='up')) {
        those.anims.play("turn1");
        wsMov.sendWS(this.x, this.y, null, null, 1);	
      }
      else
      {
		  wsMov.sendWS(this.x, this.y, dirV, dirH, 1);
	  }

    } else if (this.id == "PLAYER2") {
      if (cursors.left.isDown || directionHPlayer2 == 'left') {
        this.body.setVelocityX(-this.actualMS);
        this.anims.play("left2", true);
        this.lastDirection = 0;
        this.lastDirectionInput = 13;
        soundPlayerSteps.play();
        
        if(directionHPlayer2 != 'left'){
		  dirH = 'left';
		}
		
      } else if (cursors.right.isDown || directionHPlayer2 == 'right') {
        this.body.setVelocityX(this.actualMS);
        this.anims.play("right2", true);
        this.lastDirection = 1;
        this.lastDirectionInput = 14;
        soundPlayerSteps.play();
        
        if(directionHPlayer2 != 'right'){
		  dirH = 'right';
		}

      } else {
        those.body.setVelocityX(0);
      } if (cursors.up.isDown || directionVPlayer2 == 'up') {
        this.body.setVelocityY(-this.actualMS);
        if (this.lastDirection == 1) {
          this.anims.play("right2", true);

        } else {
          this.anims.play("left2", true);
        }
        this.lastDirectionInput = 11;
        soundPlayerSteps.play();
        
        if(directionVPlayer2 != 'up'){
		  dirV = 'up';
		}

      } else if (cursors.down.isDown || directionVPlayer2 == 'down') {
        this.body.setVelocityY(this.actualMS);
        if (this.lastDirection == 1) {
          this.anims.play("right2", true);
        } else {
          this.anims.play("left2", true);
        }
        this.lastDirectionInput = 12;
        soundPlayerSteps.play();
        
        if(directionVPlayer2 != 'down'){
		  dirV = 'down';
		}
        
      } else {
        those.body.setVelocityY(0);
      }

      if (cursors.down.isUp && cursors.up.isUp && cursors.right.isUp && cursors.left.isUp 
      &&(directionHPlayer2 != 'left'&& directionHPlayer2 !='right'&&directionVPlayer2 != 'down'&&directionVPlayer2 !='up')) {
          those.anims.play("turn2");
          wsMov.sendWS(this.x, this.y, null,null, 2);	
      }
      else
      {
		  wsMov.sendWS(this.x, this.y, dirV, dirH, 2);
	  }

    }
  }

  enemyHit(player, enemy) {
    enemy.body.immovable = true;
    enemy.body.setVelocity(0);

    if (player.invulnerability == false) {
      player.hp = player.hp - enemy.dmg;
      player.setInvulnerability(player);
      soundPlayerDamage.play();
      player.setTint(0xff0000);
      player.setScale(0.95);
      setInterval(normal, 300);
      function normal() {
        player.clearTint();
        player.setScale(1);
    }
    }

    enemy.body.immovable = false;

  }

  setInvulnerability(aux) {

    aux.invulnerability = true;
    aux.scene.time.delayedCall(1000, function () {
      aux.invulnerability = false;
    });

  }

  // Establecer buffos al jugador, mejora de estadisticas
  setBuffs(amount, id) {
    switch (id) {
      case 0:
        this.extraDmg += amount;
        break;
      case 1:
        this.extraFireRate -= amount;
        this.actualFireRate = this.baseFireRate * this.extraFireRate;
        break;
      case 2:
        this.extraBullets += amount;
        break;
      case 3:
        this.extraMS += amount;
        this.actualMS = this.baseMS * this.extraMS;
        break;
    }
  }

  changeWeapon(id) {
    /*
    * TYPE OF GUN
    * 0 - SHOTGUN         - Fire Rate: 800
    * 1 - REVOLVER        - Fire Rate: 500
    * 2 - SUBMACHINE GUN  - Fire Rate: 200
    */
    switch (id) {
      case 0:
        this.weaponID = 0;
        this.baseFireRate = 1000;
        this.putWeaponIcon("ICONOESCOPETA");
        break;
      case 1:
        this.weaponID = 1;
        this.baseFireRate = 500;
        this.putWeaponIcon("ICONOREVOLVER");
        break;
      case 2:
        this.weaponID = 2;
        this.baseFireRate = 200;
        this.putWeaponIcon("ICONOSUBFUSIL");
        break;
    }

    this.actualFireRate = this.baseFireRate * this.extraFireRate;

  }


  //Funcion auxiliar
  putWeaponIcon(image)
  {
    if(this.id == 'PLAYER1')
    {
      let icon = this.sceneOn.add.image(32, 568, image).setDepth(1).setScale(1.2);
      icon.setScale(2);
    }
    else
    {
      let icon = this.sceneOn.add.image(768, 568, image).setDepth(1).setScale(1.2);
      icon.flipX = true;
      icon.setScale(2);
    }
  }
}
