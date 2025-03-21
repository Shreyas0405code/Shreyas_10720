// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic Gallery Hover Effect
const galleryImages = document.querySelectorAll('.gallery-grid img');
galleryImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease-in-out';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Please fill out all fields.');
    } else if (!email.value.includes('@')) {
        alert('Please enter a valid email address.');
    } else {
        alert('Form submitted successfully!');
        // Reset the form
        name.value = '';
        email.value = '';
        message.value = '';
    }
});

// Console Greeting (Just for Fun!)
console.log("Hello, Shreyas! Your portfolio is shaping up nicely.");










