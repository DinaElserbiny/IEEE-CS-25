// Accessing the form fields and select box
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const optionsSelect = document.getElementById('options');

// Load the saved form data from local storage if available
function loadFormData() {
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedPhone = localStorage.getItem('phone');
    const savedOption = localStorage.getItem('option');

    if (savedName) nameInput.value = savedName;
    if (savedEmail) emailInput.value = savedEmail;
    if (savedPhone) phoneInput.value = savedPhone;
    if (savedOption) optionsSelect.value = savedOption;
}

// Save form data to local storage
function saveFormData() {
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('phone', phoneInput.value);
    localStorage.setItem('option', optionsSelect.value);
}

// Clear form data from local storage when the page is closed or reloaded
window.onbeforeunload = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    localStorage.removeItem('option');
};

// Save the form data whenever the user changes a field or selects an option
nameInput.addEventListener('input', saveFormData);
emailInput.addEventListener('input', saveFormData);
phoneInput.addEventListener('input', saveFormData);
optionsSelect.addEventListener('change', saveFormData);

// Load the form data when the page is loaded or reloaded
loadFormData();
