
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleTitles = document.querySelectorAll('.toggle-title');
    toggleTitles.forEach(toggleTitle => {
        const toggleParagraph = toggleTitle.nextElementSibling;
        const arrow = toggleTitle.querySelector('.arrow');

        toggleTitle.addEventListener('click', () => {
            toggleParagraph.classList.toggle('hidden');
            toggleTitle.classList.toggle('active');
            if (toggleTitle.classList.contains('active')) {
                arrow.innerHTML = '&#9207;'; 
            } else {
                arrow.innerHTML = '&#9205;'; 
            }
        });
    });
});
