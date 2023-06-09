var currentUser; // will use to know who is playing to know who need to get the score.
var users =[
	{
		username: "p",
		password: "testuser",
		name: "",
		surname: '',
		email: '',
		birthday: '',
		highScores: [],
		up:"ArrowUp",
		down:"ArrowDown",
        left:"ArrowLeft",
		right:"ArrowRight",
        shot:" ",
	},
]


document.addEventListener("DOMContentLoaded", ()=>{
	submitLogin();
	submitRegister();
});

function changeFooterPlaceToRelative(){
	// change footer position
	document.getElementById("footer").style.position = "relative";
}

function changeFooterPlaceToFixed(){
	// change footer position
	document.getElementById("footer").style.position = "fixed";
}

// window.addEventListener("load", setupGame, false);

function loginBtnHandler(){
	let welcomeScreen = document.getElementById("Welcome");
	let loginScreen = document.getElementById("Login");
	if (welcomeScreen.style.display === "none") {
		welcomeScreen.style.display = "block";
	  } else {
		welcomeScreen.style.display = "none";
	  }
	loginScreen.style.display = "block";

	changeFooterPlaceToRelative()
}

function registerBtnHandler(){
	let welcomeScreen = document.getElementById("Welcome");
	let registerScreen = document.getElementById("Register");
	if (welcomeScreen.style.display === "none") {
		welcomeScreen.style.display = "block";
	  } else {
		welcomeScreen.style.display = "none";
	  }
	registerScreen.style.display = "block";

	
	changeFooterPlaceToRelative()
}

function submitLogin(){
	// Get the registration form element
	const loginForm = document.getElementById('login-form');
	const loginFormBtn = document.getElementById('login-submit-btn');

	// Add event listener to the form's submit event
	loginFormBtn.addEventListener("click", function (event) {
		// Prevent the form from submitting and refreshing the page
		event.preventDefault();
	
		// Get the form data as an object
		const formData = new FormData(loginForm);
	
		// Get the username and password from the form data
		const username = formData.get('username');
		const password = formData.get('password');
		
		let userNameExist = false;
		users.forEach((userData)=>{
			if(userData.username === username){
				userNameExist = true;
				if(userData.password !== password){
					alert("password was incorrect")
					return;
				}
				alert("user: " + username + " has logged in!")
				currentUser = userData
				LoginSucced() // change to game mode! becuase the user logged in succesfuly
			}
		})

		if (!userNameExist){
			alert("No such username!")
		}

	},false);
}

function submitRegister(){
		// Get the registration form element
	const registerForm = document.getElementById('register-form');
	const registerFormBtn = document.getElementById('register-submit-btn');

	// Add event listener to the form's submit event
	registerFormBtn.addEventListener("click", function (event) {
		// Prevent the form from submitting and refreshing the page
		event.preventDefault();

		// Get the form data as an object
		const formData = new FormData(registerForm);

		let password = formData.get('confirm-password');
		if (!CheckPassword(password)){
			return;
		}
		
		if(formData.get('confirm-password') !== formData.get('password')){
			alert("the password wasn't the same")
		}

		let username = formData.get('username')
		
		let userNameExist = false;
		users.forEach((userData)=>{
			if(userData.username === username){
				userNameExist = true;	
			}
		})

		if (userNameExist){
			alert("user name already exist try another!")
			return;
		}

		// Create a new object to hold the user data
		let user = {
			username: username,
			password: formData.get('password'),
			name: formData.get('name'),
			surname: formData.get('surname'),
			email: formData.get('email'),
			birthday: formData.get('birthday'),
			highScores: [],
			up:"ArrowUp",
			down:"ArrowDown",
        	left:"ArrowLeft",
			right:"ArrowRight",
        	shot:" "
		};


		users.push(user)

		// Show a confirmation message to the user
		alert('Registration successful!');

		returnToLogin();

	},false);
}

function CheckPassword(inputtxt) 
{ 
	if (inputtxt.length < 8 ){
		alert('the password is too short at list 8 size!')
		return false
	}

    var minMaxLength = /^[\s\S]{8,32}$/,
        upper = /[A-Z]/,
        lower = /[a-z]/,
        number = /[0-9]/
        // special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    if (minMaxLength.test(inputtxt) &&
        upper.test(inputtxt) &&
        lower.test(inputtxt) &&
        number.test(inputtxt)
    ) {
        return true;
    }
	else
	{ 
	alert('need to include at list 1 number,1 a-z, 1 A-Z !')
	return false;
	}
}


function LoginSucced(){
	let loginScreen = document.getElementById("Login");
	let gameSettingsScreen = document.getElementById("GameSettings");
	if (gameSettingsScreen.style.display === "none") {
		gameSettingsScreen.style.display = "block";
	  } else {
		gameSettingsScreen.style.display = "none";
	  }
	loginScreen.style.display = "none";
}

function returnToLogin(){
	let registerScreen = document.getElementById("Register");
	let loginScreen = document.getElementById("Login");
	if (loginScreen.style.display === "none") {
		loginScreen.style.display = "block";
	  } else {
		loginScreen.style.display = "none";
	  }
	registerScreen.style.display = "none";
}
