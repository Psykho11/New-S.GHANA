const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    let testimonialIndex = 0;

    function showTestimonialSlide(index) {
        testimonialSlides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextTestimonialSlide() {
        testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
        showTestimonialSlide(testimonialIndex);
    }

    // Set an interval for the testimonials slideshow (optional)
    setInterval(nextTestimonialSlide, 4000);  // Testimonial slideshow interval
    showTestimonialSlide(testimonialIndex);  // Show the first testimonial initially
