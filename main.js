function GenerateRandomColors() {
    const hex = 0xFFFFFF; // Max HEX value equals to 16777215

    let number = Math.random() * hex;

    number = Math.floor(number);

    number = number.toString(16);

    const color = number.padStart(6, 0);

    return `#${color}`;
}

function ChangeBorderColor() {
    const borderColor = GenerateRandomColors();
    
    const card = document.querySelector("div#card").style.borderColor = borderColor;
}

const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "32px",
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `main, .stats, .right-content`
    , { interval: 100 }
);