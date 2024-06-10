document.addEventListener("DOMContentLoaded", function() {
    const aboutText = document.getElementById('about-text');
    const toggleAboutBtn = document.getElementById('toggle-about-btn');

    toggleAboutBtn.addEventListener('click', function() {
        if (aboutText.style.display === 'none') {
            aboutText.style.display = 'block';
            toggleAboutBtn.textContent = 'Toggle Less';
        } else {
            aboutText.style.display = 'none';
            toggleAboutBtn.textContent = 'Toggle More';
        }
    });
});