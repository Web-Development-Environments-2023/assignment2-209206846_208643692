class BulletControllerGoodPlayer{

	// constructor(x,y){
    //     this.imageShot = new Image();
    //     this.imageShot.src = "./images/goodPlayerShot.png"
    //     this.imageShot.width = 100
    //     this.imageShot.height = 100

    bullets = [];
    timerTillNextBullet = 0
    constructor(canvas){
        this.canvas = canvas
    }

    shoot(bulletX, bulletY, speed, damage, width, height, color, delay){
        if(this.timerTillNextBullet <= 0){
            this.bullets.push(new Bullet(bulletX, bulletY, speed, damage, width, height, color));
            this.timerTillNextBullet = delay // the time between bullets
        }

        this.timerTillNextBullet-- // this is will decrease when it the function called in loops
    }

    draw(){
        // console.log(this.bullets.length) number of bullet on the screen
        this.bullets.forEach((bullet)=> {
            if(this.isBulletOffScreen(bullet)){ // we want to remove all the bullets that are of the screen
                const index = this.bullets.indexOf(bullet)
                this.bullets.splice(index,1)  
            }
            bullet.draw()})
    }

    isBulletOffScreen(bullet){
        return bullet.y <= -bullet.height
    }

    collideWith(player){
        return this.bullets.some( bullet =>{
            if(bullet.collideWith(player)){
                this.bullets.splice(this.bullets.indexOf(this.bullets),1)
                return true
            }
            return false
        })
    }

}

