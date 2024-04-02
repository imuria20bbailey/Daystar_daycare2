document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the entered username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === 'barbra' && password === 'admin') {
        alert('Login successful! Redirecting...');
        // Redirect to dashboard or another page
        window.location.href = '/dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
