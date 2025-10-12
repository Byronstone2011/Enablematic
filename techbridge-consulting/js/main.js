// Simple interaction scripts
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Thank you for your interest! Contact form coming soon.');
        });
    }
    
    console.log('TechBridge Consulting website loaded successfully!');
});