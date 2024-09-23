document.getElementById(
    "copyright-text"
).innerHTML = `&copy; ${getYear()} Galactic Tourism - All rights reserved.`;

function backgroundChange() {
    const backgroundURLS = [
        "url('./assets/img/bg/black.jpg')",
        "url('./assets/img/bg/purple.jpg')",
        "url('./assets/img/bg/stars.jpg')",
        "url('./assets/img/bg/blue.jpg')",
        "url('./assets/img/bg/pink.jpg')",
    ];

    const randomBackground = Math.floor(Math.random() * backgroundURLS.length);

    document.body.style.backgroundImage = backgroundURLS[randomBackground];
}

function displayContent(displayMenu) {
    const menu = document.getElementById(displayMenu);
    menu.style.visibility = "visible";
}

function closeContent(displayMenu) {
    const menu = document.getElementById(displayMenu);
    menu.style.visibility = "hidden";
}

const closeButton = document.getElementById("info-close-button");
const originalContent = closeButton.innerHTML;

closeButton.addEventListener("mouseover", () => {
    closeButton.innerHTML =
        '<img src="./assets/img/rick-astley.gif" width="32px" height="32px"><p style="fonts-size: 6px">i had to get you back</p>';
});

closeButton.addEventListener("mouseout", () => {
    closeButton.innerHTML = originalContent;
});

window.addEventListener("load", () => {
    backgroundChange();
    setInterval(backgroundChange, 10000);
});
