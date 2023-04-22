window.addEventListener("load", ()=>{
    // Get the scores element
    var HS = document.getElementById("highScores");
    
    // Get the close button element
    var closeSettingsBtn = document.getElementsByClassName("close-highScores")[0];
    
    // When the user clicks on the close button, close the HS
    closeSettingsBtn.onclick = function() {
        HS.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the settings, close it
    window.addEventListener("click",function(event) {
        if (event.target == HS) {
            HS.style.display = "none";
        }
    })
    
    // When the user presses the Escape key, close the settings
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            HS.style.display = "none";
        }
    });
    },false)