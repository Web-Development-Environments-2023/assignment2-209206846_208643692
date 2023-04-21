class EnemyShipsConroller{

    constructor(numberOfEnemiesShips, bulletController, enemiesBulletController){
        // this.canvas = canvas
        this.enemyElienShips = [];
        this.moveEnemiesRight_or_Left = true;
        this.bulletControllerOfMainPlayer = bulletController
        this.enemiesBulletController = enemiesBulletController

        for(let i=0; i<numberOfEnemies ; i++){
            let score = 0
            if (i < 5){
                score = 20
            }
            else if (i < 10){
                score = 15
            }
            else if (i < 15){
                score = 10
            }
            else if (i < 20){
                score = 5
            }
            this.enemyElienShips.push(new EnemyElienShip(score))}
        this.numberOfEnemiesShips = numberOfEnemiesShips
        this.positionTheShips()
        this.currentBulletSpeed = 2.5
        this.currentXChange = 0.5
        this.playerScore = 0
    }

    draw(){
        this.makeEnemiesMoveLeftRightAndCheckHits()
    }

    
    positionTheShips(){
        let col_x_position = 0
        let row_y_position = 0
       for(let i=0; i< this.enemyElienShips.length ; i++){    
            if (i !== 0 && i%5 == 0){
                // each row there is 5 ships update x,y of the ships
                row_y_position++ 
                col_x_position = 0 
            }
            this.enemyElienShips[i].position.x = col_x_position*100
            this.enemyElienShips[i].position.y = row_y_position*100    
            col_x_position++ // so each one of the five ships will be on thse place col x
            
       }
    }


    makeEnemiesMoveLeftRightAndCheckHits(){
        // this.draw()
        for(let i=0; i<this.enemyElienShips.length ; i++){
            // console.log("hit1")
            if (this.bulletControllerOfMainPlayer.collideWith(this.enemyElienShips[i])){
                laserSound.play()
                this.playerScore += this.enemyElienShips[i].points
                this.enemyElienShips.splice(i,1)
                console.log("hit")
                // add sound
            }
            else{
    
            if(this.enemyElienShips[i].position.x <= 10){
                this.moveEnemiesRight_or_Left = true
            }
            else if(this.enemyElienShips[i].position.x >= canvas.width-100){
                this.moveEnemiesRight_or_Left = false
            }
    
            if (this.moveEnemiesRight_or_Left){
                this.enemyElienShips[i].position.x += this.currentXChange
            }
            else if (!this.moveEnemiesRight_or_Left){
                this.enemyElienShips[i].position.x -= this.currentXChange
            }
            
            this.enemyElienShips[i].draw();
        }
    
        }
    }

    shoot(){
        // choose a random ship
        let ships_num = this.enemyElienShips.length;
        let shootingShip = this.enemyElienShips[Math.floor(Math.random() * ships_num)];

        const speed = this.currentBulletSpeed;
        const damage = 1;
        const bulletX = shootingShip.position.x;
        const bulletY = shootingShip.position.y;
        const w = 10;
        const h = 15;
        const color = "green"

        this.enemiesBulletController.shoot(bulletX, bulletY, speed, damage, w, h, color);
    }
}

