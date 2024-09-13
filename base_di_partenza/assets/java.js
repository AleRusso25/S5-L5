window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const ctaButton = document.querySelector('.cta-button');
    if (window.scrollY > window.innerHeight * 0.9) {
        navbar.classList.add('scrolled');
        ctaButton.style.backgroundColor = '#1a8917';
    } else {
        navbar.classList.remove('scrolled');
        ctaButton.style.backgroundColor = '#191919';
    }
});
