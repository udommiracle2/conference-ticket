document.querySelector("button").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gitHub = document.getElementById("text").value;
    const upload = document.getElementById("upload").value;

    if (name === "") {
        alert("Please enter full name.");
        return;
    }
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }
    if (gitHub === "") {
        alert("Username cannot be empty");
        return;
    }

    if (upload.size < 500 * 1024){
        alert("File size must be less than 500KB");
    }

    document.getElementById('congrat').textContent = `Congrats, ${name}! Your ticket is ready`;
    document.getElementById('message').textContent = `We've emailed your ticket to ${email} and will send updates in the run up to event.`;
    document.querySelector(".upload-con").style.display = "none";



})











