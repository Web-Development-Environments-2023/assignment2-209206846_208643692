var canvas;
var c;
var bgImage;
var mainPlayerSpeed = 16;
var numberOfEnemies = 20;
// var moveEnemiesRight_or_Left = true // true = move right
var gameTimer; 
var timeLeft; // seconds

// Game Code #####################################################################################################################################################################
const bulletController = new BulletControllerGoodPlayer(canvas);
const playerSpaceShip = new PlayerSpaceShip(bulletController);

const enemyShipsConroller = new EnemyShipsConroller(20, bulletController);


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
			case 'ArrowUp':
				if(playerSpaceShip.position.y> (canvas.height*0.6)-8){
					playerSpaceShip.position.y -= mainPlayerSpeed}
				break
			case 'ArrowDown':
				if(playerSpaceShip.position.y + playerSpaceShip.height < canvas.height+8){
					playerSpaceShip.position.y += mainPlayerSpeed}
				break
			case 'ArrowRight':
				if(playerSpaceShip.position.x + playerSpaceShip.width < canvas.width+8){
				playerSpaceShip.position.x += mainPlayerSpeed}
				break
			case 'ArrowLeft':
				if(playerSpaceShip.position.x > -8){
				playerSpaceShip.position.x -= mainPlayerSpeed}
				break
			case 'e':
				playerSpaceShip.shoot()
				break
			case 'r':
				
				break
		}
	})
}


function animate(){
	c.drawImage(bgImage,0,0,bgImage.width,bgImage.height)
	playerSpaceShip.draw();
	playerSpaceShip.update();
	bulletController.draw()
	enemyShipsConroller.draw()
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
	timeLeft = 30;
	let playAgainButton = document.getElementById("playAgainButton")
	gameTimer = setInterval(updateTimer, 1000);
	
	// We don't want the to be able to restart the timer while it is running,
	// so hide the button.
	playAgainButton.style.visibility = "hidden";
}

function updateTimer() {
	let gt = document.getElementById("gameTimer")
	timeLeft = timeLeft - 1;
	if(timeLeft >= 0)
	  gt.textContent = timeLeft;
	else {
	  gameOver();
	}
  }

// What to do when the timer runs out
function gameOver() {
	// This cancels the setInterval, so the updateTimer stops getting called
	clearInterval(gameTimer);
	let playAgainButton = document.getElementById("playAgainButton")
	
	// re-show the button, so they can start it again
	playAgainButton.style.visibility = "visible";
  }