// Initialize EmailJS with your public key
emailjs.init("8wIWH9kJaolfFGeRO"); // Replace with your actual Public Key

const form = document.getElementById("detailsForm");
const status = document.getElementById("statusMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    const formData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        passengers: document.getElementById("passengers").value
    };

    // Save the user's name in localStorage
    localStorage.setItem("userName", formData.name);

    // Send email via EmailJS
    emailjs.send("service_v525n17", "template_7mtdpyb", formData)
        .then(() => {
            status.innerText = "Details submitted successfully!";
            status.style.color = "#4caf50";

            // Redirect to home.html after 1 second
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);

        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            status.innerText = "Failed to send. Please try again.";
            status.style.color = "#e53935";
        });
});
