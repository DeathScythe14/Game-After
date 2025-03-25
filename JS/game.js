function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

// Optional: Auto-rotate slides
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function autoRotate() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Uncomment to enable auto-rotation (every 5 seconds)
// setInterval(autoRotate, 5000);