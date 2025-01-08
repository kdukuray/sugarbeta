
const body = document.body;

// create a new div
const newPopup = document.createElement("div")

// style it to appear as a proper popup
newPopup.style.width = "10rem"
newPopup.style.height = "10rem"
newPopup.style.position = "fixed"
newPopup.style.top = "4rem"
newPopup.style.right = "4rem"
newPopup.style.backgroundColor = "red"
newPopup.innerHTML = "yoooooo"

// add it to the body of the page
body.appendChild(newPopup)