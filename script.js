// Add interactivity as needed
document.addEventListener('DOMContentLoaded', function() {
    // Example: alert on form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message!');
        });
    }
});
