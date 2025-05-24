// Smooth Scrolling
document.querySelectorAll('.nav-btn').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Screenshot Interaction
const screenshotItems = document.querySelectorAll('.screenshot-item');

screenshotItems.forEach(item => {
    const img = item.querySelector('.screenshot');
    const content = item.closest('.project-card').querySelector('.screenshot-content');
    const contentText = content.querySelector('p');
    const previewImg = content.querySelector('.preview-img');

    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Reset all items in the same project card
        item.closest('.project-card').querySelectorAll('.screenshot-item').forEach(i => i.classList.remove('active'));
        content.classList.remove('active');
        previewImg.style.display = 'none';

        if (!isActive) {
            item.classList.add('active');
            content.classList.add('active');
            contentText.textContent = item.getAttribute('data-content') || 'No description available.';
            if (img && img.src) {
                previewImg.src = img.src;
                previewImg.style.display = 'block';
                console.log('Previewing:', img.src);
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
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    const homeSection = document.getElementById('home');
    if (homeSection.getBoundingClientRect().top < window.innerHeight) {
        homeSection.classList.add('visible');
    }
});