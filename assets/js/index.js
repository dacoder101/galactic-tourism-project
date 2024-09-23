document.getElementById(
    "copyright-text"
).innerHTML = `&copy; ${getYear()} Galactic Tourism - All rights reserved.`;

function backgroundChange() {
    const backgroundURLS = [
        "url('../img/bg/black.jpg')",
        "url('../img/bg/purple.jpg')",
        "url('../img/bg/stars.jpg')",
        "url('../img/bg/blue.jpg')",
        "url('../img/bg/pink.jpg')",
    ];

    const randomBackground = Math.floor(Math.random() * backgroundURLS.length);

    document.body.style.backgroundImage = backgroundURLS[randomBackground];
}

function displayContent(displayMenu) {
    const menu = document.getElementById(displayMenu);
}

backgroundChange();
