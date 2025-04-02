// Smooth Scrolling
document.querySelectorAll('.nav-btn').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Screenshot Interaction
const screenshotItems = document.querySelectorAll('.screenshot-item');
const screenshotContent = document.getElementById('screenshot-content');
const contentText = document.getElementById('content-text');
const previewImg = document.getElementById('preview-img');

screenshotItems.forEach(item => {
    const img = item.querySelector('.screenshot');
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        screenshotItems.forEach(i => i.classList.remove('active'));
        screenshotContent.classList.remove('active');
        previewImg.style.display = 'none';

        if (!isActive) {
            item.classList.add('active');
            screenshotContent.classList.add('active');
            contentText.textContent = item.getAttribute('data-content') || 'No description available.';
            if (img && img.src) {
                previewImg.src = img.src;
                previewImg.style.display = 'block';
                console.log('Previewing:', img.src); // Debug log
            } else {
                console.error('Image source not found for:', item);
            }
        }
    });
});

// Contact Form (Placeholder)
document.querySelector('.contact-form').addEventListener('submit', e => {
    e.preventDefault();
    console.log('Form submitted:', {
        name: e.target[0].value,
        email: e.target[1].value,
        message: e.target[2].value
    });
    alert('Message sent! (This is a placeholder action)');
    e.target.reset();
});

// Progress Bars
document.querySelectorAll('.progress-bar').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.setProperty('--progress', progress);
});

// Slide-In Transitions for Sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-transition');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the section is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Ensure initial visibility of Home section if already in view
    const homeSection = document.getElementById('home');
    if (homeSection.getBoundingClientRect().top < window.innerHeight) {
        homeSection.classList.add('visible');
    }
});