class PlayerSpaceShip{

	constructor(bulletController){
        this.image = new Image();
        this.image.src = "./images/mainPlayer.png"
        this.image.width = 100
        this.image.height = 100

        // this.imageShot = new Image();
        // this.imageShot.src = "./images/goodPlayerShot.png"
        // this.imageShot.width = 100
        // this.imageShot.height = 100

        this.bulletController = bulletController

		this.position = {
			x: 350,
			y: 650
		}

		this.width = 100,
		this.height = 100,
		this.sides = {
			bottom: this.position.y + this.height
		}

	}

	draw(){
		// c.fillStyle = 'red'
		// c.fillRect(this.position.x,this.position.y,this.width,this.height)
        c.drawImage(this.image,this.position.x,this.position.y,this.image.width,this.image.height)

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
        const speed = 5;
        const delay = 1;
        const damage = 1;
        const bulletX = this.position.x + this.width/2;
        const bulletY = this.position.y ;

        this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
    }
    

}

