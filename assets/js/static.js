
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

    showDataset('dataset-80-20');
    
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

// document.addEventListener('DOMContentLoaded', () => {
//     // 获取所有的 img 元素
//     const images = document.querySelectorAll('.image-link img');
    
//     images.forEach(img => {
//         const src = img.getAttribute('src'); // 获取 img 的 src 属性
//         const link = img.closest('a'); // 找到最近的包含 img 的 a 标签
//         if (link) {
//             link.setAttribute('href', src); // 将 a 标签的 href 属性设置为 img 的 src 属性
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const base = '/webgis-class-2024-g7/';

    document.querySelectorAll('a[href^="../"]').forEach(anchor => {
        const originalHref = anchor.getAttribute('href');
        const newHref = base + originalHref.substring(3); // remove "../" and prepend base
        anchor.setAttribute('href', newHref);
    });
});