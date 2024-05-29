let slideIndex = 1;
let idleTime = 0;
const idleInterval = setInterval(timerIncrement, 1000); // 1 sekunda

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".gallery img");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowRight") {
        plusSlides(1);
        resetTimer();
    } else if (event.key === "ArrowLeft") {
        plusSlides(-1);
        resetTimer();
    }
});

function timerIncrement() {
    idleTime++;
    if (idleTime >= 7) {
        plusSlides(1);
        resetTimer();
    }
}

function resetTimer() {
    idleTime = 0;
}
