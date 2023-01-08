/** @type { import ("../../typings/phaser") } */

class Lobby extends Phaser.Scene 
{
    constructor()
    {
        super('lobby'); 
    }

    create()
    {
        this.add.image(400, 300, "playersOnline").setScale(0.64);
        this.add.image(400, 300, "fondoPlayerEstatus");

        var next = this.add.text(400, 400, 'CONTINUE', {
            fontSize: '26px', fill: '#e78999', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();

        this.add.text(200, 200, 'Player 1:', {
            fontSize: '26px', fill: '#AE00FF', fontFamily: 'Pixel'
        }).setOrigin(0.5);
        statusPlayer1 = this.add.text(200, 250, 'Disconnected', {
            fontSize: '20px', fill: '#ffffff', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();

        this.add.text(600, 200, 'Player 2:', {
            fontSize: '26px', fill: '#00D16C', fontFamily: 'Pixel'
        }).setOrigin(0.5);
        statusPlayer2 = this.add.text(600, 250, 'Disconnected', {
            fontSize: '20px', fill: '#ffffff', fontFamily: 'Pixel'
        }).setOrigin(0.5).setInteractive();

        next.on('pointerdown', () => {
            //this.scene.start('mainScene');
            if(p1Connected && p2Connected)
            {
				wsLobby.sendWS("play");
			}
        });
        next.on('pointerover', () => {
            next.setScale(1.1);
        });
        
        next.on('pointerout', () => {
            next.setScale(1);
        });

        //PARA LIMPIAR EL TINTE ROJO USA .clearTint();
        lobbyThis = this;
    }
    update()
    {
		if(p1Connected == true)
		{
			this.setPlayer1State("Connected", 0x36D13B);
		} else { this.setPlayer1State("Disconnected", 0xffffff); }
		
		if(p2Connected == true)
		{
			this.setPlayer2State("Connected", 0x36D13B);
		} else { this.setPlayer2State("Disconnected", 0xffffff); }
	}
        setPlayer1State(data, color)
        {
	    	statusPlayer1.setText(data);
	    	statusPlayer1.setTint(color);
        	
        }
        setPlayer2State(data, color)
        {
	    	statusPlayer2.setText(data);
	    	statusPlayer2.setTint(color);
		}
}