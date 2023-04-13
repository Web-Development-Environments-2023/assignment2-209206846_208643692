class EnemyShipsConroller{

    constructor(numberOfEnemiesShips, bulletController, enemiesBulletController){
        // this.canvas = canvas
        this.enemyElienShips = [];
        this.moveEnemiesRight_or_Left = true;
        this.bulletControllerOfMainPlayer = bulletController
        this.enemiesBulletController = enemiesBulletController

        for(let i=0; i<numberOfEnemies ; i++){
            this.enemyElienShips.push(new EnemyElienShip())}
        this.numberOfEnemiesShips = numberOfEnemiesShips
        this.positionTheShips()
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
                this.enemyElienShips[i].position.x += 0.5
            }
            else if (!this.moveEnemiesRight_or_Left){
                this.enemyElienShips[i].position.x -= 0.5
            }
            
            this.enemyElienShips[i].draw();
        }
    
        }
    }

    shoot(){
        // choose a random ship
        let ships_num = this.enemyElienShips.length;
        let shootingShip = this.enemyElienShips[Math.floor(Math.random() * ships_num)];

        const speed = 2;
        const damage = 1;
        const bulletX = shootingShip.position.x;
        const bulletY = shootingShip.position.y;
        // const w = 5;
        // const h = 15;
        const color = "green"

        this.enemiesBulletController.shoot(bulletX, bulletY, speed, damage, color);
    }

}

