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
}

window.addEventListener("load", () => {
    backgroundChange();
    setInterval(backgroundChange, 10000);
});
