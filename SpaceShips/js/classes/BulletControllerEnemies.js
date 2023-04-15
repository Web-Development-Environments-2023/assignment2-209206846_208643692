class BulletControllerEnemies{

    bullets = [];
    constructor(canvas){
        this.canvas = canvas
    }

    shoot(bulletX, bulletY, speed, damage, width, height, color){
        if(this.shootNextBullet){
            this.bullets.push(new Bullet(bulletX, bulletY, speed, damage, width, height, color));
        }

    }
    draw(){
        // console.log(this.bullets.length) number of bullet on the screen
        this.bullets.forEach((bullet)=> {
            if(this.isBulletOffScreen(bullet)){ // we want to remove all the bullets that are of the screen
                const index = this.bullets.indexOf(bullet)
                this.bullets.splice(index,1)  
            }
            bullet.drawEnemy()})
    }

    shootNextBullet(){
        // last bullet shot reached bottom quarter
        if (this.bullets.length == 0){
            return true;
        }
        return this.bullets[this.bullets.length-1].height <= c.height * 0.25
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

