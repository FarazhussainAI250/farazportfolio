// Combined JavaScript for Portfolio

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    
    // Save theme preference
    const isLightMode = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.getElementById('mobileToggle');
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    
    // Setup nav links to close mobile menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('navMenu').classList.remove('active');
            document.getElementById('mobileToggle').classList.remove('active');
        });
    });
});