
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

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.clickable').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const targetId = this.getAttribute('data-target');
            
            document.querySelectorAll('.row.special').forEach(div => {
                div.style.display = 'none';
                div.querySelectorAll('img').forEach(img => {
                    img.classList.remove('show');
                });
            });
            
            const targetElement = document.getElementById(targetId);
            targetElement.style.display = 'flex';

            setTimeout(() => {
                targetElement.querySelectorAll('img').forEach(img => {
                    img.classList.add('show');
                });
            }, 10);
 
            document.querySelectorAll('.clickable').forEach(btn => {
                btn.classList.remove('clicked');
            });
            
            this.classList.add('clicked');
        });
    });
});