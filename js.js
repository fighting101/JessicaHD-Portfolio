// Typewriter Effect
const texts = ["Computer", "Science", "Student"];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

document.addEventListener("DOMContentLoaded", () => {
    const hamburg = document.querySelector(".hamburg");
    const cancel = document.querySelector(".cancel");
    const dropdown = document.querySelector(".dropdown");
    const links = document.querySelector(".nav-container .links");

    // Show dropdown menu when hamburger is clicked
    hamburg.addEventListener("click", () => {
        dropdown.style.transform = "translateY(0)"; // Slide down the menu
        hamburg.style.display = "none"; // Hide the hamburger icon
        cancel.style.display = "block"; // Show the cancel icon
    });

    // Hide dropdown menu when cancel is clicked
    cancel.addEventListener("click", () => {
        dropdown.style.transform = "translateY(-500px)"; // Slide up the menu
        hamburg.style.display = "block"; // Show the hamburger icon
        cancel.style.display = "none"; // Hide the cancel icon
    });

    // Hide dropdown if a link inside it is clicked
    dropdown.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            dropdown.style.transform = "translateY(-500px)";
            hamburg.style.display = "block";
            cancel.style.display = "none";
        }
    });
});