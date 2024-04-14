const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', event => {
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
    }

    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    form.reset();
});

