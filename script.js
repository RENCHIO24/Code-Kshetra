function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);

}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}