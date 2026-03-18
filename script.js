document.addEventListener("DOMContentLoaded", function() {
    const user = "nico";
    const domain = "buehrig.org";
    const mailAddr = user + "@" + domain;

    const link = document.getElementById('mail-link');
    const text = document.getElementById('mail-text');

    if (link && text) {
        link.href = "mailto:" + mailAddr;
        text.textContent = mailAddr;
    }
});