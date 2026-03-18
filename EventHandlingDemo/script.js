const clickBtn = document.getElementById('clickBtn');
const output = document.getElementById('output');
const nameInput = document.getElementById('nameInput');
const colorSelect = document.getElementById('colorSelect');
const demoForm = document.getElementById('demoForm');

// Click Event
clickBtn.addEventListener('click', () => {
    output.textContent = "Button was clicked!";
});

// Input Event
nameInput.addEventListener('input', () => {
    output.textContent = `You are typing: ${nameInput.value}`;
});

// Change Event
colorSelect.addEventListener('change', () => {
    output.textContent = `Your favorite color is: ${colorSelect.value}`;
});

// Submit Event
demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    output.textContent = `Form submitted! Name: ${nameInput.value}, Color: ${colorSelect.value}`;
});

// Keyup Event
nameInput.addEventListener('keyup', (e) => {
    output.textContent = `Last key pressed: ${e.key}`;
});

// Mouseover / Mouseout Event
clickBtn.addEventListener('mouseover', () => {
    clickBtn.style.backgroundColor = '#28a745';
});
clickBtn.addEventListener('mouseout', () => {
    clickBtn.style.backgroundColor = '';
});

// Focus / Blur Event
nameInput.addEventListener('focus', () => {
    nameInput.style.backgroundColor = '#e0f7fa';
});
nameInput.addEventListener('blur', () => {
    nameInput.style.backgroundColor = '';
});