class EnemyElienShip{

	constructor(points){
        this.image = new Image();
        this.image.src = "./images/ElienShip.png"
        this.image.width = 80
        this.image.height = 80
		this.points = points

		this.position = {
			x: 0,
			y: 0
		}

		this.width = 80,
		this.height = 80,
		this.sides = {
			bottom: this.position.y + this.height
		}

	}

	draw(){
        c.drawImage(this.image,this.position.x,this.position.y,this.image.width,this.image.height)
	}
}

