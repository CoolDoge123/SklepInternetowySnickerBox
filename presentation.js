document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.presentation .slide');

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function handleKeydown(event) {
        if (event.key === 'ArrowRight') {
            showSlide(currentSlide + 1);
        } else if (event.key === 'ArrowLeft') {
            showSlide(currentSlide - 1);
        }
    }

    document.addEventListener('keydown', handleKeydown);
    showSlide(currentSlide);

    document.querySelector('.presentation').style.display = 'block';
});
