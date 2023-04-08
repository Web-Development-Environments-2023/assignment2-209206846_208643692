var currentUser; // will use to know who is playing to know who need to get the score.
var users =[
	{
		username: "p",
		password: "testuser",
		name: "",
		surname: '',
		email: '',
		birthday: '',
		points: 0
	},
]


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
	
}

function submitLogin(){
	// Get the registration form element
	const loginForm = document.getElementById('login-form');

	// Add event listener to the form's submit event
	loginForm.addEventListener('submit', (event) => {
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
				LoginSucced() // change to game mode! becuase the user logged in succesfuly
			}
		})

		if (!userNameExist){
			alert("No such username!")
		}

	});
}

function submitRegister(){
		// Get the registration form element
	const registerForm = document.getElementById('register-form');

	// Add event listener to the form's submit event
	registerForm.addEventListener('submit', (event) => {
		// Prevent the form from submitting and refreshing the page
		event.preventDefault();

		// Get the form data as an object
		const formData = new FormData(registerForm);
		
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
			points:0
		};


		users.push(user)

		// Show a confirmation message to the user
		alert('Registration successful!');

		returnToWelcome();

	});
}


function LoginSucced(){
	let loginScreen = document.getElementById("Login");
	let gameScreen = document.getElementById("Game");
	if (gameScreen.style.display === "none") {
		gameScreen.style.display = "block";
	  } else {
		gameScreen.style.display = "none";
	  }
	loginScreen.style.display = "none";
}

function returnToWelcome(){
	let registerScreen = document.getElementById("Register");
	let welcomeScreen = document.getElementById("Welcome");
	if (welcomeScreen.style.display === "none") {
		welcomeScreen.style.display = "block";
	  } else {
		welcomeScreen.style.display = "none";
	  }
	registerScreen.style.display = "none";
}