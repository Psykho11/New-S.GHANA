document.addEventListener('DOMContentLoaded', () => {
    // Handle the general slideshow for .slide1
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide1');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

setInterval(nextSlide, 3000);
});