// Function to show success message
function showSuccess(message) {
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = '<div class="success">' + message + '</div>';
}

// Function to show error message
function showError(message) {
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = '<div class="error">' + message + '</div>';
}

// Function to generate a random token
function generateToken() {
    var characters =
        'asdfjlfkajsdlkfjboijrfijfiehfnoiewfjfewfihwgoawahowhefouhojfjlfjalsjdflkajsflkjalfjlasdjflajslfjaslfjashadauefajoeugaofaJLAJO;FHOADGHAOUHFOABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*0123456789';
    var token = '';
    for (var i = 0; i < 32; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

// Function to perform signup
function signup(event) {
    event.preventDefault();

    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('signupConfirmPassword').value;

    // Perform signup validation
    if (email === '' || password === '' || confirmPassword === '') {
        showError('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }

    // Store the user email and password in local storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Generate a token
    var token = generateToken();

    // Store the token in local storage
    localStorage.setItem('userToken', token);

    // Show success message
    showSuccess('Sign up successful!');

    // Redirect to login page
    setTimeout(function () {
        window.location.href = 'login.html';
    }, 2000);
}

// Function to perform login
function login(event) {
    event.preventDefault();

    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    // Perform login validation
    if (email === '' || password === '') {
        showError('Please fill in all fields.');
        return;
    }

    // Perform login logic
    var storedEmail = localStorage.getItem('userEmail');
    var storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        // Generate a token
        var token = generateToken();

        // Store the token in local storage
        localStorage.setItem('userToken', token);

        // Show success message
        showSuccess('Login successful!');

        // Redirect to welcome page
        setTimeout(function () {
            window.location.href = 'welcome.html';
        }, 2000);
    } else {
        // Show error message
        showError('Invalid email or password.');
    }
}

// Function to perform password reset
function resetPassword(event) {
    event.preventDefault();

    var email = document.getElementById('resetEmail').value;

    // Perform password reset validation
    if (email === '') {
        showError('Please enter your email.');
        return;
    }

    // Perform password reset logic
    // For this example, let's assume the password is reset successfully
    // You can replace this logic with your own password reset mechanism

    // Show success message
    showSuccess('Password reset instructions sent to your email.');

    // Clear the email input field
    document.getElementById('resetEmail').value = '';
}

// Function to perform logout
function logout() {
    // Remove the token from local storage
    localStorage.removeItem('userToken');

    // Redirect to login page
    window.location.href = 'login.html';
}

// Check if user is already logged in on index.html
if (window.location.href.endsWith('index.html')) {
    var userToken = localStorage.getItem('userToken');
    var logoutButton = document.getElementById('logoutButton');

    if (userToken) {
        // Redirect to welcome page
        window.location.href = 'welcome.html';
    } else {
        // Hide logout button
        logoutButton.style.display = 'none';
    }
}

// Check if user is already logged in on welcome.html
if (window.location.href.endsWith('welcome.html')) {
    var userToken = localStorage.getItem('userToken');

    if (!userToken) {
        // Redirect to login page
        window.location.href = 'login.html';
    }
}