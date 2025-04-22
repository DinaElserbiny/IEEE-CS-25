// Accessing the elements
const fontSelect = document.getElementById('fontSelect');
const colorSelect = document.getElementById('colorSelect');
const sizeSelect = document.getElementById('sizeSelect');

// Function to apply selected settings to the page
function applySettings(font, color, size) {
    document.body.style.fontFamily = `'${font}', sans-serif`;
    document.body.style.color = color;
    document.body.style.fontSize = `${size}px`;
}

// Save settings to local storage
function saveSettings() {
    localStorage.setItem('selectedFont', fontSelect.value);
    localStorage.setItem('selectedColor', colorSelect.value);
    localStorage.setItem('selectedSize', sizeSelect.value);
}

// Load settings from local storage
function loadSettings() {
    const savedFont = localStorage.getItem('selectedFont') || 'Open Sans';
    const savedColor = localStorage.getItem('selectedColor') || 'black';
    const savedSize = localStorage.getItem('selectedSize') || '16';

    fontSelect.value = savedFont;
    colorSelect.value = savedColor;
    sizeSelect.value = savedSize;

    applySettings(savedFont, savedColor, savedSize);
}

// Event listeners for select boxes to update settings
fontSelect.addEventListener('change', () => {
    applySettings(fontSelect.value, colorSelect.value, sizeSelect.value);
    saveSettings();
});

colorSelect.addEventListener('change', () => {
    applySettings(fontSelect.value, colorSelect.value, sizeSelect.value);
    saveSettings();
});

sizeSelect.addEventListener('change', () => {
    applySettings(fontSelect.value, colorSelect.value, sizeSelect.value);
    saveSettings();
});

// Load saved settings when the page is loaded
loadSettings();
