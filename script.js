// script.js
const typedNameElement = document.getElementById('typed-name');
const nameToType = "Revanth Yellapragada"; // Change this to your name
let index = 0;

function type() {
    if (index < nameToType.length) {
        typedNameElement.textContent += nameToType.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
    }
}

type();
