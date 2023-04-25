class EnemyElienShip{

	constructor(points){
        this.image = new Image();
		if (points == 5){
			this.image.src = "./images/ElienShip.png"
			this.image.width = 70
			this.image.height = 70
			this.width = 70
			this.height = 70
		}

		if (points == 10){
			// this.image.src = "./images/Alien1.png"
			this.image.src = "./images/ElienShip.png"
			this.image.width = 70
			this.image.height = 70
			this.width = 70
			this.height = 70
		}

		if (points == 15){
			// this.image.src = "./images/Alien2.png"
			this.image.src = "./images/ElienShip.png"
			this.image.width = 70
			this.image.height = 70
			this.width = 70
			this.height = 70
		}

		if (points == 20){
			// this.image.src = "./images/Alien3.png"
			this.image.src = "./images/ElienShip.png"
			this.image.width = 70
			this.image.height = 70
			this.width = 70
			this.height = 70
		}

		this.points = points

		this.position = {
			x: 0,
			y: 0
		}

		this.sides = {
			bottom: this.position.y + this.height
		}

	}

	draw(){
        c.drawImage(this.image,this.position.x,this.position.y,this.image.width,this.image.height)
	}
}

