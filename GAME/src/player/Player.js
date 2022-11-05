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
    }
}
    