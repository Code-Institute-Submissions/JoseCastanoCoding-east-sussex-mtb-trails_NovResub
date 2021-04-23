function sendMail(contactForm) {
    emailjs.send("eastSussexMtbTrails", "eastSussexMtbTrails_temp", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailAddress.value,
        "user_question": contactForm.userQuestion.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            });
    return false;
}