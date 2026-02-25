// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Button Functionality

// 1. GitHub Button
document.getElementById('githubBtn').addEventListener('click', () => {
    window.open('https://github.com/mulisa7', '_blank');
});

// 2. Download CV Button
document.getElementById('downloadCvBtn').addEventListener('click', () => {
    // Create a simple text CV
    const cvContent = `
MULISA MAPHAHA - CV
===================
Born: June 29, 2005
From: Venda, South Africa

About Me:
I'm a Computer Science student who loves music and technology. 
I'm a music producer, drummer, and soccer player.

Education:
- Computer Science Student

Skills:
- Music Production
- Drumming
- Soccer
- Basic Programming

Music:
- Released 5+ songs
- Available on Spotify, Apple Music, YouTube

Contact:
Email: mulisa.maphaha@email.com
Instagram: @mulisa_maphaha
    `;
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mulisa_Maphaha_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('✅ CV downloaded successfully!');
});

// 3. Contact Button (scroll to contact section)
document.getElementById('contactBtn').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// 4. Listen to Music Button
document.getElementById('listenMusicBtn').addEventListener('click', () => {
    window.open('https://open.spotify.com/artist/3gIIyfTWPa3RPWGz3o0dtp?si=y-gHtjzYQqGrDqvPAshUaw', '_blank');
    alert('🎵 Opening music player... (Replace with your actual music link)');
});

// 5. Send Message Button
document.getElementById('sendMessageBtn').addEventListener('click', () => {
    const message = document.getElementById('messageInput').value;
    
    if (message.trim() === '') {
        alert('⚠️ Please type a message first!');
        return;
    }
    
    // Create mailto link
    const subject = encodeURIComponent('Message from Portfolio Visitor');
    const body = encodeURIComponent(message + '\n\nSent from your portfolio website.');
    window.location.href = `mailto:mulisamaphaha83@email.com?subject=${subject}&body=${body}`;
    
    // Clear the message box
    document.getElementById('messageInput').value = '';
});

// 6. Copy Email Button
document.getElementById('copyEmailBtn').addEventListener('click', () => {
    const email = document.getElementById('emailDisplay').textContent;
    navigator.clipboard.writeText(email).then(() => {
        alert('📋 Email copied to clipboard!');
    }).catch(() => {
        alert('❌ Failed to copy email');
    });
});

// Social Media Buttons
document.querySelectorAll('.socials i, .social-link').forEach((element, index) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Determine which social media was clicked
        if (element.id === 'github' || element.id === 'linkGithub') {
            window.open('https://github.com/mulisa7', '_blank');
        }
        else if (element.id === 'linkedin' || element.id === 'linkLinkedin') {
            window.open('https://www.linkedin.com/in/mulisa-maphaha-3054b2281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank');
        }
        else if (element.id === 'instagram' || element.id === 'linkInstagram') {
            window.open('https://www.instagram.com/mulisa_maphaha?igsh=eG13N3pzYjhrbWtr&utm_source=qr');
        }
        else if (element.id === 'spotify' || element.id === 'linkSpotify') {
            window.open('https://open.spotify.com/artist/3gIIyfTWPa3RPWGz3o0dtp?si=y-gHtjzYQqGrDqvPAshUawen.spotify.com/artist/your-artist-id', '_blank');
        }
        else if (element.id === 'youtube' || element.classList.contains('fa-youtube')) {
            window.open('https://youtube.com/@mulisamaphaha', '_blank');
        }
    });
});

// Add scroll animation for navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.style.fontWeight = '600';
        } else {
            item.style.fontWeight = '300';
        }
    });
});

// Update copyright year
const year = new Date().getFullYear();
document.querySelector('footer p:first-child').textContent = `© ${year} Mulisa Maphaha. All rights reserved.`;

// Show welcome message when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        alert('👋 Welcome to My portfolio! Feel free to explore and connect.');
    }, 500);
});

// Add tooltips to social icons
const socialIcons = document.querySelectorAll('.socials i');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', (e) => {
        const platform = e.target.classList[1].replace('fa-', '');
        e.target.title = `Follow me on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
    });
});