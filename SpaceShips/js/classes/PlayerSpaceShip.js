class PlayerSpaceShip{

	constructor(bulletController, badBulletController){
        this.image = new Image();
        this.image.src = "./images/mainPlayer.png"
        this.image.width = window.innerWidth * 0.08
        this.image.height = window.innerHeight * 0.16

        // this.imageShot = new Image();
        // this.imageShot.src = "./images/goodPlayerShot.png"
        // this.imageShot.width = 100
        // this.imageShot.height = 100

        this.bulletController = bulletController
        this.badBulletController = badBulletController

		this.position = {
			x: Math.random() * window.innerWidth,
			y: window.innerHeight*0.7
		}

		this.width = window.innerWidth * 0.08,
		this.height = window.innerHeight * 0.16,
		this.sides = {
			bottom: this.position.y + this.height
		}

        this.lives = 3;

	}

	draw(){
		// c.fillStyle = 'red'
		// c.fillRect(this.position.x,this.position.y,this.width,this.height)
        this.checkHits()
        c.drawImage(this.image,this.position.x,this.position.y,this.image.width*0.7,this.image.height*0.7)
	}

	update() {
		// if(this.sides.bottom < canvas. height){
		// 	// this.position.y++
		// 	this.sides.bottom = this.position.y + this.height // position bottom will be at list the player height so we see all the player.
		// }
        // else{
        //     this.sides.bottom = canvas. height - this.height
        // }
	}

    shoot(){
        const speed = 1;
        const delay = 100;
        const damage = 1;
        const bulletX = this.position.x + this.width/2;
        const bulletY = this.position.y ;
        const w = window.innerHeight * 0.008;
        const h = window.innerHeight * 0.016;
        const color = "red"

        this.bulletController.shoot(bulletX, bulletY, speed, damage, w, h, color, delay);
    }

    checkHits(){
        // add sound
        if (this.badBulletController.collideWith(this)){
            strikeSound.play()
            console.log("enemy hit")
            this.lives--
            this.position = {
                x: Math.random() * (canvas.width),
                y: canvas.height * 0.8
            }
            // add sound
        }
    }
    

}

