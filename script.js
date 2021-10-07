
//has a text heading with the project title
let headerContainer = document.querySelector("#main-wrapper #header-container")
let h1 = document.createElement("h1");
h1.textContent = "Weather App";

headerContainer.prepend(h1)

let form = document.createElement("form")
form.classList.add("user-input")

