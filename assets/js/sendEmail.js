function sendMail(contactForm) {
    emailjs.send('service_sfp387j', 'template_ow2joah', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }, 'XJX_j1u0MtZuFo8VE')
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; // To block loading a new page
}