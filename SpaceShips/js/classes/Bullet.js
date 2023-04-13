class Bullet{
    constructor(x,y,speed,damage,color){
        this.x = x;
        this.y = y;
        this.speed=speed;
        this.damage = damage;
        this.width = 10;
        this.height = 20;
        this.color = color;

    }

    // for player bullets
    draw(){
        c.fillStyle = this.color
        this.y -= this.speed;
        c.fillRect(this.x, this.y, this.width, this.height)
    }

    // for enemy bullets
    drawEnemy(){
        c.fillStyle = this.color
        this.y += this.speed;
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