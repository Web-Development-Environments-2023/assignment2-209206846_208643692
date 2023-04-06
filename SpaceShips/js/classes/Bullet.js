class Bullet{
    constructor(x,y,speed,damage){
        this.x = x;
        this.y = y;
        this.speed=speed;
        this.damage = damage;
        this.width = 5;
        this.height = 15;
        this.color = "red";

    }

    draw(){
        c.fillStyle = this.color
        this.y -= this.speed;
        c.fillRect(this.x, this.y, this.width, this.height)
    }

    collideWith(player){
        if (
            this.x < player.position.x + player.width &&
            this.x + this.width > player.position.x &&
            this.y < player.position.y + player.height &&
            this.height + this.y > player.position.y
          ) {
            // Collision detected!
            return true
          } else {
            // No collision
            return false
          }
    }
}