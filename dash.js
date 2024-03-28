// function validate() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if (username == "Admin" && password == "Password#123") {
//         window.location = "dashboard.html"; // Redirecting to other page.
//         return true;
//     } else {
//         attempt--; // Decrementing by one.
//         alert("You have left " + attempt + " attempt;");
//         // Disabling fields after 3 attempts.
//         if (attempt == 0) {
//             document.getElementById("username").disabled = true;
//             document.getElementById("password").disabled = true;
//             document.getElementById("submit").disabled = true;
//             return false;
//         }
//     }
// }



document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Your authentication logic goes here
    // For demonstration purposes, let's assume authentication is successful
    var isAuthenticated = true; // Change this based on your authentication logic

    if (isAuthenticated) {
        // Redirect to the dashboard page upon successful login
        window.location.href = "dashboard.html";
    } else {
        // Display an error message if authentication fails
        alert("Invalid username or password. Please try again.");
    }
});







//sitter management
$(document).ready(function() {
     
    // INPUT KEY
    $('input.numbers').keyup(function(event) {
        if(event.which >= 37 && event.which <= 40) return;
        $(this).val(function(index, value) {
            return value
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, "");
        });
    });



    document.getElementById("register-sitter-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    var formData = {
        name: document.getElementById("name").value,
        location: document.getElementById("location").value,
        dob: document.getElementById("date-of_birth").value,
        nextOfKin: document.getElementById("next_of_kin").value,
        nin: document.getElementById("nin").value,
        recommenderName: document.getElementById("name_of_recommender").value,
        religion: document.getElementById("religion").value,
        educationLevel: document.getElementById("level_of_education").value,
        phoneNumber: document.getElementById("phoneNumber").value
    };

    // Send form data to backend
    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "/register-sitter", true); // Assuming your registration endpoint is '/users/register'
    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4) {
    //         if (xhr.status === 201) {
    //             alert("User registered successfully");
    //             // Clear form fields or do any additional actions
    //         } else {
    //             alert("Error: " + xhr.statusText);
    //         }
    //     }
    // };
    // xhr.send(JSON.stringify(formData));
});
});

 