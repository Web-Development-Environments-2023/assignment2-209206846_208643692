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
   drawCanvas();
	

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
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight * 0.87;
	bgImage = new Image();
	bgImage.src = "images/bg.jpg"
	bgImage.width = canvas.width
	bgImage.height = canvas.height
  }

function addEvents(){
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

	window.addEventListener('resize', drawCanvas);
	window.addEventListener('resize', updateSizes);	
	
	keyboardKeys.up = false
	keyboardKeys.down = false
	keyboardKeys.right = false
	keyboardKeys.left = false
	keyboardKeys.shoot = false
}

function removeEvents(){
	window.removeEventListener('keydown',(e1) => {
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


	window.removeEventListener('keyup',(e2) => {
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

	window.removeEventListener('resize', drawCanvas);	
	window.removeEventListener('resize', updateSizes);	
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
	gt = document.getElementById("gt")
	liv = document.getElementById("liv")
	sco = document.getElementById("sco")
	startNew = document.getElementById("newGame")

	gt.style.position = "fixed"
	gt.style.top = "-10px"

	liv.style.position = "fixed"
	liv.style.top = "-10px"
	liv.style.marginLeft = "38%"

	sco.style.position = "fixed"
	sco.style.top = "-10px"
	sco.style.marginLeft = "67%"

	startNew.style.display = "block"
	startNew.style.position = "fixed"
	startNew.style.top = "13px"

}

function revertStats(){
	gt = document.getElementById("gt")
	liv = document.getElementById("liv")
	sco = document.getElementById("sco")
	startNew = document.getElementById("newGame")

	gt.style.position = "absolute"
	gt.style.top = "80px"

	liv.style.position = "absolute"
	liv.style.top = "80px"
	liv.style.marginLeft = "40%"

	sco.style.position = "absolute"
	sco.style.top = "80px"
	sco.style.marginLeft = "75%"

	startNew.style.display = "none"
	startNew.style.position = "absolute"
	startNew.style.top = "80px"

}

function start() {
	// setInterval is a built-in function that will call the given function
	// every N milliseconds (1 second = 1000 ms)
	newGame()
	addEvents()
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
	timesFaster = 0
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
	clearInterval(speedUpTimer)
	removeEvents()
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

function stopAndNew(){
	clearInterval(gameTimer);
	clearInterval(intervalTimer)
	clearInterval(speedUpTimer)
	removeEvents()
	gameSound.stop()
	
	// re-show the button, so they can start it again
	newGame()
	addEvents()
	goodBulletController = new BulletControllerGoodPlayer(canvas);
	badBulletController = new BulletControllerEnemies(canvas);
	playerSpaceShip = new PlayerSpaceShip(goodBulletController, badBulletController);
	enemyShipsConroller = new EnemyShipsConroller(20, goodBulletController, badBulletController);
	timeLeft = originalTimeLeft
	playerSpaceShip.lives = 3
	enemyShipsConroller.playerScore = 0
	timesFaster = 0
	gameSound = new sound("sound/onlymp3.to - Space Trance (super)-XfP36F-3pJ0-256k-1657556329695.mp3");
    laserSound = new sound("sound/Laser Gun Sound Effect.mp3");
	strikeSound = new sound("sound/SUSPENSE STRIKE SOUND EFFECT.mp3");
    gameSound.play();
	gameTimer = setInterval(updateTimer, 1000);
	speedUpTimer = setInterval(makeGameFaster, 5000)
}

function updateSizes(){
	playerSpaceShip.width = window.innerWidth * 0.056
	playerSpaceShip.height = window.innerHeight * 0.112
	playerSpaceShip.image.width = window.innerWidth * 0.056
	playerSpaceShip.image.height = window.innerHeight * 0.112


	enemyShipsConroller.currentXChange = window.innerWidth * 0.0004
	for(let i=0; i< enemyShipsConroller.enemyElienShips.length ; i++){
		enemyShipsConroller.enemyElienShips[i].width = window.innerWidth * 0.056
		enemyShipsConroller.enemyElienShips[i].height = window.innerHeight * 0.112
		enemyShipsConroller.enemyElienShips[i].image.width = window.innerWidth * 0.056
		enemyShipsConroller.enemyElienShips[i].image.height = window.innerHeight * 0.112
	}
	// To Be Decided: enemyShipsConroller.positionTheShips()

	// update scoreboard as well
}

