
            let currentIndex = 0;
            function showSlide(index) {
                const slide = document.getElementById('testimonialSlide');
                const totalSlides = document.querySelectorAll('.testimonial').length;
                if (index >= totalSlides) currentIndex = 0;
                else if (index < 0) currentIndex = totalSlides - 1;
                else currentIndex = index;
                slide.style.transform = `translateX(${-currentIndex * 100}%)`;
            }
            function nextSlide() {
                showSlide(currentIndex + 1);
            }
            function prevSlide() {
                showSlide(currentIndex - 1);
            }
            setInterval(nextSlide, 5000); // Auto slide every 5 seconds
    