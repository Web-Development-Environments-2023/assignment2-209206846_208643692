window.addEventListener("load", ()=>{
// Get the input fields
const moveUpInput = document.getElementById('move-up-key');
const moveDownInput = document.getElementById('move-down-key');
const moveLeftInput = document.getElementById('move-left-key');
const moveRightInput = document.getElementById('move-right-key');
const shootInput = document.getElementById('shoot-key');

// Add event listeners to each input field
moveUpInput.addEventListener('keydown', function(event) {
  event.preventDefault(); // prevent the default action of the keypress
  moveUpInput.value = checkForSpaceElseOriginalKey(event); // set the input value to the key that was pressed
  console.log(1)
});

moveDownInput.addEventListener('keydown', function(event) {
  event.preventDefault();
  moveDownInput.value = checkForSpaceElseOriginalKey(event);
});

moveLeftInput.addEventListener('keydown', function(event) {
  event.preventDefault();
  moveLeftInput.value = checkForSpaceElseOriginalKey(event);
});

moveRightInput.addEventListener('keydown', function(event) {
  event.preventDefault();
  moveRightInput.value = checkForSpaceElseOriginalKey(event);
});

shootInput.addEventListener('keydown', function(event) {
  event.preventDefault();
  shootInput.value = checkForSpaceElseOriginalKey(event);
});

}, false);


function checkForSpaceElseOriginalKey(e){
    if (e.code === 'Space'){
        return 'Space'
    }

    return e.key
}

function settingsSubmitBtnHandler(){
	// Get the registration form element
	const GameSettingsForm = document.getElementById('GameSettingsForm');

	// Add event listener to the form's submit event
	GameSettingsForm.addEventListener('submit', (event) => {
		// Prevent the form from submitting and refreshing the page
		event.preventDefault();
	
		// Get the form data as an object
		const formData = new FormData(GameSettingsForm);
	
		// Get the username and password from the form data
		const up = formData.get('move-up-key');
		const down = formData.get('move-down-key');
        const left = formData.get('move-left-key');
		const right = formData.get('move-right-key');
        const shot = formData.get('shoot-key');
        moves = [up,down,left,right,shot]

		
		for (let i = 0; i < moves.length; i++) {
            for (let j = 0; j < moves.length; j++) {
                if (i===j){
                    continue
                }
                else if (moves[i] === moves[j]){
                    alert("you can't have the same button in two different moves!")
                    return;
                }
            
            }
        }

        //global player moves
        currentUser.up = up;
        currentUser.down = down;
        currentUser.right = right;
        currentUser.left = left;
        currentUser.shot = shot;

        let welcomeScreen = document.getElementById("Welcome");
        let loginScreen = document.getElementById("Login");
        let RegisterScreen = document.getElementById("Register");
        let Game = document.getElementById("Game");
        welcomeScreen.style.display = "none";
        loginScreen.style.display = "none";
        RegisterScreen.style.display = "none";
        Game.style.display = "block";

	});
}
