/** @type { import ("../../typings/phaser") } */

class Player
{
    constructor(id)
    {
        this.id = id;
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
            if (cursors.left.isDown)
            {
                this.player.setVelocityX(-160);
                this.player.anims.play('left', true);
            }
            else if (cursors.right.isDown)
            {
                this.player.setVelocityX(160);

                this.player.anims.play('right', true);
            }
            else if (cursors.up.isDown)
            {
                this.player.setVelocityY(-160);
            } 
            else if (cursors.down.isDown)
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

        if(this.id == 'PLAYER2')
        {
            var keydown_W = that.input.keyboard.addKey('W');
            var keydown_D = that.input.keyboard.addKey('D');
            var keydown_S = that.input.keyboard.addKey('S');
            var keydown_A = that.input.keyboard.addKey('A');
            /*
            keydown_W.on('down', function (event) 
            {  
                
            });

            keydown_D.on('down', function (event) 
            {  
                those.player.setVelocityX(150);
            });

            keydown_S.on('down', function (event) 
            {  
                those.player.setVelocityY(150);
            });

            keydown_A.on('down', function (event) 
            {  
                those.player.setVelocityX(-150);
            });
            ! BUG. DIAGONALES DAN PROBLEMAS 
            */

            if(keydown_W.isDown)
            {
                those.player.setVelocityY(-150);
            } 
            else if (keydown_D.isDown)
            {
                those.player.setVelocityX(150);
            }
            else if (keydown_S.isDown)
            {
                those.player.setVelocityY(150);
            }
            else if (keydown_A.isDown)
            {
                those.player.setVelocityX(-150);
            } else {
                those.player.setVelocity(0, 0);
            }
            /*
            that.input.keyboard.on('keydown_W', 
            function (event) 
            {
                this.player.setVelocityX(160);
            }, that);
            that.input.keyboard.on("keydown_D", 
            function (event) 
            {
                this.player.setVelocityX(160);
            }, that);
            that.input.keyboard.on("keydown_S", 
            function () 
            {
                this.player.setVelocityY(160);
            }, that);
            that.input.keyboard.on("keydown_A", 
            function () 
            {
                this.player.setVelocityX(-160);
            }, that);
            */
        }
    }

}
    