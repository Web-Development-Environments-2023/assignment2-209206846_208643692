class EnemyElienShip{

	constructor(points){
        this.image = new Image();
		if (points == 5){
			this.image.src = "./images/ElienShip.png"
			this.image.width = window.innerWidth * 0.056
			this.image.height = window.innerHeight * 0.112
			this.width = window.innerWidth * 0.056
			this.height = window.innerHeight * 0.112
		}

		if (points == 10){
			// this.image.src = "./images/Alien1.png"
			this.image.src = "./images/ElienShip.png"
			this.image.width = window.innerWidth * 0.056
			this.image.height = window.innerHeight * 0.112
			this.width = window.innerWidth * 0.056
			this.height = window.innerHeight * 0.112
		}

		if (points == 15){
			// this.image.src = "./images/Alien2.png"
			this.image.src = "./images/ElienShip.png"
			this.image.width = window.innerWidth * 0.056
			this.image.height = window.innerHeight * 0.112
			this.width = window.innerWidth * 0.056
			this.height = window.innerHeight * 0.112
		}

		if (points == 20){
			// this.image.src = "./images/Alien3.png"
			this.image.src = "./images/ElienShip.png"
			this.image.width = window.innerWidth * 0.056
			this.image.height = window.innerHeight * 0.112
			this.width = window.innerWidth * 0.056
			this.height = window.innerHeight * 0.112
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

