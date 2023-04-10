class EnemyElienShip{

	constructor(){
        this.image = new Image();
        this.image.src = "./images/ElienShip.png"
        this.image.width = 100
        this.image.height = 100

		this.position = {
			x: 0,
			y: 0
		}

		this.width = 100,
		this.height = 100,
		this.sides = {
			bottom: this.position.y + this.height
		}

	}

	draw(){
        c.drawImage(this.image,this.position.x,this.position.y,this.image.width,this.image.height)
	}
}

