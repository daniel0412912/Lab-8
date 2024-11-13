const sizeBtn = document.querySelector('.sizeBtn')

let isTextLarge = false

sizeBtn.addEventListener('click', () => {
    increaseTextSize()
})

function increaseTextSize() {
    if (isTextLarge) {
        document.body.classList.remove("large-text");
    } else {
        document.body.classList.add("large-text");
    }

    isTextLarge = !isTextLarge;
}

function toggleColorScheme() {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}

function displayAltText() {
    const imgWrappers = document.querySelectorAll('.imgWrapper');
    imgWrappers.forEach(wrapper => {
        const img = wrapper.querySelector('.image');
        const altText = wrapper.querySelector('.altText');
    
        if (!altText.textContent) {
          altText.textContent = img.alt;
        }
    
        altText.style.display = altText.style.display === 'none' ? 'block' : 'none';
    });
}