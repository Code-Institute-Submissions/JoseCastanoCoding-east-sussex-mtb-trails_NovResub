function sendMail(contactForm) {
    emailjs.send("eastSussexMtbTrails", "eastSussexMtbTrails_temp", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailAddress.value,
        "user_question": contactForm.userQuestion.value
    })
        .then(
            function (response) {
                document.getElementById("emailForm-message").innerHTML = "Thanks for your message! We will be in touch shortly.";
            },
            function (error) {
                document.getElementById("emailForm-message").innerHTML = "Oops! Something went wrong...";
            });
    return false;
}