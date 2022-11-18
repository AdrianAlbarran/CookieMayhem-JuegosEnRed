/** @type { import ("../../typings/phaser") } */

class Player
{
    constructor(id, economy)
    {
        this.id = id;
        this.economy = economy;
        this.player;
    }

    playerIntialize (positionX, positionY, spriteID, that)
    {
        
        this.player = that.physics.add.sprite(positionX, positionY, spriteID, this);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravity(0);
        this.player.onWorldBounds = true;

        
        //CREATING MOVEMENT ANIMATIONS
        that.anims.create(
            { 
                key: 'left',
                frames: that.anims.generateFrameNumbers('DUDE', { start: 0, end: 3}),
                frameRate: 10,
                repeat: -1
            }
        );

        that.anims.create(
            {
                key: 'turn',
                frames: [ { key: 'DUDE', frame: 4 }],
                frameRate: 20
            }
        );

        that.anims.create(
            {
                key: 'right',
                frames: that.anims.generateFrameNumbers('DUDE', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            }
        );

        // AÑADIR COLLIDERS CON LOS OBJETOS QUE CONVENGAN
    }

    movement(that)
    {
        var those = this;
        var cursors = that.input.keyboard.createCursorKeys();
        if(this.id == 'PLAYER1')
        {

            if (cursors.left.isDown && cursors.right.isUp)
            {
                this.player.setVelocityX(-160);
                this.player.anims.play('left', true);
            }
            else if (cursors.right.isDown && cursors.left.isUp)
            {
                this.player.setVelocityX(160);
                this.player.anims.play('right', true);
            }
            
            else if (cursors.up.isDown && cursors.down.isUp)
            {
                this.player.setVelocityY(-160);
            } 
            else if (cursors.down.isDown && cursors.up.isUp)
            {
                this.player.setVelocityY(160);
            }
            else
            {
                this.player.setVelocityX(0);
                this.player.setVelocityY(0);
                this.player.anims.play('turn');
            } 
        }

        else if(this.id == 'PLAYER2')
        {
            var keydown_W = that.input.keyboard.addKey('W');
            var keydown_D = that.input.keyboard.addKey('D');
            var keydown_S = that.input.keyboard.addKey('S');
            var keydown_A = that.input.keyboard.addKey('A');

            if (keydown_W.isDown && keydown_S.isUp)
            {
                those.player.setVelocityY(-150);
            } 
            else if (keydown_S.isDown && keydown_W.isUp)
            {
                those.player.setVelocityY(150);
            }

            else if (keydown_D.isDown && keydown_A.isUp)
            {
                those.player.setVelocityX(150);
                those.player.anims.play('right', true);  
            }
            else if (keydown_A.isDown && keydown_D.isUp)
            {
                those.player.setVelocityX(-150);
                those.player.anims.play('left', true);
            } 
            else 
            {
                those.player.setVelocity(0, 0);
                those.player.anims.play('turn');
            }
        }
    }

}
    