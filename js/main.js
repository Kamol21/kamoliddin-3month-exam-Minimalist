// var elNavbar = document.querySelector(".site-header")
var elBody = document.querySelector("body")
var elToggleButton = document.querySelector(".site-header__button")

elToggleButton.addEventListener("click", function() {
    // elNavbar.classList.toggle("open")
    elBody.classList.toggle("open")
} )