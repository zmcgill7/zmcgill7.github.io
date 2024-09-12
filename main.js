function validateForm() {
    const submitButton = document.getElementById('submit-contact');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        submitButton.disabled = false;
        if (!submitButton.classList.contains('enabled-button')) {
            submitButton.classList.remove('disabled-button');
            submitButton.classList.add('enabled-button');
        }
    } else {
        submitButton.disabled = true;
        if (!submitButton.classList.contains('disabled-button')) {
            submitButton.classList.remove('enabled-button');
            submitButton.classList.add('disabled-button');
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    if (this.getElementById('name')) {
        document.getElementById('name').addEventListener('input', validateForm);
        document.getElementById('email').addEventListener('input', validateForm);
        document.getElementById('message').addEventListener('input', validateForm);
    }
});