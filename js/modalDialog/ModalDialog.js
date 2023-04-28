window.addEventListener("load", ()=>{
// Get the dialog element
var dialog = document.getElementById("dialog");

// Get the button that opens the dialog
var openDialogBtn = document.getElementById("open-dialog-btn");

// Get the close button element
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the dialog
openDialogBtn.onclick = function() {
  dialog.style.display = "block";
}

// When the user clicks on the close button, close the dialog
closeBtn.onclick = function() {
  dialog.style.display = "none";
}

// When the user clicks anywhere outside of the dialog, close it
window.addEventListener("click",function(event) {
  if (event.target == dialog) {
    dialog.style.display = "none";
  }
})

// When the user presses the Escape key, close the dialog
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    dialog.style.display = "none";
  }
});
},false)
