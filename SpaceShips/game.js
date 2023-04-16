var canvas;
var c;
var bgImage;
var mainPlayerSpeed = 16;
var numberOfEnemies = 20;
// var moveEnemiesRight_or_Left = true // true = move right
var gameTimer; 
var timeLeft; // seconds
var originalTimeLeft; // seconds
var timesFaster = 0;

// Game Code #####################################################################################################################################################################
const goodBulletController = new BulletControllerGoodPlayer(canvas);
const badBulletController = new BulletControllerEnemies(canvas);
const playerSpaceShip = new PlayerSpaceShip(goodBulletController, badBulletController);

const enemyShipsConroller = new EnemyShipsConroller(20, goodBulletController, badBulletController);


// window.addEventListener("load", setupGame, false);

window.onload = () => {
	setupGame()
  };

// called when the app first launches
function setupGame()
{
   // get the canvas, its context and setup its click event handler
   canvas = document.getElementById( "canvas" );
   c = canvas.getContext("2d");
//    c.canvas.width = window.innerWidth;
//    c.canvas.height = window.innerHeight;

   

   bgImage = new Image();
   bgImage.src = "images/bg.jpg"

   window.addEventListener('resize', function(event) {
		canvas.width = screen.width*0.42
		canvas.height = screen.height*0.6
		bgImage.width = canvas.width
   		bgImage.height = canvas.height
		playerSpaceShip.position.x = canvas.width /2 - playerSpaceShip.width/2
		playerSpaceShip.position.y = canvas.height * 0.9

		// drawEnemies()
	}, true);
   
	newGame()
	updatePositions()
	
	
	
} // end function setupGame



function updatePositions(){
	window.addEventListener('keydown',(e) => {
		switch (e.key){
			case currentUser.up:
				if(playerSpaceShip.position.y> (canvas.height*0.6)-8){
					playerSpaceShip.position.y -= mainPlayerSpeed}
				break
			case currentUser.down:
				if(playerSpaceShip.position.y + playerSpaceShip.height < canvas.height+8){
					playerSpaceShip.position.y += mainPlayerSpeed}
				break
			case currentUser.right:
				if(playerSpaceShip.position.x + playerSpaceShip.width < canvas.width+8){
				playerSpaceShip.position.x += mainPlayerSpeed}
				break
			case currentUser.left:
				if(playerSpaceShip.position.x > -8){
				playerSpaceShip.position.x -= mainPlayerSpeed}
				break
			case currentUser.shot:
				playerSpaceShip.shoot()
				break
			case 'r':
				
				break
		}
	})
}

// function updatePositions(){
// 	window.addEventListener('keydown',(e) => {
// 		switch (e.key){
// 			case 'ArrowUp':
// 				if(playerSpaceShip.position.y> (canvas.height*0.6)-8){
// 					playerSpaceShip.position.y -= mainPlayerSpeed}
// 				break
// 			case 'ArrowDown':
// 				if(playerSpaceShip.position.y + playerSpaceShip.height < canvas.height+8){
// 					playerSpaceShip.position.y += mainPlayerSpeed}
// 				break
// 			case 'ArrowRight':
// 				if(playerSpaceShip.position.x + playerSpaceShip.width < canvas.width+8){
// 				playerSpaceShip.position.x += mainPlayerSpeed}
// 				break
// 			case 'ArrowLeft':
// 				if(playerSpaceShip.position.x > -8){
// 				playerSpaceShip.position.x -= mainPlayerSpeed}
// 				break
// 			case 'e':
// 				playerSpaceShip.shoot()
// 				break
// 			case 'r':
				
// 				break
// 		}
// 	})
// }


function animate(){
	c.drawImage(bgImage,0,0,bgImage.width,bgImage.height)
	playerSpaceShip.draw();
	// playerSpaceShip.update();
	goodBulletController.draw()
	// enemyShipsConroller.shoot();
	badBulletController.draw()
	enemyShipsConroller.draw()
	updateScore()
	updateLives()
	// enemyShipsConroller.makeEnemiesMoveLeftRightAndCheckHits()
}


function newGame()
{
	reset();
	then = Date.now();
	intervalTimer = setInterval(main, 1); // Execute as fast as possible
}

function reset() {
	c.clearRect(0, 0, canvas.width, canvas.height);
};


// The main game loop
function main() {
	animate()
};

function start() {
	// setInterval is a built-in function that will call the given function
	// every N milliseconds (1 second = 1000 ms)
	let playAgainButton = document.getElementById("playAgainButton")
	let canvasDiv = document.getElementById("canvas")
	canvasDiv.style.display = "block"
	timeLeft = originalTimeLeft
	playerSpaceShip.lives = 3
	enemyShipsConroller.playerScore = 0
	// restoreEnemies()
	gameTimer = setInterval(updateTimer, 1000);
	speedUpTimer = setInterval(makeGameFaster, 5000)
	
	// We don't want the to be able to restart the timer while it is running,
	// so hide the button.
	playAgainButton.style.visibility = "hidden";
}

function updateTimer() {
	let gt = document.getElementById("gameTimer")
	timeLeft = timeLeft - 1;
	if(timeLeft >= 0){
		gt.textContent = timeLeft;
		enemyShipsConroller.shoot();
	}
	else {
	  gameOver();
	}
  }

  function makeGameFaster() {
	if(timeLeft >= 0 && timesFaster < 4){
		enemyShipsConroller.currentBulletSpeed += 0.5
		enemyShipsConroller.currentXChange += 0.2
		timesFaster++
	}
  }

// What to do when the timer runs out
function gameOver() {
	// This cancels the setInterval, so the updateTimer stops getting called
	clearInterval(gameTimer);
	let playAgainButton = document.getElementById("playAgainButton")
	
	// re-show the button, so they can start it again
	playAgainButton.style.visibility = "visible";
	let canvasDiv = document.getElementById("canvas")
	canvasDiv.style.display = "none"
  }

  function updateScore(){
	let gameScore = document.getElementById("score")
	gameScore.textContent = enemyShipsConroller.playerScore
  }

  function updateLives(){
	let livesLeft = document.getElementById("lives")
	let playerLives = playerSpaceShip.lives
	if (playerLives > 0){
		livesLeft.textContent = playerLives
	}
	else {
		livesLeft.textContent = 0
		gameOver()
	}
  }

//   function restoreEnemies(){
// 	if (enemyShipsConroller.enemyElienShips.length != 20) {
// 		enemyShipsConroller.enemyElienShips = []
// 		for(let i=0; i<numberOfEnemies ; i++){
//             let score = 0
//             if (i < 5){
//                 score = 20
//             }
//             else if (i < 10){
//                 score = 15
//             }
//             else if (i < 15){
//                 score = 10
//             }
//             else if (i < 20){
//                 score = 5
//             }
//             enemyShipsConroller.enemyElienShips.push(new EnemyElienShip(score))}
// 	}
//   }
