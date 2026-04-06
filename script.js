// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Copy email to clipboard
document.getElementById('copyEmailBtn')?.addEventListener('click', () => {
    const email = document.querySelector('.contact-item span').innerText;
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    });
});

// Social link redirections (update with your actual profiles)
document.getElementById('githubLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://github.com/mulisamaphaha', '_blank');
});
document.getElementById('linkedinLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://linkedin.com/in/mulisa-maphaha', '_blank');
});

// Simple welcome message (user‑friendly feedback)
window.addEventListener('load', () => {
    console.log('Portfolio ready!');
    // Optional: show a subtle toast (not intrusive)
});