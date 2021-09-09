//Select the slider checkbox input
let themeSwitch = document.querySelector("#button-slider");

//Add the event to change the css
themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("white-mode");
});