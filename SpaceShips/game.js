var canvas;
var c;
var bgImage;
var mainPlayerSpeed = 3;
var numberOfEnemies = 20;
// var moveEnemiesRight_or_Left = true // true = move right
var gameTimer; 
var timeLeft; // seconds
var originalTimeLeft; // seconds
var timesFaster = 0;
var gameSound;
var laserSound;
var strikeSound;
var keyboardKeys = {
	up: false,
	down: false,
	right: false,
	left: false,
	shoot: false
}

// Game Code #####################################################################################################################################################################
let goodBulletController = new BulletControllerGoodPlayer(canvas);
let badBulletController = new BulletControllerEnemies(canvas);
let playerSpaceShip = new PlayerSpaceShip(goodBulletController, badBulletController);
let enemyShipsConroller = new EnemyShipsConroller(20, goodBulletController, badBulletController);


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

   


//    screen.addEventListener('resize', drawCanvas, false);	
	

	drawCanvas()

	window.addEventListener('keydown',(e1) => {
		switch (e1.key){
		case currentUser.up:
			keyboardKeys.up = true;
			break
		case currentUser.down:
			keyboardKeys.down = true;
			break
		case currentUser.right:
			keyboardKeys.right = true;
			break
		case currentUser.left:
			keyboardKeys.left = true;
			break
		case currentUser.shot:
			keyboardKeys.shoot = true;
			break}})


	window.addEventListener('keyup',(e2) => {
		switch (e2.key){
		case currentUser.up:
			keyboardKeys.up = false;
			break
		case currentUser.down:
			keyboardKeys.down = false;
			break
		case currentUser.right:
			keyboardKeys.right = false;
			break
		case currentUser.left:
			keyboardKeys.left = false;
			break
		case currentUser.shot:
			keyboardKeys.shoot = false
			break}})

	// window.addEventListener('keydown',(e1) => {
	// 	switch (e1.key){
	// 	case "ArrowUp":
	// 		keyboardKeys.up = true;
	// 		break
	// 	case "ArrowDown":
	// 		keyboardKeys.down = true;
	// 		break
	// 	case "ArrowRight":
	// 		keyboardKeys.right = true;
	// 		break
	// 	case "ArrowLeft":
	// 		keyboardKeys.left = true;
	// 		break
	// 	case " ":
	// 		keyboardKeys.shoot = true;
	// 		break}})


	// window.addEventListener('keyup',(e2) => {
	// 	switch (e2.key){
	// 	case "ArrowUp":
	// 		keyboardKeys.up = false;
	// 		break
	// 	case "ArrowDown":
	// 		keyboardKeys.down = false;
	// 		break
	// 	case "ArrowRight":
	// 		keyboardKeys.right = false;
	// 		break
	// 	case "ArrowLeft":
	// 		keyboardKeys.left = false;
	// 		break
	// 	case " ":
	// 		keyboardKeys.shoot = false
	// 		break}})
	
} // end function setupGame


function drawCanvas() {
	canvas.width  = screen.width;
	canvas.height = screen.height*0.7;
	bgImage = new Image();
	bgImage.src = "images/bg.jpg"
	bgImage.width = canvas.width
	bgImage.height = canvas.height
	
	playerSpaceShip.position.x = Math.random() * (canvas.width)
	playerSpaceShip.position.y = canvas.height * 0.8
  }


function updatePositions(){
	if (keyboardKeys.up && playerSpaceShip.position.y> (canvas.height*0.6)-8){
		playerSpaceShip.position.y -= mainPlayerSpeed
	}
	if (keyboardKeys.down && playerSpaceShip.position.y + playerSpaceShip.height < canvas.height+8){
		playerSpaceShip.position.y += mainPlayerSpeed
	}
	if (keyboardKeys.right && playerSpaceShip.position.x + playerSpaceShip.width < canvas.width+8){
		playerSpaceShip.position.x += mainPlayerSpeed
	}
	if (keyboardKeys.left && playerSpaceShip.position.x > -8){
		playerSpaceShip.position.x -= mainPlayerSpeed
	}
	if (keyboardKeys.shoot){
		playerSpaceShip.shoot()
	}
}

function animate(){
	c.clearRect(0, 0, canvas.width, canvas.height);
	c.drawImage(bgImage,0,0,bgImage.width,bgImage.height)
	
	playerSpaceShip.draw();
	// playerSpaceShip.update();
	goodBulletController.draw()
	// enemyShipsConroller.shoot();
	badBulletController.draw()
	enemyShipsConroller.draw()
	updateScore()
	updateLives()
	checkEnemies()
	updatePositions()
	
	// enemyShipsConroller.makeEnemiesMoveLeftRightAndCheckHits()
}


function newGame()
{
	reset();
	intervalTimer = setInterval(main, 1); // Execute as fast as possible
}

