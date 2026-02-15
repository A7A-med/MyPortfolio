// AOS Animation Init
AOS.init({ duration: 1000, once: false });

// Typing Effect
new Typed('.typing', {
    strings: ['Software Developer', 'Freelancer', 'Android Specialist'],
    typeSpeed: 100, backSpeed: 60, loop: true
});

// Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');
themeToggle.onclick = () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
};

// Mobile Menu
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('fa-xmark');
};

// Scroll reveal for floating button
window.onscroll = () => {
    const scrollUp = document.querySelector('.scroll-up');
    if (window.scrollY > 500) {
        scrollUp.style.display = "flex";
    } else {
        scrollUp.style.display = "none";
    }
    navLinks.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
};