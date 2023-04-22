window.addEventListener("load", ()=>{
// Get the settings element
var settingsExplained = document.getElementById("settingsExplained");

// Get the button that opens the settings
var openSettingsExplainedBtn = document.getElementById("show-settings-btn");

// Get the close button element
var closeSettingsBtn = document.getElementsByClassName("close-settings")[0];

// When the user clicks on the button, open the settings
openSettingsExplainedBtn.onclick = function() {
    settingsExplained.style.display = "block";
}

// When the user clicks on the close button, close the settings
closeSettingsBtn.onclick = function() {
    settingsExplained.style.display = "none";
}

// When the user clicks anywhere outside of the settings, close it
window.addEventListener("click",function(event) {
    if (event.target == settingsExplained) {
        settingsExplained.style.display = "none";
    }
})

// When the user presses the Escape key, close the settings
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        settingsExplained.style.display = "none";
    }
});
},false)