function reset() {
	c.clearRect(0, 0, canvas.width, canvas.height);
};


// The main game loop
function main() {
	animate()
};


function changeFooterPlaceToRelative(){
	// change footer position
	document.getElementById("footer").style.position = "relative";
}

function changeFooterPlaceToFixed(){
	// change footer position
	document.getElementById("footer").style.position = "fixed";
}

function changeFooterDisplayToNone(){
	// change footer position
	document.getElementById("footer").style.display = "none";
}

function changeFooterDisplayToBlock(){
	// change footer position
	document.getElementById("footer").style.display = "block";
}

function changeNavDisplayToNone(){
	// change footer position
	document.getElementById("nav").style.display = "none";
}

function changeNavDisplayToFlex(){
	// change footer position
	document.getElementById("nav").style.display = "flex";
}

function changeStatsDisplayForGame(){
}

function revertStats(){
}

function start() {
	// setInterval is a built-in function that will call the given function
	// every N milliseconds (1 second = 1000 ms)
	newGame()
	goodBulletController = new BulletControllerGoodPlayer(canvas);
	badBulletController = new BulletControllerEnemies(canvas);
	playerSpaceShip = new PlayerSpaceShip(goodBulletController, badBulletController);
	enemyShipsConroller = new EnemyShipsConroller(20, goodBulletController, badBulletController);
	let playAgainButton = document.getElementById("playAgainButton")
	let canvasDiv = document.getElementById("canvas")
	canvasDiv.style.display = "block"
	timeLeft = originalTimeLeft
	playerSpaceShip.lives = 3
	enemyShipsConroller.playerScore = 0
	gameSound = new sound("sound/onlymp3.to - Space Trance (super)-XfP36F-3pJ0-256k-1657556329695.mp3");
    laserSound = new sound("sound/Laser Gun Sound Effect.mp3");
	strikeSound = new sound("sound/SUSPENSE STRIKE SOUND EFFECT.mp3");
    gameSound.play();
	gameTimer = setInterval(updateTimer, 1000);
	speedUpTimer = setInterval(makeGameFaster, 5000)
	
	// We don't want the to be able to restart the timer while it is running,
	// so hide the button.
	playAgainButton.style.visibility = "hidden";
	changeFooterDisplayToNone()
	changeNavDisplayToNone()
	changeStatsDisplayForGame()
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
	clearInterval(intervalTimer)
	let playAgainButton = document.getElementById("playAgainButton")
	gameSound.stop()
	
	// re-show the button, so they can start it again
	playAgainButton.style.visibility = "visible";
	let canvasDiv = document.getElementById("canvas")
	canvasDiv.style.display = "none"
	printResults()
	printHighScores()
	changeFooterDisplayToBlock()
	changeNavDisplayToFlex()
	revertStats()
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

  function checkEnemies(){
	let enemiesLeft = enemyShipsConroller.enemyElienShips.length
	if (enemiesLeft == 0){
		gameOver()
	}
  }


function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function printResults(){
	let playerLives = playerSpaceShip.lives
	let enemiesLeft = enemyShipsConroller.enemyElienShips.length
	let finalScore = enemyShipsConroller.playerScore

	if (playerLives == 0){
		alert("You Lost! " + finalScore + " Points")
	}

	else if (timeLeft == 0){
		if(finalScore < 100){
			alert("you can do better! " + finalScore + " Points")
		}
		else{
			alert("Winner! " + finalScore + " Points")
		}
	}
	
	else if (enemiesLeft == 0){
		alert("Champion! " + finalScore + " Points")
	}
}

function addHighScore(){
	let finalScore = enemyShipsConroller.playerScore
	// let arr = currentUser.highScores
	// let ind = binarySearch(arr, finalScore)
	currentUser.highScores.push(finalScore)
}

function printHighScores(){
	addHighScore()
	let scoreBoard = document.getElementById("highScores")
	let list = document.getElementById("scoresList");
	list.innerHTML = ''
	let data = currentUser.highScores.slice()
	let sortedData = data.sort(function(a, b) {return a - b;}).reverse()
	for(let i=0; i<sortedData.length; i++){
		console.log(sortedData[i])
		let li = document.createElement("li");
		li.innerText = "Name: " + currentUser.username + " Score: " + sortedData[i];
		list.appendChild(li);
	}
	scoreBoard.style.display = "block"
}

// function binarySearch(arr, val) {
// 	let start = 0;
// 	let end = arr.length - 1;
// 	let mid = 0;

// 	console.log(mid)
// 	while (start <= end) {
// 	  mid = Math.floor((start + end) / 2);
  
// 	  if (arr[mid] === val) {
// 		return mid;
// 	  }
  
// 	  if (val < arr[mid]) {
// 		end = mid - 1;
// 	  } else {
// 		start = mid + 1;
// 	  }
// 	}
// 	console.log(mid)
// 	return mid;
//   }


