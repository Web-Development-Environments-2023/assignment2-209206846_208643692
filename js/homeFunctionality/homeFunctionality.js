window.addEventListener("load", ()=>{
    // Get the button that returns to welcome screen
    var returnHome = document.getElementById("return-home-btn");

    // Get welcome screen and divs to make none
    let welcomeScreen = document.getElementById("Welcome");
    let loginDiv = document.getElementById("Login");
    let registerDiv = document.getElementById("Register");
    let gameSettingsDiv = document.getElementById("GameSettings");
    let gameDiv = document.getElementById("Game");
    let footer = document.getElementById("footer");

    // When the user clicks on the home button, return to welcome screen
    returnHome.onclick = function() {
        welcomeScreen.style.display = "block";
        loginDiv.style.display = "none";
        registerDiv.style.display = "none";
        gameSettingsDiv.style.display = "none";
        gameDiv.style.display = "none";
        footer.style.display = "block";
    }


},false)
