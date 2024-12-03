const form = document.getElementById('numberForm');
const numberInput = document.getElementById('number');
const error = document.getElementById('error');

form.addEventListener('submit', function(event) {
    const value = parseFloat(numberInput.value);
    if (value < 10 || isNaN(value)) {
        event.preventDefault(); // Prevent form submission
        error.style.display = 'block'; // Show error message
    } else {
        error.style.display = 'none'; // Hide error message
        alert('Form submitted successfully with number: ' + value);
    }
});