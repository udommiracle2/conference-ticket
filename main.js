document.querySelector("button").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gitHub = document.getElementById("text").value;
    const upload = document.getElementById("upload").file;

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

    document.getElementById('congrat').textContent = `Congrats, ${name}! Your ticket is ready`;
    document.getElementById('message').textContent = `We've emailed your ticket to ${email} and will send updates in the run up to event.`;
    // document.querySelector(".upload-con").style.display = "none";
    document.querySelector(".upload-con").innerHTML = '<img src="./conference-ticket-generator-main/assets/images/pattern-ticket.svg" alt="">';
    document.querySelector(".upload-con").style.marginTop = "20px";
    document.querySelector(".upload-con").style.height = "20vh";
    document.querySelector(".upload-con").style.alignItems = "center";


})











