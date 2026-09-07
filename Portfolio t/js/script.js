

// Current Date and Time

function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.getElementById("datetime").innerHTML = date + " " + time;
}

// Update every second
setInterval(updateDateTime, 1000);

// Run once at the beginning
updateDateTime();



// Form validation

function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let message = document.getElementById("message").value;

    // Name Validation
    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    // Phone Validation (11 digits)
    let phonePattern = /^[0-9]{11}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must be 11 digits.");
        return false;
    }

    // Address Validation
    if (address == "") {
        alert("Please enter your address.");
        return false;
    }

    // Message Validation
    if (message == "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}