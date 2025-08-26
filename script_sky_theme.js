/* Sky Theme Interactive Features - Enhanced Script */

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sky Theme Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    // Create floating paint elements
    createFloatingPaintElements();
    
    // Add paint brush cursor effect
    addPaintBrushCursor();
    
    // Animate elements on scroll
    animateOnScroll();
    
    // Add parallax effects
    addParallaxEffects();
});

// Create floating paint elements
function createFloatingPaintElements() {
    const colors = ['#FF4444', '#FFD700', '#32CD32', '#9370DB', '#FF8C00', '#FF69B4'];
    const container = document.body;
    
    for (let i = 0; i < 12; i++) {
        const paint = document.createElement('div');
        paint.className = 'floating-paint';
        paint.style.cssText = `
            position: fixed;
            width: ${Math.random() * 20 + 5}px;
            height: ${Math.random() * 20 + 5}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            opacity: 0.4;
            z-index: -1;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatPaint ${Math.random() * 15 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 8}s;
        `;
        container.appendChild(paint);
    }
}

// Add paint brush cursor effect
function addPaintBrushCursor() {
    document.addEventListener('mousemove', function(e) {
        const cursor = document.querySelector('.paint-cursor');
        if (!cursor) {
            const newCursor = document.createElement('div');
            newCursor.className = 'paint-cursor';
            newCursor.innerHTML = '🖌️';
            newCursor.style.cssText = `
                position: fixed;
                font-size: 1.5rem;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
                filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
            `;
            document.body.appendChild(newCursor);
        }
        
        const cursorElement = document.querySelector('.paint-cursor');
        cursorElement.style.left = e.clientX + 'px';
        cursorElement.style.top = e.clientY + 'px';
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);

    // Observe feature cards and term cards
    document.querySelectorAll('.feature-card, .term-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });
}

// Add parallax effects
function addParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const clouds = document.querySelectorAll('.paint-splatter');
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        clouds.forEach((cloud, index) => {
            const speed = 0.5 + (index * 0.2);
            cloud.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatPaint {
        0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.4;
        }
        25% { 
            transform: translateY(-40px) rotate(90deg) scale(1.2); 
            opacity: 0.6;
        }
        50% { 
            transform: translateY(-60px) rotate(180deg) scale(0.8); 
            opacity: 0.3;
        }
        75% { 
            transform: translateY(-30px) rotate(270deg) scale(1.1); 
            opacity: 0.5;
        }
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .paint-cursor {
        transform: translate(-50%, -50%);
    }
    
    .floating-paint {
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);

// Enhanced hover effects for cards
document.querySelectorAll('.feature-card, .term-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.03)';
        this.style.boxShadow = '0 20px 40px rgba(135, 206, 235, 0.4)';
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 8px 25px rgba(135, 206, 235, 0.2)';
    });
});

// Add click paint effect
document.addEventListener('click', function(e) {
    const paintDrop = document.createElement('div');
    paintDrop.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${['#FF4444', '#FFD700', '#32CD32', '#9370DB'][Math.floor(Math.random() * 4)]};
        border-radius: 50%;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        z-index: 1000;
        animation: paintSplash 0.6s ease-out forwards;
    `;
    document.body.appendChild(paintDrop);
    
    setTimeout(() => paintDrop.remove(), 600);
});

// Add paint splash animation
const splashStyle = document.createElement('style');
splashStyle.textContent = `
    @keyframes paintSplash {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(splashStyle);

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(135, 206, 235, 0.2)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(135, 206, 235, 0.1)';
    }
});
