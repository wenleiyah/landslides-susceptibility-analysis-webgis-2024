
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


function showDataset(datasetId) {
    // 隐藏所有的special row并移除active类
    const specialRows = document.querySelectorAll('.row.special');
    specialRows.forEach(row => {
        row.classList.add('hidden');
        row.classList.remove('active');
        const images = row.querySelectorAll('img');
        images.forEach(img => {
            img.classList.remove('show');
        });
    });

    // 移除所有flex-item的active类
    const flexItems = document.querySelectorAll('.flex-item');
    flexItems.forEach(item => {
        item.classList.remove('active');
    });

    // 显示选中的special row并添加active类
    const selectedRow = document.getElementById(datasetId);
    if (selectedRow) {
        selectedRow.classList.remove('hidden');
        selectedRow.classList.add('active');
        setTimeout(() => {
            const images = selectedRow.querySelectorAll('img');
            images.forEach(img => {
                img.classList.add('show');
            });
        }, 10); // 确保隐藏状态改变后再添加动画类
    }

    // 给对应的flex-item添加active类
    const activeFlexItem = Array.from(flexItems).find(item => item.textContent.trim() === datasetId.split('-').join(' '));
    if (activeFlexItem) {
        activeFlexItem.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('image');
    const imageLink = document.getElementById('image-link');
    const src = image.getAttribute('src');
    imageLink.setAttribute('href', src);
});