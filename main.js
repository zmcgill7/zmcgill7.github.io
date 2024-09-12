var currentImg = 0;

document.addEventListener('DOMContentLoaded', function () {
    showSlides(currentImg);
});

function showSlides(n) {
    var images = document.querySelectorAll('.slide');

    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    currentImg += n;
    if (currentImg >= images.length) { currentImg = 0; }
    if (currentImg < 0) { currentImg = images.length - 1; }

    images[currentImg].style.display = 'flex';
}

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